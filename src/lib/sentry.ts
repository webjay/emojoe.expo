import { Platform } from 'react-native';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  enableInExpoDevelopment: true,
});

export function wrap<P extends Record<string, any>>(
  children: React.ComponentType<P>,
) {
  if (Platform.OS === 'web') {
    return Sentry.Browser.withErrorBoundary(children, { fallback: undefined });
  }
  return Sentry.Native.wrap(children);
}

export default Platform.OS === 'web' ? Sentry.Browser : Sentry.Native;
