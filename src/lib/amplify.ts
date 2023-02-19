import { Amplify } from 'aws-amplify';
import { createURL } from 'expo-linking';
import awsConfig from '../aws-exports';
import urlOpener from './urlOpener';
// import Sentry from './sentry';

const redirectUrl = createURL('');

// console.log({ redirectUrl });
// Sentry.captureMessage('redirectUrl', { extra: { redirectUrl } });

const updatedAwsConfig = {
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    redirectSignIn: redirectUrl,
    redirectSignOut: redirectUrl,
    urlOpener,
  },
};

Amplify.configure(updatedAwsConfig);
