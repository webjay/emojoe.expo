import { useSearchParams } from 'expo-router';
import groups from '@src/lib/groups';

const groupMap = new Map(
  Object.entries(groups).map(([key, { emoji }]) => [emoji, key]),
);

type SearchParams = {
  emoji: string | string[];
};

function redirect(path: string) {
  window.location.replace(path);
}

export default function EmojiJoin() {
  const { emoji } = useSearchParams<SearchParams>();
  if (typeof emoji === 'string') {
    const groupId = groupMap.get(emoji);
    if (groupId) {
      redirect(`/group/${groupId}/join`);
      return;
    }
  }
  redirect('/');
}
