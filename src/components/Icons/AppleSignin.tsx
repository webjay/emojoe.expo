import React from 'react';
import { Image } from 'react-native';

export default function AppleSignin() {
  return (
    <Image
      // eslint-disable-next-line global-require
      source={require('../../../assets/apple/apple-id-sign-in-with.png')}
    />
  );
}
