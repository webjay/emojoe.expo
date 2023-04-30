import type { WebBrowserRedirectResult } from 'expo-web-browser';
import { openAuthSessionAsync, dismissBrowser } from 'expo-web-browser';
import { Platform } from 'react-native';
import { openURL } from 'expo-linking';

export default async function urlOpener(urlAuth: string, urlRedirect: string) {
  const { type, url } = (await openAuthSessionAsync(
    urlAuth,
    urlRedirect,
  )) as WebBrowserRedirectResult;
  if (type === 'success') {
    if (Platform.OS === 'web') {
      window.location.reload();
    }
    if (Platform.OS === 'ios') {
      dismissBrowser();
      openURL(url);
    }
  }
}
