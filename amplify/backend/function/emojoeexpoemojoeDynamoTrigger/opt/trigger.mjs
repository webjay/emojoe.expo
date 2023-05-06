/* eslint-disable import/extensions */
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { Expo } from 'expo-server-sdk';
import { query, get, batchWrite } from './dynamo.mjs';

const expo = new Expo();
const sendPushNotificationsAsync = expo.sendPushNotificationsAsync.bind(expo);

const appScheme = 'emojoe2://';
// const appScheme = 'https://emojoe.app/';

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

function ownerToSubId(owner) {
  return owner.substring(0, 36);
}

function notificationsByPushTokenGroup(pushTokenGroup, dateBefore) {
  return query({
    TableName: process.env.API_EMOJOEEXPO_NOTIFICATIONTABLE_NAME,
    IndexName: 'notificationsByPushTokenGroupAndCreatedAt',
    KeyConditionExpression:
      '#pushTokenGroup = :pushTokenGroup AND #createdAt > :dateBefore',
    ExpressionAttributeNames: {
      '#pushTokenGroup': 'pushTokenGroup',
      '#createdAt': 'createdAt',
    },
    ExpressionAttributeValues: {
      ':pushTokenGroup': pushTokenGroup,
      ':dateBefore': dateBefore,
    },
    Limit: 1,
  });
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

function getProfilesBySubId(subId) {
  return query({
    TableName: process.env.API_EMOJOEEXPO_PROFILETABLE_NAME,
    IndexName: 'profilesBySubId',
    KeyConditionExpression: '#subId = :subId',
    ExpressionAttributeNames: {
      '#subId': 'subId',
    },
    ExpressionAttributeValues: {
      ':subId': subId,
    },
    Limit: 1,
  });
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

function handleReceipts(notifications, receipts) {
  const createdAt = new Date().toISOString();
  const putRequests = receipts.map((receipt, index) => ({
    PutRequest: {
      Item: {
        ...notifications[index],
        ...receipt,
        pushTokenGroup: makePushTokenGroupValueFromNotification(
          notifications[index],
        ),
        createdAt,
      },
    },
  }));
  if (putRequests.length === 0) return Promise.resolve();
  return batchWrite(
    process.env.API_EMOJOEEXPO_NOTIFICATIONTABLE_NAME,
    putRequests,
  );
}

/**
 * @param {import('expo-server-sdk').ExpoPushMessage[]} notifications
 */
function sendExpoNotifications(notifications) {
  const notificationChunks = expo.chunkPushNotifications(
    notifications.filter(({ to }) => Expo.isExpoPushToken(to)),
  );
  return Promise.all(notificationChunks.map(sendPushNotificationsAsync));
}

/**
 * @param {{ id: string, emoji: string, groupId: string, owner: string }} activity
 * @returns {import('expo-server-sdk').ExpoPushMessage[]}
 */
async function activityToExpoPushMessages({
  id: activityId,
  groupId,
  emoji,
  owner,
}) {
  const groupMemberships = await getGroupMembershipsByGroupId(groupId);
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
    .map(({ pushToken }) => ({
      to: pushToken,
      title: `${firstName(ownerProfile.name)} ➡️ ${emoji}`,
      data: {
        url: `${appScheme}activity/${activityId}`,
        groupId,
        activityId,
        emoji,
      },
      channelId: 'activity',
      categoryId: 'activity',
    }));
}

/**
 * @param {{ activityId: string, emoji: string }} recognition
 * @returns {import('expo-server-sdk').ExpoPushMessage}
 */
async function recognitionToExpoPushMessage({ activityId, emoji }) {
  const { owner, groupId } = await getActivity(activityId);
  const [{ pushToken }] = await getProfilesBySubId(ownerToSubId(owner));
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
  };
}

/**
 * @param {import('@types/aws-lambda').StreamRecord} record
 */
function recordHandler({ dynamodb: { NewImage } }) {
  const item = unmarshall(NewImage);
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
  const notifications = await Promise.all(Records.map(recordHandler));
  const notificationsFlat = notifications.flat();
  const receiptChunks = await sendExpoNotifications(notificationsFlat);
  await handleReceipts(notificationsFlat, receiptChunks.flat());
}
