import React, { useCallback } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { groupCreate, groupUpdate } from '../lib/api';

interface Props {
  name: string;
  groupId: string | undefined;
}

export default function HeaderHeaderButtonGroupEdit({ name, groupId }: Props) {
  const { navigate } = useNavigation();
  const groupSave = useCallback(async () => {
    if (!name) return;
    if (groupId) {
      await groupUpdate(groupId, { name });
      navigate('Groups');
    } else {
      const { id } = await groupCreate({ name });
      navigate('GroupEmoji', { groupId: id });
    }
  }, [name, groupId, navigate]);
  return (
    <Button compact onPress={groupSave}>
      Save
    </Button>
  );
}
