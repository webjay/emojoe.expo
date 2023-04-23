import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';

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
  const { replace: redirect } = useRouter();
  const { groupId } = useSearchParams<SearchParams>();
  const handlePress = useCallback(
    () => redirect(`/group/${groupId}/activities`),
    [groupId, redirect],
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">Bravo</Text>
      <Button icon="rocket" mode="contained" onPress={handlePress}>
        Press me
      </Button>
    </SafeAreaView>
  );
}
