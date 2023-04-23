import { useEffect } from 'react';
import getCognitoUserSub from '@src/lib/cognito';
import Sentry from '@src/lib/sentry';

export default function useSentry() {
  useEffect(() => {
    getCognitoUserSub().then((sub) => {
      Sentry.setUser({ id: sub });
    });
  }, []);
}
