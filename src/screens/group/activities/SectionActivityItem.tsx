import React, { useMemo, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import type { ActivityItem } from '@src/types/common';
import { dayProgressFlex } from '@src/lib/date';
import NameChip from '@src/components/NameChip';
import AnimatedFlexView from '@src/components/AnimatedFlexView';
import Recognition from '@src/components/Recognition';
import Emoji from '@src/components/Emoji';

type Props = {
  item: ActivityItem[];
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
  emojiAnimatedView: {
    position: 'absolute',
    left: '30%',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiView: {
    justifyContent: 'center',
  },
  emoji: {
    borderWidth: StyleSheet.hairlineWidth,
  },
});

function SectionActivityItem({ item }: Props) {
  const {
    colors: { secondaryContainer: borderColor },
  } = useTheme();
  const actions = useMemo(
    () => item.sort(({ createdAt: a }, { createdAt: b }) => a.localeCompare(b)),
    [item],
  );
  if (item.length === 0) return null;
  const [{ profileId }] = item;
  return (
    <View style={styles.container}>
      <View style={styles.chipView}>
        <NameChip profileId={profileId} />
        <View style={styles.chipSpace} />
      </View>
      {actions.map(({ id, createdAt, emoji }) => (
        <View key={createdAt} style={styles.emojiAnimatedView}>
          <AnimatedFlexView flex={dayProgressFlex(createdAt)} />
          <View style={styles.emojiView}>
            <Emoji emoji={emoji} style={[styles.emoji, { borderColor }]} />
            <Recognition activityId={id} />
          </View>
        </View>
      ))}
    </View>
  );
}

export default memo(SectionActivityItem);
