import { Amplify } from '@aws-amplify/core';
import { createURL } from 'expo-linking';
import awsConfig from '../aws-exports';
import urlOpener from './urlOpener';

const redirectUrl = createURL('/');

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
