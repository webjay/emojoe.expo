import { useState, useCallback } from 'react';
import type { GroupMembership } from '../types/api';
import { groupsByProfile } from '../lib/api';

export default function useGroupMemberships() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<GroupMembership[]>([]);
  const loadData = useCallback(async (signal = true) => {
    if (signal || hasLoaded === false) setLoading(true);
    const data = await groupsByProfile();
    setGroups(data);
    setLoading(false);
    setHasLoaded(true);
  }, [hasLoaded]);
  return { loading, groups, loadData };
}
