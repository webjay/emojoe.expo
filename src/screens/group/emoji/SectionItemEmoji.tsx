import React, { memo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';

type Props = {
  emoji: string;
  onEmojiSelect: (emoji: string) => void;
};

const styles = StyleSheet.create({
  avatar: {
    margin: 5,
  },
});

function SectionItemEmoji({ onEmojiSelect, emoji }: Props) {
  return (
    <Pressable onPress={() => onEmojiSelect(emoji)}>
      <Avatar.Text label={emoji} style={styles.avatar} />
    </Pressable>
  );
}

export default memo(SectionItemEmoji);
