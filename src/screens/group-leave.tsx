import { useEffect } from 'react';
import type { ScreenPropsStack } from '../types/navigation';
import { groupDeleteMembership } from '../lib/api';

type Props = ScreenPropsStack<'GroupLeave'>;

export default function GroupLeaveScreen({ navigation: { replace }, route: { params: { groupId } } }: Props) {
  useEffect(() => {
    async function handleGroupLeave() {
      await groupDeleteMembership(groupId);
      replace('Drawer', { screen: 'Home' });
    }
    handleGroupLeave();
  }, [groupId, replace]);
  return null;
}
