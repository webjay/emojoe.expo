import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { groupDeleteMembership } from '@src/lib/api';

type Props = {
  route: {
    params: {
      groupId: string;
    };
  };
};

export default function GroupLeaveScreen({
  route: {
    params: { groupId },
  },
}: Props) {
  const { replace: redirect } = useRouter();
  useEffect(() => {
    async function handleGroupLeave() {
      await groupDeleteMembership(groupId);
      redirect('/');
    }
    handleGroupLeave();
  }, [groupId, redirect]);
  return null;
}
