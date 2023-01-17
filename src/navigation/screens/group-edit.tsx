import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import type { ScreenPropsStack } from '../types';
import HeaderButtonGroupEdit from '../../components/HeaderButtonGroupEdit';
import useGroup from '../../hooks/useGroup';

type Props = ScreenPropsStack<'GroupEdit'>;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default function GroupEditScreen({ navigation: { setOptions }, route: { params } }: Props) {
  const [name, setName] = useState('');
  const groupId = params?.groupId;
  const { group } = useGroup(groupId);
  useEffect(() => {
    if (!group) return;
    setName(group.name);
  }, [group]);
  const headerRight = useCallback(() => <HeaderButtonGroupEdit name={name} groupId={groupId} />, [name, groupId]);
  useEffect(() => {
    setOptions({ headerRight });
    if (groupId) {
      setOptions({ title: 'Edit Group' });
    }
  }, [headerRight, setOptions, groupId]);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Group Name"
        value={name}
        onChangeText={(value) => setName(value)}
      />
    </SafeAreaView>
  );
}
