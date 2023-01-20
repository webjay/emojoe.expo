import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import type { ActivityItem } from '../types/common';
import { dayProgress } from '../lib/date';
import Emoji from './Emoji';

type Props = {
  item: ActivityItem
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default function SectionActivityItem({ item: { createdAt, emoji } }: Props) {
  const styleView = useMemo<StyleProp<ViewStyle>>(() => ({
    paddingLeft: `${dayProgress(createdAt)}%`,
  }), [createdAt]);
  return (
    <View style={[styles.container, styleView]}>
      <Emoji emoji={emoji} />
    </View>
  );
}
