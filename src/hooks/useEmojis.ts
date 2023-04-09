// @ts-ignore
import { emojis } from '@emoji-mart/data';

type Emoji = {
  id: string;
  skins: {
    native: string;
  }[];
};

const emojiArray = Object.values<Emoji>(emojis).map(({ skins }) => skins[0].native);

export default function useEmojis() {
  return { emojiArray, loading: false };
}
