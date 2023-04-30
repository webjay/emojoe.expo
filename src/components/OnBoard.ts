import { useEffect } from 'react';
import { usePathname, useRouter } from 'expo-router';
import { storageGet, storageSet } from '../lib/storage';

enum OnBoardStatus {
  GroupChoice = 'GroupChoice',
}

const OnBoardStatusKey = 'OnBoardStatus';

export default function OnBoard() {
  const pathname = usePathname();
  const { push: navigate } = useRouter();
  useEffect(() => {
    async function onBoard() {
      const onBoardStatus = await storageGet(OnBoardStatusKey);
      switch (onBoardStatus) {
        case OnBoardStatus.GroupChoice:
          break;
        default:
          await storageSet(OnBoardStatusKey, OnBoardStatus.GroupChoice);
          navigate('/onboard/group');
          break;
      }
    }
    if (pathname.endsWith('/join')) return;
    onBoard();
  }, [pathname, navigate]);
  return null;
}
