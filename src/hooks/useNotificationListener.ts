import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
  DEFAULT_ACTION_IDENTIFIER,
} from 'expo-notifications';
import emoRecognition from '@src/lib/recognition.json';
import { handleCreateRecognition } from '@src/lib/task';
import Sentry from '@src/lib/sentry';

function logEvent(message: string, extra: Record<string, unknown>) {
  Sentry.captureMessage(message, { extra });
}

export default function useNotificationListener() {
  const { replace: redirect } = useRouter();
  useEffect(() => {
    const notificationListener = addNotificationReceivedListener(
      ({
        request: {
          content: { data },
        },
      }) => {
        logEvent('Notification received', data);
      },
    );
    const responseListener = addNotificationResponseReceivedListener(
      ({
        actionIdentifier,
        notification: {
          request: {
            content: { data },
          },
        },
      }) => {
        logEvent('Response received', data);
        const { url, activityId } = data;
        if (actionIdentifier === DEFAULT_ACTION_IDENTIFIER) {
          if (url) redirect(url);
          return;
        }
        const { emoji } =
          emoRecognition[actionIdentifier as keyof typeof emoRecognition];
        handleCreateRecognition(activityId, emoji);
        redirect(`/activity/${activityId}/thx?emoji=${emoji}`);
      },
    );
    return () => {
      removeNotificationSubscription(notificationListener);
      removeNotificationSubscription(responseListener);
    };
  }, [redirect]);
}
