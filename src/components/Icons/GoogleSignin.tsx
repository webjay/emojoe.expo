import React from 'react';
import { Image } from 'react-native';

export default function GoogleSignin() {
  return (
    <Image
      // eslint-disable-next-line global-require
      source={require('../../../assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png')}
    />
  );
}
