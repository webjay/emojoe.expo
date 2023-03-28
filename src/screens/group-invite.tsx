import React, { useState, useCallback } from 'react';
import { createURL } from 'expo-linking';
import type { ShareAction } from 'react-native';
import { StyleSheet, Share, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import type { ScreenPropsStack } from '../types/navigation';
import useGroup from '../hooks/useGroup';

type Props = ScreenPropsStack<'GroupInvite'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});

export default function GroupInviteScreen({
  route: {
    params: { groupId },
  },
  navigation: { navigate },
}: Props) {
  const [shareAction, setShareAction] = useState<ShareAction>();
  const { group } = useGroup(groupId);
  const onInvitePress = useCallback(async () => {
    if (!group) return;
    const url = createURL(`/group/join/${groupId}`);
    const dialogTitle = group.name;
    const subject = `Please join ${dialogTitle}`;
    const message = `Please join the group: ${dialogTitle}.\n${url}`;
    const action = await Share.share({ message }, { dialogTitle, subject });
    setShareAction(action);
  }, [group, groupId]);
  const onCancelPress = useCallback(() => {
    navigate('Home');
  }, [navigate]);
  const cancelButtonTitle =
    shareAction?.action !== 'dismissedAction' ? 'Done' : 'Nevermind';
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
