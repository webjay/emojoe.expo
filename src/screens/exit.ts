import { useEffect } from 'react';
import { Auth } from '@aws-amplify/auth';

async function signOut() {
  await Auth.signOut();
}

export default function ExitScreen() {
  useEffect(() => {
    signOut();
  }, []);
  return null;
}
