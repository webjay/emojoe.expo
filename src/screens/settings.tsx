import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { openSettings } from 'expo-linking';
import { Switch, Text, Snackbar } from 'react-native-paper';
import { hasPermission, getPushToken } from '../lib/notifications';
import { profileUpdate } from '../lib/api';
// import type { ScreenPropsDrawer } from '../types/navigation';

// type Props = ScreenPropsDrawer<'Settings'>;

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
    <SafeAreaView style={styles.container}>
      <View style={styles.segment}>
        <Switch
          value={notificationsValue}
          onValueChange={onNotificationsValueChange}
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
    </SafeAreaView>
  );
}

export default SettingsScreen;
