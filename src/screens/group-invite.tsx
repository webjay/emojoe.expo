import React, { useCallback } from 'react';
import { createURL } from 'expo-linking';
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

export default function GroupInviteScreen({ route: { params: { groupId } } }: Props) {
  const { group } = useGroup(groupId);
  const onInvitePress = useCallback(() => {
    const url = createURL(`/group/join/${groupId}`);
    const dialogTitle = group?.name;
    const subject = `Please join ${dialogTitle}`;
    const message = `Please join ${dialogTitle}.\nGet Expo Go in the App Store, then hit this:\n${url}`;
    Share.share({ message }, { dialogTitle, subject });
  }, [group, groupId]);
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="displayLarge">Invite</Text>
      <Text variant="headlineLarge">{group?.name}</Text>
      <Button mode="contained" onPress={onInvitePress}>
        Invite
      </Button>
    </SafeAreaView>
  );
}
