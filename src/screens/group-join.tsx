import React, { useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import type { ScreenPropsStack } from '../types/navigation';
import useGroup from '../hooks/useGroup';
import { groupCreateMembership } from '../lib/api';

type Props = ScreenPropsStack<'GroupJoin'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});

export default function GroupJoinScreen({ navigation: { navigate, replace }, route: { params: { groupId } } }: Props) {
  const { group } = useGroup(groupId);
  const onInviteAccept = useCallback(async () => {
    await groupCreateMembership(groupId);
    replace('GroupEmoji', { groupId });
  }, [groupId, replace]);
  const onInviteDecline = useCallback(() => {
    navigate('Drawer', { screen: 'Home' });
  }, [navigate]);
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
