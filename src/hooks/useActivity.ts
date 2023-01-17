import { useCallback } from 'react';
import { DataStore, ModelInit } from '@aws-amplify/datastore';
import { Activity, Profile, Group } from '../models';
import useProfile from './useProfile';

async function activityCreate(activityProfileId: Profile['id'], activityGroupId: Group['id']) {
  const activity = new Activity({
    activityProfileId,
    activityGroupId,
  } as ModelInit<Activity>);
  return DataStore.save(activity);
}

export default function useActivity() {
  const { profileGet } = useProfile();
  const createActivity = useCallback(async (groupId: Group['id']) => {
    const profile = await profileGet();
    await activityCreate(profile.id, groupId);
  }, [profileGet]);
  return { createActivity };
}
