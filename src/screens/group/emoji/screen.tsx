import type { Emoji } from '@emoji-mart/data';
import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import { SectionList } from 'react-native';
import { handleGroupSetEmoji } from '@src/lib/task';
import Container from '@src/components/Container';
import Search from './Search';
import SectionHeader from './SectionHeader';
import SectionItem from './SectionItem';
import useEmojis from './useEmojis';

type SearchParams = {
  groupId: string;
};

type Item = {
  key: string;
  emojis: Emoji[];
};

const renderSectionHeader = ({ section }: { section: { title: string } }) => (
  <SectionHeader section={section} />
);

const renderItem = (item: Item, onEmojiSelect: (emoji: string) => void) => (
  <SectionItem item={item} onEmojiSelect={onEmojiSelect} />
);

export default function GroupEmoji() {
  const { loading, sections, search } = useEmojis();
  const { groupId } = useSearchParams<SearchParams>();
  const { push: navigate } = useRouter();
  const onEmojiSelect = useCallback(
    (emoji: string) => {
      if (!groupId) return;
      handleGroupSetEmoji(groupId, emoji);
      navigate(`/group/${groupId}/invite`);
    },
    [groupId, navigate],
  );
  const renderItemCallback = useCallback(
    ({ item }: { item: Item }) => renderItem(item, onEmojiSelect),
    [onEmojiSelect],
  );
  return (
    <Container>
      <Search search={search} />
      <SectionList
        refreshing={loading}
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItemCallback}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
