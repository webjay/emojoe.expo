import { useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Auth } from '@aws-amplify/auth';

async function signOut() {
  await DataStore.clear();
  Auth.signOut();
}

export default function ExitScreen() {
  useEffect(() => {
    signOut();
  }, []);
  return null;
}
