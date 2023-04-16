import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text, Badge } from 'react-native-paper';
import type { ActivitySection } from '../types/common';

type Props = {
  section: ActivitySection;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function SectionActivityHeader({
  section: { title, data },
}: Props) {
  const {
    colors: { secondaryContainer: backgroundColor },
  } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text>{title}</Text>
      <Badge>{data.length}</Badge>
    </View>
  );
}
