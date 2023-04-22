import type { Profile } from '../types/api';

// eslint-disable-next-line import/prefer-default-export
export function firstName(name: Profile['name']) {
  if (!name) return '🃟';
  return name.split(' ')[0];
}
