import React, { useState, useCallback } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { groupCreate, groupUpdate } from '../lib/api';

interface Props {
  name: string;
  groupId: string | undefined;
}

export default function HeaderHeaderButtonGroupEdit({ name, groupId }: Props) {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const groupSave = useCallback(async () => {
    if (!name) return;
    if (groupId) {
      setLoading(true);
      await groupUpdate(groupId, { name });
      setLoading(false);
      navigate('Groups');
    } else {
      setLoading(true);
      const { id } = await groupCreate({ name });
      setLoading(false);
      navigate('GroupEmoji', { groupId: id });
    }
  }, [name, groupId, navigate]);
  return (
    <Button compact onPress={groupSave} loading={loading} disabled={!name || loading}>
      Save
    </Button>
  );
}
