import { useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import {
  initNotifications,
  hasPermission,
  getPushToken,
} from '@src/lib/notifications';
import { profileUpdate } from '@src/lib/api';
import useSentry from './useSentry';
import useNotificationListener from './useNotificationListener';

export default function useInit() {
  useSentry();
  useNotificationListener();
  const storeCurrentPushToken = useCallback(async () => {
    if (await hasPermission()) {
      const pushToken = await getPushToken();
      if (pushToken !== false) {
        profileUpdate({ pushToken });
      }
    }
  }, []);
  const storeTimezone = useCallback(() => {
    profileUpdate({
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  }, []);
  useEffect(() => {
    storeTimezone();
    if (Platform.OS === 'web') return;
    initNotifications();
    storeCurrentPushToken();
  }, [storeCurrentPushToken, storeTimezone]);
}
