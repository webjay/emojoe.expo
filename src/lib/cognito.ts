import { Auth } from '@aws-amplify/auth';

export default async function getCognitoUserSub() {
  const { attributes: { sub } } = await Auth.currentUserInfo();
  return sub;
}
