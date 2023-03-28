import { useEffect, useCallback } from 'react';
import { initNotifications, hasPermission, getPushToken } from '../lib/notifications';
import { profileUpdate } from '../lib/api';

export default function useInit() {
  const storeCurrentPushToken = useCallback(async () => {
    if (await hasPermission()) {
      const pushToken = await getPushToken()
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
