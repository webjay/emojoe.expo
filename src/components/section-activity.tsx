import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import type { SectionListRenderItem, StyleProp, ViewStyle } from 'react-native';
import type { Activity } from '../types/api';
import Emoji from './Emoji';

type Props = {
  activity: Activity
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

function SectionActivity({ activity: { createdAt, groupMembership: { emoji } } }: Props) {
  const styleView = useMemo<StyleProp<ViewStyle>>(() => {
    const date = new Date(createdAt);
    const dayProgressPercent = Math.round((date.getHours() / 24) * 100);
    return {
      paddingLeft: `${dayProgressPercent}%`,
    };
  }, [createdAt]);
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
