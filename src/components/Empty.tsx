import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default function Empty() {
  return (
    <View style={styles.container}>
      <Text>🤷</Text>
    </View>
  );
}
