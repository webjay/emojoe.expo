import { useState, useEffect } from 'react';
import type { Group } from '@src/types/api';
import { groupGet, groupGetPublic } from '@src/lib/api';
import getCognitoUserSub from '@src/lib/cognito';
import groups from '@src/lib/groups';

export default function useGroup(groupId?: Group['id']) {
  const [group, setGroup] = useState<Group>();
  useEffect(() => {
    if (!groupId) return;
    getCognitoUserSub().then((sub) => {
      const groupGetFunction = sub === null ? groupGetPublic : groupGet;
      groupGetFunction(groupId).then((groupFromDb) => {
        const isPublic = groupId in groups;
        setGroup({
          ...groupFromDb,
          name: isPublic ? groups[groupId].name : groupFromDb.name,
        });
      });
    });
  }, [groupId]);
  return { group };
}
