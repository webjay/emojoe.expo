import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import type { ActivityItem } from '../types/common';
import { dayProgressFlex } from '../lib/date';
import NameChip from './NameChip';
import Emoji from './Emoji';

type Props = {
  item: ActivityItem[]
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
  emojiView: {
    position: 'absolute',
    left: '30%',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    borderWidth: StyleSheet.hairlineWidth,
  },
});

function progressSpaceStyle(createdAt: ActivityItem['createdAt']): StyleProp<ViewStyle> {
  return {
    flex: dayProgressFlex(createdAt),
  };
}

export default function SectionActivityItem({ item }: Props) {
  const {
    colors: {
      secondaryContainer: borderColor,
    },
  } = useTheme();
  if (item.length === 0) return null;
  const [{ profileId }] = item;
  return (
    <View style={styles.container}>
      <View style={styles.chipView}>
        <NameChip profileId={profileId} />
        <View style={styles.chipSpace} />
      </View>
      {item.sort(({ createdAt: a }, { createdAt: b }) => a.localeCompare(b)).map(({ createdAt, emoji }) => (
        <View key={createdAt} style={styles.emojiView}>
          <View style={progressSpaceStyle(createdAt)} />
          <Emoji emoji={emoji} style={[styles.emoji, { borderColor }]} />
        </View>
      ))}
    </View>
  );
}
