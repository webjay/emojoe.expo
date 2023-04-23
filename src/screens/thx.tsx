import React, { useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Container from '@src/components/Container';
import { recognitionCreate } from '../lib/api';

type SearchParams = {
  activityId: string;
  emoji: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});

export default function ThxScreen() {
  const { replace: redirect } = useRouter();
  const { activityId, emoji } = useSearchParams<SearchParams>();
  const [loading, setLoading] = useState<boolean>();
  const onPress = useCallback(() => {
    redirect('/');
  }, [redirect]);
  useEffect(() => {
    if (!activityId || !emoji) return;
    setLoading(true);
    recognitionCreate(activityId, emoji).then(() => setLoading(false));
  }, [activityId, emoji]);
  return (
    <Container>
      <View style={styles.container}>
        <Text variant="displayLarge">Thank you</Text>
        <Button
          mode="outlined"
          onPress={onPress}
          loading={loading}
          disabled={loading}
        >
          Anytime
        </Button>
      </View>
    </Container>
  );
}
