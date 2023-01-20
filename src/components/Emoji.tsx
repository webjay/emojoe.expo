import React from 'react';
import { StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { Avatar } from 'react-native-paper';

type Props = {
  emoji?: string | null;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  emoji: {
    transform: [{ rotateY: '180deg' }],
  },
});

export default function Emoji({ emoji, style }: Props) {
  return <Avatar.Text size={40} label={emoji || '🃟'} style={[styles.emoji, style]} />;
}

Emoji.defaultProps = {
  emoji: '🃟',
  style: undefined,
};
