import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import type { ActivitySection } from '../types/common';

type Props = {
  section: ActivitySection
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default function SectionActivityHeader({ section: { title } }: Props) {
  const { colors: { secondaryContainer: backgroundColor } } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text>{title}</Text>
    </View>
  );
}
