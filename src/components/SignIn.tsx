import React, { useCallback } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useTheme, Text, Button } from 'react-native-paper';
import { Auth } from 'aws-amplify';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 40,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default function Signin() {
  const {
    colors: { background: backgroundColor },
  } = useTheme();
  const signIn = useCallback(() => {
    Auth.federatedSignIn();
  }, []);
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Text variant="headlineMedium" numberOfLines={1} adjustsFontSizeToFit>
          You&apos;re here to build a habit?
        </Text>
        <View style={styles.buttons}>
          <Pressable onPress={signIn}>
            <Button mode="contained">Sign in</Button>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
