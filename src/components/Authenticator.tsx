import '../lib/amplify';
import React, { useState, useCallback, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
import SignIn from './SignIn';
import Sentry from '../lib/sentry';

type Props = {
  children: JSX.Element;
};

function Authenticator({ children }: Props) {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
  const check = useCallback(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setIsSignedIn(true))
      .catch((error) => {
        if (error.message !== 'The user is not authenticated') {
          Sentry.captureException(error);
        }
      });
  }, []);
  useEffect(check, [check]);
  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setIsSignedIn(true);
          break;
        case 'cognitoHostedUI':
          check();
          break;
        case 'signOut':
          setIsSignedIn(false);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          Sentry.captureMessage(event, {
            extra: { data: JSON.stringify(data) },
          });
          break;
        default:
          break;
      }
    });
    return unsubscribe;
  }, [check]);
  if (isSignedIn === true) return children;
  return <SignIn />;
}

export default Authenticator;
