import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://7dc6ac81d3574ba88c10141830bd4307@o373802.ingest.sentry.io/4504628449116160',
  // enableInExpoDevelopment: true,
  // debug: true,
});

export default Sentry.Native;
