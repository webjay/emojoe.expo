import { useState, useEffect } from 'react';
import type { Group } from '../types/api';
import { groupGetPublic } from '../lib/api';

export default function useGroup(id?: Group['id']) {
  const [group, setGroup] = useState<Group>();
  useEffect(() => {
    if (!id) return;
    groupGetPublic(id).then(setGroup);
  }, [id]);
  return { group };
}
