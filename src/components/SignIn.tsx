import React from 'react';
import { View, Button } from 'react-native';
// import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';

export default function Signin() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
      }}
    >
      <Button title="Login" onPress={() => Auth.federatedSignIn()} />
    </View>
  );
}
