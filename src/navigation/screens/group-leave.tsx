import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import type { ScreenPropsStack } from '../types';
import useGroup from '../../hooks/useGroup';

type Props = ScreenPropsStack<'GroupLeave'>;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default function GroupLeaveScreen({ route: { params: { groupId } } }: Props) {
  const { group } = useGroup(groupId);
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Would you like to leave
        {' '}
        {group?.name}
        ?
      </Text>
      <Text>
        oh well, you can not, for now...
      </Text>
    </SafeAreaView>
  );
}
