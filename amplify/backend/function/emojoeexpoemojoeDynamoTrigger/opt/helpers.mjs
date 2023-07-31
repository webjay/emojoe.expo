/* eslint-disable import/extensions */
import { query } from './dynamo.mjs';

export function ownerToSubId(owner) {
  return owner.substring(0, 36);
}

export function getProfilesBySubIdHavingPushToken(subId) {
  return query({
    TableName: process.env.API_EMOJOEEXPO_PROFILETABLE_NAME,
    IndexName: 'profilesBySubId',
    KeyConditionExpression: 'subId = :subId',
    FilterExpression: 'size(pushToken) > :zero',
    ExpressionAttributeValues: {
      ':subId': subId,
      ':zero': 0,
    },
    Limit: 1,
  });
}

export function notificationsByPushTokenGroup(pushTokenGroup, dateBefore) {
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
