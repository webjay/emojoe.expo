import { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Group } from '../models';

export default function useGroup(id?: Group['id']) {
  const [group, setGroup] = useState<Group>();
  useEffect(() => {
    if (!id) return;
    DataStore.query(Group, id).then(setGroup);
  }, [id]);
  return { group };
}
