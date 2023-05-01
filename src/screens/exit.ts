import { useEffect } from 'react';
import { Auth } from '@aws-amplify/auth';

export default function ExitScreen() {
  useEffect(() => {
    Auth.signOut().finally(() => {
      window.location.replace('/');
    });
  }, []);
  return null;
}
