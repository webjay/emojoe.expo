import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import emoRecognition from './recognition.json';

const NotificationBehavior = {
  shouldShowAlert: true,
  shouldPlaySound: false,
  shouldSetBadge: false,
};

async function handleNotification() {
  return NotificationBehavior;
}

async function getPushToken() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status === 'granted') {
    const { data: token } = await Notifications.getExpoPushTokenAsync();
    return token;
  }
  return false;
}

function androidChannelConf() {
  if (Platform.OS !== 'android') return;
  const importance = Notifications.AndroidImportance.DEFAULT;
  Notifications.setNotificationChannelAsync('activity', {
    name: 'Activity',
    importance,
  });
  Notifications.setNotificationChannelAsync('recognition', {
    name: 'Recognition',
    importance,
  });
}

async function setActivityCategory() {
  if (Platform.OS === 'web') return;
  await Notifications.deleteNotificationCategoryAsync('activity');
  const actions = Object.keys(emoRecognition).map((key) => ({
    identifier: key,
    buttonTitle: emoRecognition[key as keyof typeof emoRecognition].emoji,
  }));
  Notifications.setNotificationCategoryAsync('activity', actions);
}

function initNotifications() {
  Notifications.setNotificationHandler({ handleNotification });
  setActivityCategory();
  androidChannelConf();
}

async function hasPermission() {
  const { granted, ios } = await Notifications.getPermissionsAsync();
  return (
    granted === true ||
    ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
}

export { initNotifications, getPushToken, hasPermission };
