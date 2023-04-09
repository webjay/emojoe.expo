import React, { useCallback } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';
import type { ScreenPropsStack } from '../types/navigation';
import { groupUpdateMembership } from '../lib/api';
import useEmojis from '../hooks/useEmojis';

type Props = ScreenPropsStack<'GroupEmoji'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default function GroupEmojiScreen({
  navigation: { navigate },
  route: {
    params: { groupId },
  },
}: Props) {
  const { emojiArray } = useEmojis();
  const onEmojiSelect = useCallback(
    async (emoji: string) => {
      await groupUpdateMembership(groupId, { emoji });
      navigate('GroupInvite', { groupId });
    },
    [groupId, navigate],
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {emojiArray.map((emoji) => (
          <Pressable key={emoji} onPress={() => onEmojiSelect(emoji)}>
            <Avatar.Text label={emoji} />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
