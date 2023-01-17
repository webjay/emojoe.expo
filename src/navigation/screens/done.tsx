import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import type { ScreenPropsStack } from '../types';
import useActivity from '../../hooks/useActivity';

type Props = ScreenPropsStack<'Done'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default function DoneScreen({ navigation: { navigate }, route: { params: { groupId } } }: Props) {
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const { createActivity } = useActivity();
  useEffect(() => {
    async function handleActivityDone() {
      // setLoading(true);
      await createActivity(groupId);
      setLoading(false);
    }
    if (isFocused) handleActivityDone();
  }, [groupId, createActivity, isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">Bravo</Text>
      <Button icon="rocket" mode="contained" loading={loading} disabled={loading} onPress={() => navigate('Home')}>
        Press me
      </Button>
    </SafeAreaView>
  );
}
