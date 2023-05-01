import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Avatar } from 'react-native-paper';

type Props = {
  href: string;
  emoji: string;
};

const styles = StyleSheet.create({
  emoji: {
    transform: [{ rotateY: '180deg' }],
  },
});

export default function EmojiButton({ href, emoji }: Props) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity>
        <Avatar.Text label={emoji} labelStyle={styles.emoji} />
      </TouchableOpacity>
    </Link>
  );
}
