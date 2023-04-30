import React, { useState, useCallback } from 'react';
import { createURL } from 'expo-linking';
import type { ShareAction } from 'react-native';
import { StyleSheet, Share, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, Button } from 'react-native-paper';
import useGroup from '@src/hooks/useGroup';

type Props = {
  route: {
    params: {
      groupId: string;
    };
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});

function getURL(groupId: string) {
  const path = `/group/${groupId}/join`;
  if (process.env.NODE_ENV === 'development') {
    return createURL(path);
  }
  return `https://emojoe.app${path}`;
}

export default function GroupInviteScreen({
  route: {
    params: { groupId },
  },
}: Props) {
  const { push: navigate } = useRouter();
  const [shareAction, setShareAction] = useState<ShareAction>();
  const { group } = useGroup(groupId);
  const onInvitePress = useCallback(async () => {
    if (!group) return;
    const url = getURL(groupId);
    const dialogTitle = group.name;
    const subject = `Please join ${dialogTitle}`;
    const message = `Please join ${dialogTitle}.\n${url}`;
    const action = await Share.share(
      { message },
      { dialogTitle, subject },
    ).catch(() => {});
    if (action) {
      setShareAction(action);
    }
  }, [group, groupId]);
  const onCancelPress = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const cancelButtonTitle =
    shareAction?.action === 'sharedAction' ? 'Done' : 'Nevermind';
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">Invite</Text>
      <Text variant="headlineLarge">{group?.name}</Text>
      <Button mode="contained" onPress={onInvitePress}>
        Invite
      </Button>
      <Button mode="outlined" onPress={onCancelPress}>
        {cancelButtonTitle}
      </Button>
    </SafeAreaView>
  );
}
