import { useState, useEffect } from 'react';
import { groupGet } from '../lib/api';
import type { Group } from '../types/api';

export default function useGroup(id?: Group['id']) {
  const [group, setGroup] = useState<Group>();
  useEffect(() => {
    if (!id) return;
    groupGet(id).then(setGroup);
  }, [id]);
  return { group };
}
