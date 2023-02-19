import { Platform } from 'react-native';
import type { WebBrowserRedirectResult } from 'expo-web-browser';
import { openAuthSessionAsync, dismissBrowser } from 'expo-web-browser';
import { openURL } from 'expo-linking';

export default async function urlOpener(url: string, redirectUrl: string) {
  const { type, url: newUrl } = await openAuthSessionAsync(url, redirectUrl) as WebBrowserRedirectResult;
  if (Platform.OS === 'ios' && type === 'success') {
    dismissBrowser();
    openURL(newUrl);
  }
}
