import React, { useCallback, ComponentProps } from 'react';
import { StyleSheet, useColorScheme, SafeAreaView } from 'react-native';
import EmojiPicker from 'rn-emoji-picker';
import type { ScreenPropsStack } from '../types';
import useEmoji from '../../hooks/useEmoji';
import useEmojis from '../../hooks/useEmojis';

type Props = ScreenPropsStack<'GroupEmoji'>;
type EmojiPickerProps = ComponentProps<typeof EmojiPicker>;

const enabledCategories: EmojiPickerProps['enabledCategories'] = [
  'emotion',
  'emojis',
  'activities',
  'flags',
  'food',
  'places',
  'nature',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default function GroupEmojiScreen({
  navigation: { navigate },
  route: {
    params: { groupId },
  },
}: Props) {
  const { emojis, loading } = useEmojis();
  const colorScheme = useColorScheme();
  const { saveGroupEmoji } = useEmoji();
  const onSelect: EmojiPickerProps['onSelect'] = useCallback(async (emoji) => {
    await saveGroupEmoji(groupId, emoji);
    navigate('Groups');
  }, [groupId, navigate, saveGroupEmoji]);
  return (
    <SafeAreaView style={styles.container}>
      <EmojiPicker
        emojis={emojis}
        autoFocus={false}
        loading={loading}
        darkMode={colorScheme === 'dark'}
        perLine={7}
        onSelect={onSelect}
        backgroundColor="transparent"
        enabledCategories={enabledCategories}
        defaultCategory="activities"
      />
    </SafeAreaView>
  );
}
