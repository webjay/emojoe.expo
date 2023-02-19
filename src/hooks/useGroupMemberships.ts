import { useState, useCallback } from 'react';
import type { GroupMembership } from '../types/api';
import { groupsByProfile } from '../lib/api';

export default function useGroupMemberships() {
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<GroupMembership[]>([]);
  const loadData = useCallback(async (signal = true) => {
    if (signal) setLoading(true);
    const data = await groupsByProfile();
    setGroups(data);
    if (signal) setLoading(false);
  }, []);
  return { loading, groups, loadData };
}
