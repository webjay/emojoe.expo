import React, { useState, useMemo, useEffect } from 'react';
import { usePathname } from 'expo-router';
import { Snackbar } from 'react-native-paper';
import { storageGet, storageSet } from '@src/lib/storage';

const guides = [
  ['/activity/', 'Press the emoji you want to send as recognition.'],
  ['/', 'Swipe the emoji, when you have done an activity.'],
];

const duration = 30 * 1000;
const trueStr = 'true';

function onPress(storageKey: string) {
  storageSet(storageKey, trueStr);
}

function Howto() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const guide = useMemo(
    () =>
      guides.find(([path]) => path === pathname || pathname.startsWith(path)),
    [pathname],
  );
  const guidePath = useMemo(() => (guide ? guide[0] : null), [guide]);
  const guideText = useMemo(() => (guide ? guide[1] : null), [guide]);
  const storageKey = useMemo(() => `howto-${guidePath}`, [guidePath]);
  const action = useMemo(
    () => ({
      label: 'OK',
      onPress: () => onPress(storageKey),
    }),
    [storageKey],
  );
  useEffect(() => {
    storageGet(storageKey).then((seen) => {
      if (seen === trueStr) return;
      setVisible(true);
    });
  }, [storageKey]);
  if (!guideText) return null;
  return (
    <Snackbar
      visible={visible}
      onDismiss={() => setVisible(false)}
      action={action}
      duration={duration}
    >
      {guideText}
    </Snackbar>
  );
}

export default Howto;
