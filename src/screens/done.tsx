import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import type { ScreenPropsStack } from '../types/navigation';
import { activityCreate } from '../lib/api';

type Props = ScreenPropsStack<'Done'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default function DoneScreen({
  navigation: { replace },
  route: {
    params: { groupId, emoji },
  },
}: Props) {
  const [loading, setLoading] = useState(true);
  useFocusEffect(
    useCallback(() => {
      async function handleActivityDone() {
        setLoading(true);
        await activityCreate(groupId, emoji);
        setLoading(false);
      }
      handleActivityDone();
    }, [emoji, groupId]),
  );
  const handlePress = useCallback(
    () => replace('GroupActivities', { groupId }),
    [groupId, replace],
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">Bravo</Text>
      <Button
        icon="rocket"
        mode="contained"
        loading={loading}
        disabled={loading}
        onPress={handlePress}
      >
        Press me
      </Button>
    </SafeAreaView>
  );
}
