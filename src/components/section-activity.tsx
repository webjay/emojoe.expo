import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import type { SectionListRenderItem, StyleProp, ViewStyle } from 'react-native';
import type { Activity } from '../types/api';
import { dayProgress } from '../lib/date';
import Emoji from './Emoji';

type Props = {
  activity: Activity
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

function SectionActivity({ activity: { createdAt, emoji } }: Props) {
  const styleView = useMemo<StyleProp<ViewStyle>>(() => ({
    paddingLeft: `${dayProgress(createdAt)}%`,
  }), [createdAt]);
  return (
    <View style={[styles.container, styleView]}>
      <Emoji emoji={emoji} />
    </View>
  );
}

const renderItem: SectionListRenderItem<Activity> = ({ item }) => (
  <SectionActivity activity={item} />
);

export default renderItem;
