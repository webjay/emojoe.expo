import React from 'react';
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
    marginHorizontal: 15,
    marginTop: 20,
  },
  emoji: {
    transform: [{ rotateY: '180deg' }],
  },
});

export default function GroupCard({ group: { groupId, emoji, group: { name } } }: Props) {
  const { navigate } = useNavigation();
  return (
    <Card style={styles.card}>
      <Card.Title
        title={<Text onPress={() => navigate('GroupEdit', { groupId })}>{name}</Text>}
        // eslint-disable-next-line react/no-unstable-nested-components
        left={({ size }) => (
          <TouchableOpacity onPress={() => navigate('GroupEmoji', { groupId })}>
            <Avatar.Text size={size} label={emoji || '🃟'} labelStyle={styles.emoji} />
          </TouchableOpacity>
        )}
      />
      <Card.Actions>
        <Button
          mode="contained-tonal"
          onPress={() => navigate('GroupLeave', { groupId })}
        >
          Leave
        </Button>
        <Button
          mode="contained-tonal"
          onPress={() => navigate('GroupInvite', { groupId })}
        >
          Invite
        </Button>
      </Card.Actions>
    </Card>
  );
}
