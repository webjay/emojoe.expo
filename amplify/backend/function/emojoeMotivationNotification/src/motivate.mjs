/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { scan, query } from '/opt/dynamo.mjs';
import {
  ownerToSubId,
  getProfilesBySubIdHavingPushToken,
  notificationsByPushTokenGroup,
} from '/opt/helpers.mjs';
import { sendExpoNotifications } from '/opt/notify.mjs';

const MilliSecondsPerDay = 24 * 60 * 60 * 1000;
const NotificationTimeDiffMinutes = 12 * 60;
const NotificationTTL = 12 * 60 * 60;

function getGroups() {
  return scan({
    TableName: process.env.API_EMOJOEEXPO_GROUPMEMBERSHIPTABLE_NAME,
    ProjectionExpression: ['id', '#owner', 'emoji'].join(','),
    ExpressionAttributeNames: {
      '#owner': 'owner',
    },
  });
}

function getGroupActivity(id) {
  return query({
    TableName: process.env.API_EMOJOEEXPO_ACTIVITYTABLE_NAME,
    ProjectionExpression: ['createdAt'].join(','),
    IndexName: 'activitiesByGroupMembershipActivitiesIdAndCreatedAt',
    KeyConditionExpression: 'groupMembershipActivitiesId = :id',
    ExpressionAttributeValues: {
      ':id': id,
    },
    ScanIndexForward: false,
  });
}

function dateResetTime(dateStr) {
  return Date.parse(dateStr.substring(0, 10));
}

function calcStreakLength(date1, date2) {
  return (dateResetTime(date1) - dateResetTime(date2)) / MilliSecondsPerDay;
}

function streakDays(groupActivity, streakEndIndex) {
  return (
    calcStreakLength(
      groupActivity[0].createdAt,
      groupActivity[streakEndIndex].createdAt,
    ) + 1
  );
}

function areDatesWithinOneDay(date1, date2) {
  return calcStreakLength(date1, date2) <= 1;
}

function isLatestActivityYesterday([{ createdAt }]) {
  return calcStreakLength(new Date().toISOString(), createdAt) === 1;
}

function isLatestActivityAtThisHour([{ createdAt }]) {
  const date1 = new Date();
  const date2 = new Date(createdAt);
  return date1.getHours() === date2.getHours();
}

async function calcGroupStreak({ id, owner, emoji }) {
  const groupActivity = await getGroupActivity(id);
  if (
    groupActivity.length === 0 ||
    !isLatestActivityYesterday(groupActivity) ||
    !isLatestActivityAtThisHour(groupActivity)
  ) {
    return null;
  }
  const streakGapIndex = groupActivity.findIndex(({ createdAt }, index) => {
    if (index + 1 === groupActivity.length) return false;
    return !areDatesWithinOneDay(createdAt, groupActivity[index + 1].createdAt);
  });
  const streakEndIndex =
    streakGapIndex === -1 ? groupActivity.length - 1 : streakGapIndex;
  const streakLength = streakDays(groupActivity, streakEndIndex);
  return {
    owner,
    emoji,
    streakLength,
  };
}

function streaksUniqueByOwner(streaks) {
  return streaks
    .filter((streak) => streak !== null)
    .reduce(
      (result, { owner, emoji, streakLength }) => ({
        ...result,
        [owner]: {
          streaks: {
            ...result[owner]?.streaks,
            [emoji]: Math.max(result[owner]?.streaks[emoji] || 0, streakLength),
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
  await streaksWithProfiles.reduce(async (promise, item) => {
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

export default async function handler() {
  const groups = await getGroups();
  const groupStreaks = await Promise.all(groups.map(calcGroupStreak));
  const streaksWithProfiles = await Promise.all(
    assignProfiles(streaksUniqueByOwner(groupStreaks)),
  );
  const streaksWithoutRecentNotification =
    await profilesWithoutRecentNotification(streaksWithProfiles);
  await sendExpoNotifications(
    makePushTokenGroupValueFromNotification,
    makeNotifications(streaksWithoutRecentNotification),
  );
}
