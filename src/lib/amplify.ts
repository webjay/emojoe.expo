import { isDevice } from 'expo-device';
import { Platform } from 'react-native';
import { createURL } from 'expo-linking';
import { Amplify } from '@aws-amplify/core';
import awsConfig from '../aws-exports';
import urlOpener from './urlOpener';

const redirectUrl =
  isDevice && Platform.OS !== 'web' ? createURL('') : createURL('/');

const updatedAwsConfig = {
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    domain: 'auth.emojoe.app',
    redirectSignIn: redirectUrl,
    redirectSignOut: redirectUrl,
    urlOpener,
  },
};

Amplify.configure(updatedAwsConfig);
