/* eslint-disable import/extensions */
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { Expo } from 'expo-server-sdk';
import { query, get } from './dynamo.mjs';

const expo = new Expo();
const sendPushNotificationsAsync = expo.sendPushNotificationsAsync.bind(expo);

// const appScheme = 'emojoe2';

function firstName(name) {
  if (!name) return '🃟';
  return name.split(' ')[0];
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

function handleReceiptChunks(receiptChunks) {
  console.log({ receiptChunks });
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
  return profiles
    .filter(({ owner: profileOwner }) => profileOwner !== owner)
    .map(({ pushToken }) => ({
      to: pushToken,
      title: `${firstName(ownerProfile.name)} just ➡️ ${emoji}`,
      data: {
        url: `https://emojoe.app/activity/${activityId}`,
        // activityId,
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
  const activity = await getActivity(activityId);
  const [profile] = await getProfilesBySubId(activity.owner.substring(0, 36));
  return {
    to: profile.pushToken,
    title: `You just received ${emoji}`,
    data: {
      url: `https://emojoe.app/activity/${activityId}`,
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
  await sendExpoNotifications(notifications.flat()).then(handleReceiptChunks);
}
