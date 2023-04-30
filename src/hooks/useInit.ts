import { useEffect, useCallback } from 'react';
import {
  initNotifications,
  hasPermission,
  getPushToken,
} from '../lib/notifications';
import { profileUpdate } from '../lib/api';
import useSentry from './useSentry';
import useCompleteAuthSession from './useCompleteAuthSession';
import useNotificationListener from './useNotificationListener';

export default function useInit() {
  useSentry();
  useCompleteAuthSession();
  useNotificationListener();
  const storeCurrentPushToken = useCallback(async () => {
    if (await hasPermission()) {
      const pushToken = await getPushToken();
      if (pushToken !== false) {
        profileUpdate({ pushToken });
      }
    }
  }, []);
  useEffect(() => {
    initNotifications();
    storeCurrentPushToken();
  }, [storeCurrentPushToken]);
}
