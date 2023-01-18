import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import type { Group } from '../models';
import useEmoji from '../hooks/useEmoji';
import Swipe from './Swipe';

type Props = {
  groupId: Group['id']
  isSwiping: (swiping: boolean) => void
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  content: {
    overflow: 'hidden',
  },
});

export default function GroupAction({ groupId, isSwiping }: Props) {
  const { navigate } = useNavigation();
  const { getEmoji } = useEmoji();
  const [emoji, setEmoji] = useState<string>('🃏');
  const handleDone = useCallback(() => {
    navigate('Done', { groupId });
  }, [groupId, navigate]);
  useEffect(() => {
    getEmoji(groupId).then((result) => {
      if (!result) return;
      setEmoji(result.emoji.emoji);
    });
  }, [groupId, getEmoji]);
  return (
    <Card style={styles.container}>
      <Card.Content style={styles.content}>
        <Swipe emoji={emoji} isSwiping={isSwiping} handleDone={handleDone} />
      </Card.Content>
    </Card>
  );
}
