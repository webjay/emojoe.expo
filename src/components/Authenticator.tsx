import React from 'react';
import { usePathname } from 'expo-router';
import useAuth from '@src/hooks/useAuth';
import SignIn from './SignIn';

type Props = {
  children: JSX.Element;
};

function pathPass(pathname: string) {
  return ['/join', '/logout'].some((pathEnd) => pathname.endsWith(pathEnd));
}

function Authenticator({ children }: Props) {
  const pathname = usePathname();
  const { isSignedIn, handleSignIn } = useAuth();
  if (isSignedIn === true) return children;
  if (pathPass(pathname)) return children;
  return <SignIn handleSignIn={handleSignIn} />;
}

export default Authenticator;
