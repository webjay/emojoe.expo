import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Card, ProgressBar, Text, Chip } from 'react-native-paper';
import type { GroupMembership } from '@src/types/api';
import useGroupStats from '@src/hooks/useGroupStats';
import EmojiButton from '@src/components/EmojiButton';
import GroupMenu from '@src/components/GroupMenu';

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
    gap: 10,
  },
  progressView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  progress: {
    borderRadius: 10,
  },
});

export default function GroupCard({
  group: {
    id,
    groupId,
    emoji,
    group: { name },
  },
}: Props) {
  const { push: navigate } = useRouter();
  const { streak, streakProgress, streakIcon } = useGroupStats(id);
  const onPressTitle = useCallback(
    () => navigate(`/group/${groupId}/edit`),
    [groupId, navigate],
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
            {name}
          </Text>
        }
        left={cardLeft}
        right={cardRight}
        rightStyle={styles.rightStyle}
      />
      <Card.Content>
        <View style={styles.content}>
          <View style={styles.progressView}>
            <ProgressBar
              animatedValue={streakProgress}
              style={styles.progress}
            />
          </View>
          <View>
            <Chip icon={streakIcon}>{streak}</Chip>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}
