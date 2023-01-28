import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Card, Avatar, Button, Text,
} from 'react-native-paper';
import type { GroupMembership } from '../types/api';

type Props = {
  group: GroupMembership
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

export default function GroupCard({ group: { groupId, emoji, group: { name } } }: Props) {
  const { navigate } = useNavigation();
  const cardTitleLeft = useCallback<({ size }: { size: number }) => JSX.Element>(({ size }) => (
    <TouchableOpacity onPress={() => navigate('GroupEmoji', { groupId })}>
      <Avatar.Text size={size} label={emoji || '🃟'} labelStyle={styles.emoji} />
    </TouchableOpacity>
  ), [emoji, groupId, navigate]);
  return (
    <Card style={styles.card}>
      <Card.Title
        title={<Text onPress={() => navigate('GroupEdit', { groupId })}>{name}</Text>}
        left={cardTitleLeft}
      />
      <Card.Actions>
        <Button
          mode="outlined"
          onPress={() => navigate('GroupActivity', { groupId })}
        >
          Activity
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigate('GroupInvite', { groupId })}
        >
          Invite
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigate('GroupLeave', { groupId })}
        >
          Leave
        </Button>
      </Card.Actions>
    </Card>
  );
}
