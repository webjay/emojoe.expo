import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { hasPermission, getPushToken } from '../../lib/notifications';
import { profileUpdate } from '../../lib/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  segment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
});

const navNext = '/';

export default function OnboardNotificationsScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handlePressSkip = useCallback(() => router.push(navNext), [router]);
  const handlePressYes = useCallback(async () => {
    const pushToken = await getPushToken();
    if (pushToken !== false) {
      setLoading(true);
      await profileUpdate({ pushToken });
      setLoading(false);
    }
    router.push(navNext);
  }, [router]);
  useEffect(() => {
    hasPermission().then((permission) => {
      if (permission) router.push(navNext);
    });
  }, [router]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.segment}>
        <Text variant="titleMedium">May we send you notifications?</Text>
        <Text variant="bodySmall">
          We do so when someone sends you recognition
        </Text>
      </View>
      <View style={styles.segment}>
        <View style={styles.buttons}>
          <Button mode="outlined" onPress={handlePressSkip}>
            Skip
          </Button>
          <Button mode="contained" onPress={handlePressYes} loading={loading}>
            Yes
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
