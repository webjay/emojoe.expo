import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Card, Avatar, Button, Text,
} from 'react-native-paper';
import type { Group } from '../models';
import useEmoji from '../hooks/useEmoji';

type Props = {
  group: Group
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

export default function GroupCard({ group }: Props) {
  const { navigate } = useNavigation();
  const { getEmoji } = useEmoji();
  const [emoji, setEmoji] = useState<string>();
  useEffect(() => {
    getEmoji(group.id).then((result) => {
      if (!result) return;
      setEmoji(result.emoji.emoji);
    });
  });
  return (
    <Card style={styles.card}>
      <Card.Title
        title={<Text onPress={() => navigate('GroupEdit', { groupId: group.id })}>{group.name}</Text>}
        // eslint-disable-next-line react/no-unstable-nested-components
        left={({ size }) => (
          <TouchableOpacity onPress={() => navigate('GroupEmoji', { groupId: group.id })}>
            <Avatar.Text size={size} label={emoji || '🃏'} labelStyle={styles.emoji} />
          </TouchableOpacity>
        )}
      />
      <Card.Actions>
        <Button
          mode="contained-tonal"
          onPress={() => navigate('GroupLeave', { groupId: group.id })}
        >
          Leave
        </Button>
        <Button
          mode="contained-tonal"
          onPress={() => navigate('GroupInvite', { groupId: group.id })}
        >
          Invite
        </Button>
      </Card.Actions>
    </Card>
  );
}
