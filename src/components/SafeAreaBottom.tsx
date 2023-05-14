import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  view: {
    height: 10,
  },
});

export default function SafeAreaBottom() {
  const style = Platform.OS === 'android' ? styles.view : {};
  return <SafeAreaView edges={['bottom']} style={style} />;
}
