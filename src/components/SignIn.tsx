import React, { useCallback } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useTheme, Text, Button } from 'react-native-paper';
// import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import AppleSigninIcon from './Icons/AppleSignin';
// import GoogleSigninIcon from './Icons/GoogleSignin';

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
  // const signInWithApple = useCallback(() => {
  //   Auth.federatedSignIn({
  //     provider: CognitoHostedUIIdentityProvider.Apple,
  //   });
  // }, []);
  // const signInWithGoogle = useCallback(() => {
  //   Auth.federatedSignIn({
  //     provider: CognitoHostedUIIdentityProvider.Google,
  //   });
  // }, []);
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
          {/* <Pressable onPress={signInWithApple}>
            <MaterialCommunityIcons name="apple" size={48} color={color} />
          </Pressable>
          <Pressable onPress={signInWithGoogle}>
            <MaterialCommunityIcons name="google" size={48} color={color} />
          </Pressable> */}
        </View>
      </View>
    </View>
  );
}
