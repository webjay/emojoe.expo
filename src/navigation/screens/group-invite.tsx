import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import type { ScreenPropsStack } from '../types';
import useGroup from '../../hooks/useGroup';

type Props = ScreenPropsStack<'GroupInvite'>;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default function GroupInviteScreen({ route: { params: { groupId } } }: Props) {
  const { group } = useGroup(groupId);
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Invite to
        {' '}
        {group?.name}
      </Text>
    </SafeAreaView>
  );
}
