import { useState, useEffect } from 'react';
import type { Group } from '@src/types/api';
import { groupGetPublic } from '@src/lib/api';
import groups from '@src/lib/groups';

export default function useGroup(groupId?: Group['id']) {
  const [group, setGroup] = useState<Group>();
  useEffect(() => {
    if (!groupId) return;
    groupGetPublic(groupId).then((groupFromDb) => {
      const isPublic = groupId in groups;
      setGroup({
        ...groupFromDb,
        name: isPublic ? groups[groupId].name : groupFromDb.name,
      });
    });
  }, [groupId]);
  return { group };
}
