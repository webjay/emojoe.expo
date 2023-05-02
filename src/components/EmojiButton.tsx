import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Avatar } from 'react-native-paper';

type Props = {
  href: string;
  emoji: string;
  size?: number;
};

const styles = StyleSheet.create({
  emoji: {
    transform: [{ rotateY: '180deg' }],
  },
});

function EmojiButton({ href, emoji, size }: Props) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity>
        <Avatar.Text label={emoji} size={size} labelStyle={styles.emoji} />
      </TouchableOpacity>
    </Link>
  );
}

EmojiButton.defaultProps = {
  size: 32,
};

export default EmojiButton;
