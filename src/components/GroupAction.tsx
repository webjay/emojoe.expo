import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import type { GroupMembership } from '../types/api';
import Swipe from './Swipe/Swipe';

type Props = {
  group: GroupMembership;
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

export default function GroupAction({ group: { groupId, emoji } }: Props) {
  return (
    <Card style={styles.container}>
      <Card.Content style={styles.content}>
        <Swipe emoji={emoji || '🃟'} groupId={groupId} />
      </Card.Content>
    </Card>
  );
}
