import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import type { ActivityItem } from '../types/common';
import { dayProgressFlex } from '../lib/date';
import NameChip from './NameChip';
import Emoji from './Emoji';

type Props = {
  item: ActivityItem
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipView: {
    flexBasis: '30%',
    flexDirection: 'row',
  },
  chipSpace: {
    flexGrow: 1,
  },
});

export default function SectionActivityItem({ item: { createdAt, emoji, profileId } }: Props) {
  const progressSpaceStyle = useMemo<StyleProp<ViewStyle>>(() => ({
    flex: dayProgressFlex(createdAt),
  }), [createdAt]);
  return (
    <View style={styles.container}>
      <View style={styles.chipView}>
        <NameChip profileId={profileId} />
        <View style={styles.chipSpace} />
      </View>
      <View style={progressSpaceStyle} />
      <Emoji emoji={emoji} />
    </View>
  );
}
