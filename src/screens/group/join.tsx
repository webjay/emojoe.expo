import React, { useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, Button } from 'react-native-paper';
import useAuth from '@src/hooks/useAuth';
import useGroup from '@src/hooks/useGroup';
import { storageSet, storageGet, storageRemove } from '@src/lib/storage';
import { handleGroupCreateMembership } from '@src/lib/task';

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
    init();
  }, [init]);
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">Join</Text>
      <Text variant="headlineLarge">{group?.name}</Text>
      <Button mode="contained" onPress={onInviteAccept}>
        Join
      </Button>
      <Button mode="outlined" onPress={onInviteDecline}>
        Nevermind
      </Button>
    </SafeAreaView>
  );
}
