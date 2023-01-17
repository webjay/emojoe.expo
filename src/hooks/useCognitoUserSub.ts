import { useState, useEffect } from 'react';
import { Auth } from '@aws-amplify/auth';

async function getCognitoUserSub() {
  const { attributes: { sub } } = await Auth.currentUserInfo();
  return sub;
}

export default function useCognitoUserSub() {
  const [subId, setSubId] = useState<string | null>(null);
  useEffect(() => {
    getCognitoUserSub().then(setSubId);
  }, []);
  return { subId, getCognitoUserSub };
}
