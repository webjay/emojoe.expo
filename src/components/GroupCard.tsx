import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Card, Button, Text } from 'react-native-paper';
import type { GroupMembership } from '@src/types/api';
import EmojiButton from '@src/components/EmojiButton';

type Props = {
  group: GroupMembership;
};

const styles = StyleSheet.create({
  card: {
    margin: 15,
    marginBottom: 0,
  },
  emoji: {
    transform: [{ rotateY: '180deg' }],
  },
});

export default function GroupCard({
  group: {
    groupId,
    emoji,
    group: { name },
  },
}: Props) {
  const { push: navigate } = useRouter();
  const cardTitleLeft = useCallback<
    ({ size }: { size: number }) => JSX.Element
  >(
    ({ size }) => (
      <EmojiButton
        href={`/group/${groupId}/emoji`}
        emoji={emoji || '🃟'}
        size={size}
      />
    ),
    [emoji, groupId],
  );
  return (
    <Card style={styles.card}>
      <Card.Title
        title={
          <Text
            variant="headlineSmall"
            onPress={() => navigate(`/group/${groupId}/edit`)}
          >
            {name}
          </Text>
        }
        left={cardTitleLeft}
      />
      <Card.Actions>
        <Link href={`/group/${groupId}`} asChild>
          <Button mode="outlined">Activity</Button>
        </Link>
        <Link href={`/group/${groupId}/invite`} asChild>
          <Button mode="outlined">Invite</Button>
        </Link>
        <Link href={`/group/${groupId}/leave`} asChild>
          <Button mode="outlined">Leave</Button>
        </Link>
      </Card.Actions>
    </Card>
  );
}
