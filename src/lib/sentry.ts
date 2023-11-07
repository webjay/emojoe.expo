import { Platform } from 'react-native';
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://7dc6ac81d3574ba88c10141830bd4307@o373802.ingest.sentry.io/4504628449116160',
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
