import { useState, useCallback, useEffect } from 'react';
import { Auth } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import type { HubCallback } from '@aws-amplify/core';
import { maybeCompleteAuthSession } from 'expo-web-browser';
import Sentry from '@src/lib/sentry';

export default function useAuth() {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
  const check = useCallback(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setIsSignedIn(true);
      })
      .catch((error) => {
        setIsSignedIn(false);
        if (error !== 'The user is not authenticated') {
          Sentry.captureException(error);
        }
      })
      .finally(() => {
        maybeCompleteAuthSession();
      });
  }, []);
  const handleSignIn = useCallback(() => {
    setIsSignedIn(false);
    Auth.federatedSignIn();
  }, []);
  useEffect(check, [check]);
  useEffect(() => {
    const hubCallback: HubCallback = ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
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
    };
    return Hub.listen('auth', hubCallback);
  }, [check]);
  return {
    isSignedIn,
    handleSignIn,
  };
}
