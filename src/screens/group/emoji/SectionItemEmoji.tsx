import React, { memo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';

type Props = {
  emoji: string;
  onEmojiSelect: (emoji: string) => void;
};

const styles = StyleSheet.create({
  avatarContainer: {
    margin: 5,
  },
  avatar: {
    transform: [{ rotateY: '180deg' }],
  },
});

function SectionItemEmoji({ onEmojiSelect, emoji }: Props) {
  return (
    <Pressable onPress={() => onEmojiSelect(emoji)}>
      <Avatar.Text
        label={emoji}
        style={styles.avatarContainer}
        labelStyle={styles.avatar}
      />
    </Pressable>
  );
}

export default memo(SectionItemEmoji);
