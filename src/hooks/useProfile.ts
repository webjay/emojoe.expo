import { useEffect, useCallback } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Profile } from '../models';
import useCognitoUserSub from './useCognitoUserSub';

function merge<PT extends {}, T>(draft: T, update: PT) {
  Object.keys(update).forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    draft[key as keyof T] = update[key as keyof PT] as unknown as T[keyof T];
  });
}

export default function useProfile() {
  const { getCognitoUserSub } = useCognitoUserSub();
  const profileGet = useCallback(async () => {
    const subId = await getCognitoUserSub();
    const [result] = await DataStore.query(Profile, (c) => c.subId.eq(subId));
    return result;
  }, [getCognitoUserSub]);
  const profileSave = useCallback(async (update: Partial<Profile>) => {
    const profile = await profileGet();
    await DataStore.save(Profile.copyOf(profile, (draft) => merge(draft, update)));
    profileGet();
  }, [profileGet]);
  useEffect(() => {
    async function profileCreate() {
      const subId = await getCognitoUserSub();
      await DataStore.save(new Profile({ subId }));
      profileGet();
    }
    async function init() {
      const profile = await profileGet();
      if (profile === undefined) {
        profileCreate();
      }
    }
    init();
  }, [getCognitoUserSub, profileGet]);
  return { profileGet, profileSave };
}
