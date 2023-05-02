import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from 'react-native-paper';
import useAuth from '@src/hooks/useAuth';
import useGroup from '@src/hooks/useGroup';
import { storageSet, storageGet, storageRemove } from '@src/lib/storage';
import { handleGroupCreateMembership } from '@src/lib/task';
import { groupMembershipByProfileAndGroupId } from '@src/lib/api';
import EmojiTitle from '@src/components/EmojiTitle';

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
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});

const hasAcceptedKey = 'hasAccepted';
const hasAcceptedValue = 'yes';

export default function GroupJoinScreen({
  route: {
    params: { groupId },
  },
}: Props) {
  const { isSignedIn, handleSignIn } = useAuth();
  const { push: navigate, replace: redirect } = useRouter();
  const { group } = useGroup(groupId);
  const [emoji, setEmoji] = useState<string>();
  const init = useCallback(async () => {
    const hasAccepted = await storageGet(hasAcceptedKey);
    if (hasAccepted !== hasAcceptedValue) return;
    storageRemove(hasAcceptedKey);
    handleGroupCreateMembership(groupId);
    redirect(`/group/${groupId}/emoji`);
  }, [groupId, redirect]);
  const onInviteAccept = useCallback(async () => {
    await storageSet(hasAcceptedKey, hasAcceptedValue);
    if (!isSignedIn) {
      handleSignIn();
      return;
    }
    init();
  }, [isSignedIn, handleSignIn, init]);
  const onInviteDecline = useCallback(() => {
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
  useEffect(() => {
    init();
  }, [init]);
  return (
    <SafeAreaView style={styles.container}>
      <EmojiTitle
        title="Care to join"
        emoji={emoji || ''}
        name={group?.name || ''}
      />
      <View style={styles.row}>
        <Button onPress={onInviteDecline}>Nevermind</Button>
        <Button mode="contained" onPress={onInviteAccept}>
          Join
        </Button>
      </View>
    </SafeAreaView>
  );
}
