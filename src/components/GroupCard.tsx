import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Card, ProgressBar, Text, Chip, Tooltip } from 'react-native-paper';
import type { GroupMembership } from '@src/types/api';
import useGroupStats from '@src/hooks/useGroupStats';
import EmojiButton from '@src/components/EmojiButton';
import GroupMenu from '@src/components/GroupMenu';
import Dot from '@src/components/Dot';

type Props = {
  group: GroupMembership;
};

const styles = StyleSheet.create({
  card: {
    margin: 15,
    marginBottom: 0,
  },
  rightStyle: {
    margin: 15,
    flexDirection: 'row',
  },
  emoji: {
    transform: [{ rotateY: '180deg' }],
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressView: {
    width: 100,
    gap: 5,
    justifyContent: 'flex-end',
  },
  progressDay: {
    flexDirection: 'row',
    gap: 5,
  },
  progress: {
    borderRadius: 10,
  },
  chips: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default function GroupCard({
  group: { id, groupId, emoji, group },
}: Props) {
  const router = useRouter();
  const {
    streak,
    streakProgressWeek,
    streakProgressMonth,
    streakIcon,
    doneToday,
  } = useGroupStats(id);
  const onPressTitle = useCallback(
    () => router.push(`/group/${groupId}/edit`),
    [groupId, router],
  );
  const cardLeft = useCallback<({ size }: { size: number }) => JSX.Element>(
    ({ size }) => (
      <EmojiButton
        href={`/group/${groupId}/emoji`}
        emoji={emoji || '🃟'}
        size={size}
      />
    ),
    [emoji, groupId],
  );
  const cardRight = useCallback<({ size }: { size: number }) => JSX.Element>(
    ({ size }) => <GroupMenu size={size} groupId={groupId} />,
    [groupId],
  );
  return (
    <Card style={styles.card}>
      <Card.Title
        title={
          <Text variant="titleLarge" onPress={onPressTitle}>
            {group?.name}
          </Text>
        }
        left={cardLeft}
        right={cardRight}
        rightStyle={styles.rightStyle}
      />
      <Card.Content>
        <View style={styles.content}>
          <View style={styles.progressView}>
            <Tooltip title="Day progress">
              <View style={styles.progressDay}>
                {doneToday.map(({ createdAt }) => (
                  <Dot key={createdAt} />
                ))}
              </View>
            </Tooltip>
            <Tooltip title="Week progress">
              <ProgressBar
                animatedValue={streakProgressWeek}
                style={styles.progress}
              />
            </Tooltip>
            <Tooltip title="Month progress">
              <ProgressBar
                animatedValue={streakProgressMonth}
                style={styles.progress}
              />
            </Tooltip>
          </View>
          <View style={styles.chips}>
            <Tooltip title="Streak length">
              <Chip
                mode={doneToday.length ? 'flat' : 'outlined'}
                icon={streakIcon}
              >
                {streak}
              </Chip>
            </Tooltip>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
