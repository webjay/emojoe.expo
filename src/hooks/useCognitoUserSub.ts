import { useState, useEffect } from 'react';
import { Auth } from '@aws-amplify/auth';

function useCognitoUserSub() {
  const [subId, setSubId] = useState<string>(null);
  useEffect(() => {
    async function getUser() {
      const { attributes: { sub } } = await Auth.currentUserInfo();
      setSubId(sub);
    }
    getUser();
  }, []);
  return subId;
}

export default useCognitoUserSub;
