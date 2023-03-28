import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { recognitionCreate } from '../lib/api';
import type { ScreenPropsStack } from '../types/navigation';

type Props = ScreenPropsStack<'Thx'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});

export default function ThxScreen({
  navigation: { replace },
  route: {
    params: { activityId, actionIdentifier },
  },
}: Props) {
  const [loading, setLoading] = useState<boolean>();
  const onPress = useCallback(() => {
    replace('Drawer', { screen: 'Home' });
  }, [replace]);
  useEffect(() => {
    setLoading(true);
    recognitionCreate(activityId, actionIdentifier).then(() =>
      setLoading(false),
    );
  }, [activityId, actionIdentifier]);
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">Thank you</Text>
      <Button
        mode="outlined"
        onPress={onPress}
        loading={loading}
        disabled={loading}
      >
        Anytime
      </Button>
    </SafeAreaView>
  );
}
