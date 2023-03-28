import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { storageGet, storageSet } from '../lib/storage';

enum OnBoardStatus {
  GroupChoice = 'GroupChoice',
}

const OnBoardStatusKey = 'OnBoardStatus';

export default function OnBoard() {
  const { navigate } = useNavigation();
  useEffect(() => {
    async function onBoard() {
      const onBoardStatus = await storageGet(OnBoardStatusKey);
      switch (onBoardStatus) {
        case OnBoardStatus.GroupChoice:
          break;
        default:
          await storageSet(OnBoardStatusKey, OnBoardStatus.GroupChoice);
          navigate('OnboardGroup');
          break;
      }
    }
    onBoard();
  }, [navigate]);
  return null;
}
