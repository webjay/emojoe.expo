/* eslint-disable import/extensions */
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { query, get } from './dynamo.mjs';
import {
  ownerToSubId,
  getProfilesBySubIdHavingPushToken,
  notificationsByPushTokenGroup,
} from './helpers.mjs';
import { sendExpoNotifications } from './notify.mjs';

const appScheme = 'emojoe2://';
// const appScheme = 'https://emojoe.app/';
const NotificationTTL = 1 * 60 * 60;

// src/lib/groups.ts
const groupsPublic = {
  '613ec295-d346-4987-9dac-6c2dcbaea041': {
    emoji: '🧘',
    name: 'Meditate',
  },
  '22af81b1-07ad-46f5-ba73-da4c4502f8fe': {
    emoji: '🏋️',
    name: 'Exercise',
  },
  '5ee934fa-9555-447a-bbdf-9b585c9ef714': {
    emoji: '📚',
    name: 'Study',
  },
  'df1d0023-1814-434e-8ab1-f4fd5a526392': {
    emoji: '🚰',
    name: 'Hydrate',
  },
  '8463e3bd-a7cc-4979-a2a4-adcbfcb6cb4e': {
    emoji: '🚶',
    name: 'Walk',
  },
  '661280ec-8dd6-40c9-afd7-f4a4b7efba88': {
    emoji: '🏃',
    name: 'Run',
  },
};

function firstName(name) {
  if (!name) return '🃟';
  return name.split(' ')[0];
}

function makePushTokenGroupValue(pushToken, groupId) {
  return `${pushToken}_${groupId}`;
}

function makePushTokenGroupValueFromNotification({ to, data: { groupId } }) {
  return makePushTokenGroupValue(to, groupId);
}

async function profilesWithoutRecentGroupActivity(profiles, groupId) {
  const isPublicGroup = groupId in groupsPublic;
  const timeDiffMinutes = isPublicGroup ? 60 : 2;
  const dateBefore = new Date();
  dateBefore.setMinutes(dateBefore.getMinutes() - timeDiffMinutes);
  const dateBeforeISOString = dateBefore.toISOString();
  const profilesFiltered = [];
  await profiles.reduce(async (promise, profile) => {
    await promise;
    const recentGroupActivity = await notificationsByPushTokenGroup(
      makePushTokenGroupValue(profile.pushToken, groupId),
      dateBeforeISOString,
    );
    if (recentGroupActivity.length === 0) profilesFiltered.push(profile);
  }, Promise.resolve());
  return profilesFiltered;
}

function getGroupMembershipsByGroupId(groupId) {
  return query({
    TableName: process.env.API_EMOJOEEXPO_GROUPMEMBERSHIPTABLE_NAME,
    IndexName: 'groupMembershipsByGroupIdAndProfileId',
    KeyConditionExpression: '#groupId = :groupId',
    ExpressionAttributeNames: {
      '#groupId': 'groupId',
    },
    ExpressionAttributeValues: {
      ':groupId': groupId,
    },
    // Limit: 1,
  });
}

function getProfile(id) {
  return get({
    TableName: process.env.API_EMOJOEEXPO_PROFILETABLE_NAME,
    Key: { id },
  });
}

function getActivity(id) {
  return get({
    TableName: process.env.API_EMOJOEEXPO_ACTIVITYTABLE_NAME,
    Key: { id },
  });
}

/**
 * @param {{ id: string, emoji: string, groupId: string, owner: string, streakRepair?: boolean }} activity
 * @returns {import('expo-server-sdk').ExpoPushMessage[]}
 */
async function activityToExpoPushMessages({
  id: activityId,
  groupId,
  emoji,
  owner,
  streakRepair,
}) {
  if (streakRepair) return [];
  const groupMemberships = await getGroupMembershipsByGroupId(groupId);
  const profileGroupEmoji = groupMemberships.reduce(
    (acc, { profileId, emoji: groupEmoji }) => ({
      ...acc,
      [profileId]: groupEmoji,
    }),
    {},
  );
  const profiles = await Promise.all(
    groupMemberships.map(({ profileId }) => getProfile(profileId)),
  );
  const ownerProfile = profiles.find(
    ({ owner: profileOwner }) => profileOwner === owner,
  );
  const profilesFiltered = await profilesWithoutRecentGroupActivity(
    profiles,
    groupId,
  );
  return profilesFiltered
    .filter(({ owner: profileOwner }) => profileOwner !== owner)
    .map(({ pushToken, id }) => ({
      to: pushToken,
      title: `${firstName(ownerProfile.name)} ➡️ ${profileGroupEmoji[id]}`,
      data: {
        url: `${appScheme}activity/${activityId}`,
        groupId,
        activityId,
        emoji,
      },
      channelId: 'activity',
      categoryId: 'activity',
      ttl: NotificationTTL,
    }));
}

/**
 * @param {{ activityId: string, emoji: string }} recognition
 * @returns {import('expo-server-sdk').ExpoPushMessage}
 */
async function recognitionToExpoPushMessage({ activityId, emoji }) {
  const { owner, groupId } = await getActivity(activityId);
  const [{ pushToken }] = await getProfilesBySubIdHavingPushToken(
    ownerToSubId(owner),
  );
  return {
    to: pushToken,
    title: `${emoji}`,
    data: {
      url: `${appScheme}group/${groupId}`,
      groupId,
      activityId,
      emoji,
    },
    channelId: 'recognition',
    // categoryId: 'recognition',
    ttl: NotificationTTL,
  };
}

/**
 * @param {import('@types/aws-lambda').StreamRecord} record
 */
function recordHandler({ dynamodb: { NewImage } }) {
  const item = unmarshall(NewImage, {
    removeUndefinedValues: true,
  });
  const { __typename: typeName } = item;
  switch (typeName) {
    case 'Activity':
      return activityToExpoPushMessages(item);
    case 'Recognition':
      return recognitionToExpoPushMessage(item);
    default:
      throw new Error(`Unknown type: ${typeName}`);
  }
}

/**
 * @type {import('@types/aws-lambda').DynamoDBStreamHandler}
 */
export default async function handler({ Records }) {
  try {
    const notifications = await Promise.all(Records.map(recordHandler));
    await sendExpoNotifications(
      makePushTokenGroupValueFromNotification,
      notifications.flat(),
    );
  } catch (error) {
    console.warn(error);
  }
}
