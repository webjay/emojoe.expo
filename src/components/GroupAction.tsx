import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import type { GroupMembership } from '../types/api';
import Swipe from './Swipe';

type Props = {
  group: GroupMembership
  isSwiping: (swiping: boolean) => void
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 0,
  },
  content: {
    overflow: 'hidden',
  },
});

export default function GroupAction({ group: { groupId, emoji }, isSwiping }: Props) {
  const { navigate } = useNavigation();
  const handleDone = useCallback(() => {
    navigate('Done', {
      groupId,
      emoji: emoji ?? '🃟',
    });
  }, [groupId, emoji, navigate]);
  return (
    <Card style={styles.container}>
      <Card.Content style={styles.content}>
        <Swipe emoji={emoji || '🃟'} isSwiping={isSwiping} handleDone={handleDone} />
      </Card.Content>
    </Card>
  );
}
