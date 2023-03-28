import { createURL, addEventListener } from 'expo-linking';
import { addNotificationResponseReceivedListener, DEFAULT_ACTION_IDENTIFIER } from 'expo-notifications';
import { LinkingOptions } from '@react-navigation/native';
import type { StackNavigatorParamList } from '../types/navigation';

type Listener = (url: string) => void;
type EmoNotificationData = { url: string };

const prefix = createURL('/');

function subscribe(listener: Listener) {
  function onReceiveURL({ url }: EmoNotificationData) {
    listener(url);
  }
  const subscriptionUrl = addEventListener('url', onReceiveURL);
  const subscriptionNotification = addNotificationResponseReceivedListener(({
    actionIdentifier, notification: { request: { content: { data } } },
  }) => {
    if (actionIdentifier === DEFAULT_ACTION_IDENTIFIER) {
      onReceiveURL(data as EmoNotificationData);
      return;
    }
    listener(`${prefix}thx/${actionIdentifier}`);
  });
  return () => {
    subscriptionUrl.remove();
    subscriptionNotification.remove();
  };
}

const linking: LinkingOptions<StackNavigatorParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      GroupJoin: 'group/join/:groupId',
      GroupActivity: 'activity/:activityId',
      Thx: 'thx/:actionIdentifier',
    },
  },
  subscribe,
};

export default linking;
