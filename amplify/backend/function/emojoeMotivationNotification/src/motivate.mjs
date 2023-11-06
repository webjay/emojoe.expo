/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { randomUUID } from 'node:crypto';
import { scan, query, put } from '/opt/dynamo.mjs';
import {
  ownerToSubId,
  getProfilesBySubIdHavingPushToken,
  notificationsByPushTokenGroup,
} from '/opt/helpers.mjs';
import { sendExpoNotifications } from '/opt/notify.mjs';
import calcGroupStreak from './handle-data.mjs';

const NotificationTimeDiffMinutes = 12 * 60;
const NotificationTTL = 12 * 60 * 60;

function getGroups() {
  return scan({
    TableName: process.env.API_EMOJOEEXPO_GROUPMEMBERSHIPTABLE_NAME,
    ProjectionExpression: ['id', 'groupId', '#owner', 'emoji'].join(','),
    ExpressionAttributeNames: {
      '#owner': 'owner',
    },
  });
}

function getGroupActivity({ id }) {
  return query({
    TableName: process.env.API_EMOJOEEXPO_ACTIVITYTABLE_NAME,
    ProjectionExpression: ['createdAt', 'streakRepair'].join(','),
    IndexName: 'activitiesByGroupMembershipActivitiesIdAndCreatedAt',
    KeyConditionExpression: 'groupMembershipActivitiesId = :id',
    ExpressionAttributeValues: {
      ':id': id,
    },
    ScanIndexForward: false,
  });
}

async function ghostActivity(groupId, groupMembershipActivitiesId, owner) {
  const date = new Date();
  date.setHours(23, 59, 59, 999);
  const createdAt = date.toISOString();
  await put(process.env.API_EMOJOEEXPO_ACTIVITYTABLE_NAME, {
    id: randomUUID(),
    createdAt,
    updatedAt: createdAt,
    emoji: '👻',
    groupId,
    groupMembershipActivitiesId,
    owner,
    __typename: 'Activity',
    streakRepair: true,
  });
}

/**
 * @param groupActivities {{ emoji: string, owner: string, id: string, groupId: string, streak: number | null }[]}
 */
function streaksUniqueByOwner(groupActivities) {
  return groupActivities.reduce(
    (result, { emoji, owner, streak }) => ({
      ...result,
      [owner]: {
        streaks: {
          [emoji]: Math.max(result[owner]?.streaks[emoji] || 0, streak),
        },
      },
    }),
    {},
  );
}

function assignProfiles(groupStreaksByOwner) {
  return Object.entries(groupStreaksByOwner).map(async ([key, item]) => {
    const [profile] = await getProfilesBySubIdHavingPushToken(
      ownerToSubId(key),
    );
    return {
      ...item,
      profile,
    };
  });
}

function makePushTokenGroupValue(pushToken) {
  return `${pushToken}_MotivationDaily`;
}

function makePushTokenGroupValueFromNotification({ to }) {
  return makePushTokenGroupValue(to);
}

async function profilesWithoutRecentNotification(streaksWithProfiles) {
  const dateBefore = new Date();
  dateBefore.setMinutes(dateBefore.getMinutes() - NotificationTimeDiffMinutes);
  const dateBeforeISOString = dateBefore.toISOString();
  const filtered = [];
  await Object.values(streaksWithProfiles).reduce(async (promise, item) => {
    await promise;
    if (!item.profile) return;
    const recentNotification = await notificationsByPushTokenGroup(
      makePushTokenGroupValue(item.profile.pushToken),
      dateBeforeISOString,
    );
    if (recentNotification.length === 0) filtered.push(item);
  }, Promise.resolve());
  return filtered;
}

function notificationBody(streaks) {
  return Object.entries(streaks)
    .sort(([, a], [, b]) => b - a)
    .splice(0, 2)
    .map(([emoji, streakLength]) => `${streakLength} with ${emoji}`)
    .join(' and day ');
}

function makeNotifications(items) {
  return items.map(({ profile: { pushToken }, streaks }) => ({
    to: pushToken,
    title: 'Build your habit',
    body: `You made it to day ${notificationBody(streaks)}`,
    ttl: NotificationTTL,
  }));
}

export async function handleNotifications(groupActivities) {
  const groupStreaksWithProfiles = await Promise.all(
    assignProfiles(streaksUniqueByOwner(groupActivities)),
  );
  const streaksWithoutRecentNotification =
    await profilesWithoutRecentNotification(groupStreaksWithProfiles);
  await sendExpoNotifications(
    makePushTokenGroupValueFromNotification,
    makeNotifications(streaksWithoutRecentNotification),
  );
}

async function handleGhostStreak({
  streak,
  id: groupMembershipActivitiesId,
  groupId,
  owner,
}) {
  if (streak === -1) {
    await ghostActivity(groupId, groupMembershipActivitiesId, owner);
  }
}

function filterStreak({ streak }) {
  return streak > 0;
}

export default async function handler() {
  const groups = await getGroups();
  const groupActivities = await Promise.all(groups.map(getGroupActivity));
  const streaks = groupActivities.map(calcGroupStreak);
  const streaksWithGroups = streaks.map((streak, index) => ({
    ...groups[index],
    streak,
  }));
  await Promise.all(streaksWithGroups.map(handleGhostStreak));
  await handleNotifications(streaksWithGroups.filter(filterStreak));
}
