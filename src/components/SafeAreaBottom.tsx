import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

export default function SafeAreaBottom() {
  const { bottom: height } = useSafeAreaInsets();
  return <View style={{ height }} />;
}
