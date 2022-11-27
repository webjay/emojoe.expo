import React, { useCallback } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Activity } from '../models';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

async function createActivity() {
  const activity = new Activity({
    activityGroupId: '8a9097cc-6567-4871-8efb-389958d3b6cf',
  });
  DataStore.save(activity);
}

function Do() {
  const onPress = useCallback(() => {
    createActivity();
  }, []);
  return (
    <View style={styles.container}>
      <Button title="Do" onPress={onPress} />
    </View>
  );
}

export default Do;
