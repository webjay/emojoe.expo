import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { openSettings } from 'expo-linking';
import { useRouter } from 'expo-router';
import { Appbar, Switch, Text, Snackbar } from 'react-native-paper';
import Container from '@src/components/Container';
import { hasPermission, getPushToken } from '../lib/notifications';
import { profileUpdate } from '../lib/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segment: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    padding: 15,
  },
});

const snacktion = {
  label: 'Open Settings',
  onPress: openSettings,
};

function SettingsScreen() {
  const { push: navigate } = useRouter();
  const [notificationsValue, setNotificationsValue] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const onNotificationsValueChange = useCallback((value: boolean) => {
    setNotificationsValue(value);
    if (value) {
      getPushToken().then((pushToken) => {
        if (pushToken === false) {
          setSnackbarVisible(true);
          setNotificationsValue(false);
          profileUpdate({ pushToken: null });
        } else {
          profileUpdate({ pushToken });
        }
      });
    } else {
      profileUpdate({ pushToken: null });
    }
  }, []);
  const onDismissSnackBar = useCallback(() => setSnackbarVisible(false), []);
  useEffect(() => {
    hasPermission().then(setNotificationsValue);
  }, []);
  return (
    <Container safeArea={false}>
      <Appbar.Header mode="small">
        <Appbar.Content title="Settings" />
        <Appbar.Action icon="logout" onPress={() => navigate('/logout')} />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={styles.segment}>
          <Switch
            value={notificationsValue}
            onValueChange={onNotificationsValueChange}
            disabled={Platform.OS === 'web'}
          />
          <Text variant="labelLarge">Notifications</Text>
        </View>
        <Snackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackBar}
          action={snacktion}
        >
          Please allow notifications in settings
        </Snackbar>
      </View>
    </Container>
  );
}

export default SettingsScreen;
