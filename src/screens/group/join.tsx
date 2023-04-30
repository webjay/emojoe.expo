import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, Button } from 'react-native-paper';
import useAuth from '@src/hooks/useAuth';
import useGroup from '@src/hooks/useGroup';
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

export default function GroupJoinScreen({
  route: {
    params: { groupId },
  },
}: Props) {
  const [hasAccepted, setHasAccepted] = useState<boolean>();
  const { isSignedIn, handleSignIn } = useAuth();
  const { push: navigate, replace: redirect } = useRouter();
  const { group } = useGroup(groupId);
  const onInviteAccept = useCallback(async () => {
    setHasAccepted(true);
  }, []);
  const onInviteDecline = useCallback(() => {
    navigate('/');
  }, [navigate]);
  useEffect(() => {
    if (!hasAccepted) return;
    if (!isSignedIn) {
      handleSignIn();
      return;
    }
    handleGroupCreateMembership(groupId);
    redirect(`/group/${groupId}/emoji`);
  }, [hasAccepted, isSignedIn, groupId, handleSignIn, redirect]);
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