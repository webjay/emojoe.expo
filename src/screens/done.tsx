import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useRouter, useSearchParams } from 'expo-router';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { activityCreate } from '../lib/api';

type SearchParams = {
  groupId: string;
  emoji: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default function DoneScreen() {
  const { push: navigate } = useRouter();
  const { groupId, emoji } = useSearchParams<SearchParams>();
  const [loading, setLoading] = useState(true);
  useFocusEffect(
    useCallback(() => {
      async function handleActivityDone() {
        if (!groupId || !emoji) return;
        setLoading(true);
        await activityCreate(groupId, emoji);
        setLoading(false);
      }
      handleActivityDone();
    }, [emoji, groupId]),
  );
  const handlePress = useCallback(
    () => navigate(`/group/${groupId}/activities`),
    [groupId, navigate],
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
