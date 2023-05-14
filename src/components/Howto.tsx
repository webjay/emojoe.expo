import React, { useState, useEffect } from 'react';
import { Snackbar } from 'react-native-paper';
import { storageGet, storageSet } from '@src/lib/storage';

const duration = 30 * 1000;
const storageKey = 'HowtoSwipe';
const trueStr = 'true';

function onPress() {
  storageSet(storageKey, trueStr);
}

const action = {
  label: 'OK',
  onPress,
};

function Howto() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    storageGet(storageKey).then((seen) => {
      if (seen === trueStr) return;
      setVisible(true);
    });
  }, []);
  return (
    <Snackbar
      visible={visible}
      onDismiss={() => setVisible(false)}
      action={action}
      duration={duration}
    >
      Swipe the emoji, when you have done an activity.
    </Snackbar>
  );
}

export default Howto;
