import type { Emoji } from '@emoji-mart/data';
import React, { useCallback, memo } from 'react';
import { Platform, Dimensions, StyleSheet, FlatList } from 'react-native';
import SectionItemEmoji from './SectionItemEmoji';
import SectionItemSeparator from './SectionItemSeparator';

const width = Platform.OS === 'web' ? 790 : Dimensions.get('window').width;
const numColumns = Math.floor(width / 75);

type Props = {
  item: {
    key: string;
    emojis: Emoji[];
  };
  onEmojiSelect: (emoji: string) => void;
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    marginHorizontal: 5,
  },
});

const renderItem = (emoji: string, onEmojiSelect: Props['onEmojiSelect']) => (
  <SectionItemEmoji emoji={emoji} onEmojiSelect={onEmojiSelect} />
);

function SectionItem({ item: { emojis }, onEmojiSelect }: Props) {
  const keyExtractor = useCallback(({ id }: Emoji) => id, []);
  const renderItemCallback = useCallback(
    ({
      item: {
        skins: [{ native: emoji }],
      },
    }: {
      item: Emoji;
    }) => renderItem(emoji, onEmojiSelect),
    [onEmojiSelect],
  );
  return (
    <FlatList
      data={emojis}
      numColumns={numColumns}
      keyExtractor={keyExtractor}
      renderItem={renderItemCallback}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={SectionItemSeparator}
      ListFooterComponent={SectionItemSeparator}
      columnWrapperStyle={styles.columnWrapperStyle}
    />
  );
}

export default memo(SectionItem);
