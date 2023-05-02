import { useState, useCallback } from 'react';
import type { GroupMembership } from '@src/types/api';
import { groupsByProfile } from '@src/lib/api';
import groupsPublic from '@src/lib/groups';

function groupMap(groupMembership: GroupMembership) {
  const isPublic = groupMembership.groupId in groupsPublic;
  if (isPublic) {
    return {
      ...groupMembership,
      group: {
        ...groupMembership.group,
        name: groupsPublic[groupMembership.groupId].name,
      },
    };
  }
  return groupMembership;
}

export default function useGroupMemberships() {
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<GroupMembership[]>([]);
  const loadData = useCallback(async (signal = true) => {
    if (signal) setLoading(true);
    const data = await groupsByProfile();
    setGroups(data.map(groupMap));
    if (signal) setLoading(false);
  }, []);
  return { loading, groups, loadData };
}
