import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import type { SectionListRenderItem, StyleProp, ViewStyle } from 'react-native';
import type { ActivityItem } from '../types/common';
import { dayProgress } from '../lib/date';
import Emoji from './Emoji';

type Props = {
  activity: ActivityItem
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

function SectionActivityItem({ activity: { createdAt, emoji } }: Props) {
  const styleView = useMemo<StyleProp<ViewStyle>>(() => ({
    paddingLeft: `${dayProgress(createdAt)}%`,
  }), [createdAt]);
  return (
    <View style={[styles.container, styleView]}>
      <Emoji emoji={emoji} />
    </View>
  );
}

// eslint-disable-next-line import/prefer-default-export
export const renderItem: SectionListRenderItem<ActivityItem> = ({ item }) => (
  <SectionActivityItem activity={item} />
);
