import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';
import Container from '@src/components/Container';
import { groupUpdateMembership } from '../lib/api';
import useEmojis from '../hooks/useEmojis';

type SearchParams = {
  groupId: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  scrollView: {
    flex: 1,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
});

export default function GroupEmojiScreen() {
  const { push: navigate } = useRouter();
  const { groupId } = useSearchParams<SearchParams>();
  const { emojiArray } = useEmojis();
  const onEmojiSelect = useCallback(
    async (emoji: string) => {
      if (!groupId) return;
      await groupUpdateMembership(groupId, { emoji });
      navigate(`/group/${groupId}/invite`);
    },
    [groupId, navigate],
  );
  return (
    <Container>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {emojiArray.map(({ id, emoji }) => (
            <Pressable key={id} onPress={() => onEmojiSelect(emoji)}>
              <Avatar.Text label={emoji} />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </Container>
  );
}
