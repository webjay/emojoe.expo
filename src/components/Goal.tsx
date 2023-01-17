import React from 'react';
import { LayoutChangeEvent, StyleSheet } from 'react-native';
import { useTheme, Avatar } from 'react-native-paper';

type Props = {
  onLayout: (event: LayoutChangeEvent) => void
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default function Goal({ onLayout }: Props) {
  const {
    colors: {
      surfaceVariant: backgroundColor,
    },
  } = useTheme();
  return (
    <Avatar.Text size={40} label="" style={[styles.container, { backgroundColor }]} onLayout={onLayout} />
  );
}
