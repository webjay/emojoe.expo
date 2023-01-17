import { useCallback } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Group, Emoji } from '../models';
import useProfile from './useProfile';

interface IEmoji {
  category: string;
  keywords: string[];
  name: string;
  order: number;
  unified: string;
  emoji: string;
}

export default function useEmoji() {
  const { profileGet } = useProfile();
  const getEmoji = useCallback(async (groupId: string) => {
    const profile = await profileGet();
    const group = await DataStore.query(Group, groupId);
    if (!group) throw new Error('No group');
    const [result] = await DataStore.query(Emoji, (c) => c.and((c2) => [
      c2.emojiGroupId.eq(group.id),
      c2.emojiProfileId.eq(profile.id),
    ]));
    return result;
  }, [profileGet]);
  const saveGroupEmoji = useCallback(async (groupId: string, emoji: IEmoji) => {
    const profile = await profileGet();
    const group = await DataStore.query(Group, groupId);
    if (!group) return;
    const result = await getEmoji(group.id);
    // eslint-disable-next-line no-param-reassign
    const model = result ? Emoji.copyOf(result, (updated) => { updated.emoji = emoji; }) : new Emoji({
      Profile: profile,
      Group: group,
      emoji,
    });
    await DataStore.save(model);
  }, [getEmoji, profileGet]);
  return { getEmoji, saveGroupEmoji };
}
