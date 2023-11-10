import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Platform, Alert } from 'react-native';
import { openSettings, openURL } from 'expo-linking';
import { useRouter } from 'expo-router';
import {
  Appbar,
  Switch,
  Text,
  Snackbar,
  Divider,
  Button,
} from 'react-native-paper';
import Container from '@src/components/Container';
import { hasPermission, getPushToken } from '@src/lib/notifications';
import { profileUpdate } from '@src/lib/api';
import { userDelete } from '@src/lib/cognito';

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
  buttons: {
    padding: 30,
    gap: 30,
    alignItems: 'center',
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
  const handleSupportClick = useCallback(
    () => openURL('mailto:support@webcom.dk'),
    [],
  );
  const handleSignOut = useCallback(() => navigate('/logout'), [navigate]);
  const handleAccountDelete = useCallback(() => userDelete(), []);
  const onPressDelete = useCallback(() => {
    if (Platform.OS === 'web') {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        handleAccountDelete();
      }
      return;
    }
    Alert.alert(
      'Delete account',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete my account',
          style: 'destructive',
          onPress: handleAccountDelete,
        },
      ],
      {
        cancelable: true,
      },
    );
  }, [handleAccountDelete]);
  useEffect(() => {
    hasPermission().then(setNotificationsValue);
  }, []);
  return (
    <Container safeArea={false}>
      <Appbar.Header mode="small">
        <Appbar.Content title="Settings" />
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
        <Divider />
        <View style={styles.buttons}>
          <Button mode="outlined" onPress={handleSignOut}>
            Sign out
          </Button>
          <Button mode="outlined" onPress={handleSupportClick}>
            Support
          </Button>
          <Button
            mode="outlined"
            onPress={onPressDelete}
            theme={{ colors: { primary: 'red' } }}
          >
            Delete account
          </Button>
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
