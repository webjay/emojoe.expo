import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Profile, Activity } from '../models';
import useCognitoUserSub from '../hooks/useCognitoUserSub';

async function createActivity(subId: string) {
  const [profile] = await DataStore.query(Profile, (c) => c.subId.eq(subId), { limit: 1 });
  const activity = new Activity({
    activityProfileId: profile.id,
    activityGroupId: '8a9097cc-6567-4871-8efb-389958d3b6cf',
  });
  return DataStore.save(activity);
}

function Do() {
  const subId = useCognitoUserSub();
  const onPress = useCallback(() => {
    createActivity(subId);
  }, [subId]);
  return (
    <View>
      <Button title="Do" onPress={onPress} />
    </View>
  );
}

export default Do;
