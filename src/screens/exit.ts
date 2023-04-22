import { useEffect } from 'react';
import { Auth } from '@aws-amplify/auth';
import { useRouter } from 'expo-router';

export default function ExitScreen() {
  const { replace } = useRouter();
  useEffect(() => {
    Auth.signOut().then(() => {
      replace('/');
    })
  }, [replace]);
  return null;
}
