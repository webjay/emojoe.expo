import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
  title: string;
  emoji: string;
  name: string;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  emoji: {
    transform: [{ rotateY: '180deg' }],
  },
});

export default function EmojiTitle({ title, emoji, name }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">{title}</Text>
      <View style={styles.row}>
        <View style={styles.emoji}>
          <Text variant="headlineLarge">{emoji}</Text>
        </View>
        <Text variant="headlineLarge">{name}</Text>
      </View>
    </View>
  );
}
