import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { Avatar } from 'react-native-paper';

type Props = {
  emoji?: string | null;
  style?: StyleProp<ViewStyle>;
  size?: number;
};

const styles = StyleSheet.create({
  viewStyle: {
    transform: [{ rotateY: '180deg' }],
  },
});

function Emoji({ emoji, style, size = 40 }: Props) {
  return (
    <Avatar.Text
      size={size}
      label={emoji || '🃟'}
      style={[styles.viewStyle, style]}
    />
  );
}

Emoji.defaultProps = {
  emoji: '🃟',
  style: undefined,
  size: undefined,
};

export default memo(Emoji);
