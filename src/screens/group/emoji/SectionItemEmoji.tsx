import React, { memo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Emoji from '@src/components/Emoji';

type Props = {
  emoji: string;
  onEmojiSelect: (emoji: string) => void;
};

const styles = StyleSheet.create({
  avatarContainer: {
    margin: 5,
  },
});

function SectionItemEmoji({ onEmojiSelect, emoji }: Props) {
  return (
    <Pressable onPress={() => onEmojiSelect(emoji)}>
      <Emoji emoji={emoji} size={50} style={styles.avatarContainer} />
    </Pressable>
  );
}

export default memo(SectionItemEmoji);
