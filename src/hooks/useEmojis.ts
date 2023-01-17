import { emojis } from 'rn-emoji-picker/dist/data';

// ToDo: https://docs.expo.dev/versions/latest/sdk/asset/

export default function useEmojis() {
  return { emojis, loading: false };
}
