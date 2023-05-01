import React, { useState, useCallback, useEffect } from 'react';
import { createURL } from 'expo-linking';
import type { ShareAction } from 'react-native';
import { StyleSheet, Share, SafeAreaView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, Button } from 'react-native-paper';
import useGroup from '@src/hooks/useGroup';
import { groupMembershipByProfileAndGroupId } from '@src/lib/api';

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
  header: {
    alignItems: 'center',
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
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
  const [emoji, setEmoji] = useState<string>();
  const { group } = useGroup(groupId);
  const onInvitePress = useCallback(async () => {
    if (!group) return;
    const url = getURL(groupId);
    const dialogTitle = `${emoji} ${group.name}`;
    const subject = `Please join ${dialogTitle}`;
    const message = `Please join ${dialogTitle}.\n${url}`;
    const action = await Share.share(
      { message },
      { dialogTitle, subject },
    ).catch(() => {});
    if (action) {
      setShareAction(action);
    }
  }, [emoji, group, groupId]);
  const onCancelPress = useCallback(() => {
    navigate('/');
  }, [navigate]);
  useEffect(() => {
    if (!groupId) return;
    groupMembershipByProfileAndGroupId(groupId).then(
      ([{ emoji: groupEmoji }]) => {
        if (!groupEmoji) return;
        setEmoji(groupEmoji);
      },
    );
  }, [groupId]);
  const cancelButtonTitle =
    shareAction?.action === 'sharedAction' ? 'Done' : 'Nevermind';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineLarge">
          Send an invite for {emoji} {group?.name}
        </Text>
        <Text variant="bodyLarge">
          Building a habit is best done with an accountability partner.
        </Text>
      </View>
      <View style={styles.row}>
        <Button onPress={onCancelPress}>{cancelButtonTitle}</Button>
        <Button mode="contained" onPress={onInvitePress}>
          Invite
        </Button>
      </View>
    </SafeAreaView>
  );
}
