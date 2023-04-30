import { useEffect } from 'react';
import { maybeCompleteAuthSession } from 'expo-web-browser';

export default function useCompleteAuthSession() {
  useEffect(() => {
    maybeCompleteAuthSession();
  }, []);
}
