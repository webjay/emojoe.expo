import { Auth } from '@aws-amplify/auth';
import Sentry from './sentry';

export function userDelete() {
  return Auth.deleteUser();
}

export async function getCognitoUsername() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    if (!user) return null;
    return user.username;
  } catch (error) {
    if (error !== 'The user is not authenticated') {
      Sentry.captureException(error);
    }
    return null;
  }
}

export default async function getCognitoUserSub() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    if (!user) return null;
    return user.attributes.sub;
  } catch (error) {
    if (error !== 'The user is not authenticated') {
      Sentry.captureException(error);
    }
    return null;
  }
}
