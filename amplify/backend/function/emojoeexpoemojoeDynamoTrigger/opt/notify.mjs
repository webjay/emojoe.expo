/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { Expo } from 'expo-server-sdk';
import { batchWrite } from './dynamo.mjs';

const expo = new Expo();
const sendPushNotificationsAsync = expo.sendPushNotificationsAsync.bind(expo);

function handleReceipts(
  makePushTokenGroupValueFromNotification,
  notifications,
  receipts,
) {
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

function notificationsUniqueByPushToken(notifications) {
  return notifications.filter(
    ({ to }, index) =>
      Expo.isExpoPushToken(to) &&
      index === notifications.findIndex(({ to: pt }) => to === pt),
  );
}

/**
 * @param {import('expo-server-sdk').ExpoPushMessage} makePushTokenGroupValueFromNotification
 * @param {import('expo-server-sdk').ExpoPushMessage[]} notifications
 */
export async function sendExpoNotifications(
  makePushTokenGroupValueFromNotification,
  notifications,
) {
  const notificationChunks = expo.chunkPushNotifications(
    notificationsUniqueByPushToken(notifications),
  );
  const receiptChunks = await Promise.all(
    notificationChunks.map(sendPushNotificationsAsync),
  );
  await handleReceipts(
    makePushTokenGroupValueFromNotification,
    notifications,
    receiptChunks.flat(),
  );
}
