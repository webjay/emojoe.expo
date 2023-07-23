import type { Emoji } from '@emoji-mart/data';
import React, { useState, useCallback } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SectionList } from 'react-native';
import { handleGroupSetEmoji } from '@src/lib/task';
import { groupUpdateMembership } from '@src/lib/api';
import Container from '@src/components/Container';
import Loading from '@src/components/Loading';
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

async function handleSetEmoji(groupId: string, emoji: string) {
  await groupUpdateMembership(groupId, { emoji });
  handleGroupSetEmoji(groupId, emoji);
}

const renderSectionHeader = ({ section }: { section: { title: string } }) => (
  <SectionHeader section={section} />
);

const renderItem = (item: Item, onEmojiSelect: (emoji: string) => void) => (
  <SectionItem item={item} onEmojiSelect={onEmojiSelect} />
);

export default function GroupEmoji() {
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const { loading, sections, search } = useEmojis();
  const { groupId } = useLocalSearchParams<SearchParams>();
  const { push: navigate } = useRouter();
  const onEmojiSelect = useCallback(
    async (emoji: string) => {
      if (!groupId) return;
      setIsWorking(true);
      await handleSetEmoji(groupId, emoji);
      setIsWorking(false);
      navigate(`/group/${groupId}/invite`);
    },
    [groupId, navigate],
  );
  const renderItemCallback = useCallback(
    ({ item }: { item: Item }) => renderItem(item, onEmojiSelect),
    [onEmojiSelect],
  );
  if (isWorking) return <Loading />;
  return (
    <Container>
      <SectionList
        refreshing={loading}
        sections={sections}
        ListHeaderComponent={<Search search={search} />}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItemCallback}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </Container>
  );
}
