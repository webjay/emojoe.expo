import type { EmojiMartData, Emoji } from '@emoji-mart/data';
import type { SectionListData } from 'react-native';
import { useState, useMemo, useCallback, useEffect } from 'react';
import emojiMartData from '@emoji-mart/data';
import { init, SearchIndex } from 'emoji-mart';
import { runAfterInteractions } from '@src/lib/task';

type Section = {
  key: string;
  title: string;
  data: readonly {
    key: string;
    emojis: Emoji[];
  }[];
};

type EmojiSection = SectionListData<
  {
    key: string;
    emojis: Emoji[];
  },
  Section
>;

const data = emojiMartData as EmojiMartData;
init({ data });

const sectionData: EmojiSection[] = data.categories
  .filter(({ id }) => id !== 'frequent')
  .map(({ id, emojis: emojiIds }) => ({
    key: id,
    title: id,
    data: [
      {
        key: id,
        emojis: emojiIds.map((emojiId) => data.emojis[emojiId]),
      },
    ],
  }));

export default function useEmojis() {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [searchResult, setSearchResult] = useState<EmojiSection[]>([]);
  const search = useCallback(async (value: string) => {
    setLoading(true);
    const result = await SearchIndex.search(value);
    if (result === null) {
      setSearchResult([]);
    } else {
      setSearchResult([
        {
          key: 'search',
          title: '',
          data: [
            {
              key: 'search',
              emojis: result,
            },
          ],
        },
      ]);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    runAfterInteractions(() => {
      setLoading(false);
    });
  }, []);
  const sections = useMemo(() => {
    if (loading === null) return [];
    if (searchResult.length > 0) return searchResult;
    return sectionData;
  }, [loading, searchResult]);
  return {
    search,
    loading,
    sections,
  };
}
