import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Emoji from './Emoji';

type Props = {
  href: string;
  emoji: string;
  size?: number;
};

function EmojiButton({ href, emoji, size }: Props) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity>
        <Emoji emoji={emoji} size={size} />
      </TouchableOpacity>
    </Link>
  );
}

EmojiButton.defaultProps = {
  size: 32,
};

export default EmojiButton;
