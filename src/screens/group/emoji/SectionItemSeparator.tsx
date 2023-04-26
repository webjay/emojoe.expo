import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  view: {
    height: 5,
  },
});

function SectionItemSeparator() {
  return <View style={styles.view} />;
}

export default memo(SectionItemSeparator);
