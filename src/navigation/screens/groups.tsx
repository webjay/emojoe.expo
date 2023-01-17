import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { DataStore } from '@aws-amplify/datastore';
import type { ScreenPropsDrawer } from '../types';
import { Group } from '../../models';
import useProfile from '../../hooks/useProfile';
import GroupCard from '../../components/GroupCard';
import ScrollViewRefresh from '../../components/ScrollViewRefresh';

type Props = ScreenPropsDrawer<'Groups'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 32,
  },
});

export default function GroupsScreen({ navigation: { navigate } }: Props) {
  const isFocused = useIsFocused();
  const { profileGet } = useProfile();
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(false);
  const getGroups = useCallback(async () => {
    setLoading(true);
    const profile = await profileGet();
    // const data = await DataStore.query(Group, (c) => c.profiles.profileId.contains(profile.id));
    const data = await DataStore.query(Group);
    setGroups(data);
    setLoading(false);
  }, [profileGet]);
  useEffect(() => {
    getGroups();
  }, [getGroups, isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollViewRefresh loading={loading} refetch={getGroups}>
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </ScrollViewRefresh>
      <FAB
        icon="plus"
        label="Create New Group"
        style={styles.fab}
        onPress={() => navigate('GroupEdit')}
      />
    </SafeAreaView>
  );
}
