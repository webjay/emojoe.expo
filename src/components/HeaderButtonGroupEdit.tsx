import React, { useCallback } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DataStore } from '@aws-amplify/datastore';
import { Group, GroupMember } from '../models';
import useProfile from '../hooks/useProfile';

interface Props {
  name: string;
  groupId: string | undefined;
}

export default function HeaderHeaderButtonGroupEdit({ name, groupId }: Props) {
  const { navigate } = useNavigation();
  const { profileGet } = useProfile();
  const groupSave = useCallback(async () => {
    if (!name) return;
    const profile = await profileGet();
    if (groupId) {
      const group = await DataStore.query(Group, groupId);
      if (!group) throw new Error('Group not found');
      await DataStore.save(Group.copyOf(group, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.name = name;
      }));
      navigate('Groups');
    } else {
      const group = await DataStore.save(new Group({ name }));
      await DataStore.save(new GroupMember({
        Group: group,
        Profile: profile,
        groupMemberGroupId: group.id,
        groupMemberProfileId: profile.id,
      }));
      navigate('GroupEmoji', { groupId: group.id });
    }
  }, [name, profileGet, groupId, navigate]);
  return (
    <Button compact onPress={groupSave}>
      Save
    </Button>
  );
}
