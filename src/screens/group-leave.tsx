import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import type { ScreenPropsStack } from '../types/navigation';
import { groupDeleteMembership } from '../lib/api';

type Props = ScreenPropsStack<'GroupLeave'>;

export default function GroupLeaveScreen({
  route: {
    params: { groupId },
  },
}: Props) {
  const { replace } = useRouter();
  useEffect(() => {
    async function handleGroupLeave() {
      await groupDeleteMembership(groupId);
      replace('/');
    }
    handleGroupLeave();
  }, [groupId, replace]);
  return null;
}
