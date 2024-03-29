import { useEffect } from 'react';
import getCognitoUserSub from '@src/lib/cognito';
import Sentry from '@src/lib/sentry';

export default function useSentry() {
  useEffect(() => {
    getCognitoUserSub().then((id) => {
      if (!id) return;
      Sentry.setUser({ id });
    });
  }, []);
}
