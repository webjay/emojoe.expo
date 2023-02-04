import React, { useState, useCallback } from 'react';
import { StyleSheet, InteractionManager } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import useGroupMemberships from '../hooks/useGroupMemberships';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import ScrollViewRefresh from '../components/ScrollViewRefresh';
import GroupCard from '../components/GroupCard';
import SafeAreaBottom from '../components/SafeAreaBottom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function GroupsScreen() {
  const [waiting, setWaiting] = useState(true);
  const { loading, groups, loadData } = useGroupMemberships();
  useFocusEffect(useCallback(() => {
    loadData(false);
    // hack to make sure scrollbars are set for full width
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => setWaiting(false), 500);
    });
  }, [loadData]));
  if (waiting) return <Loading />;
  return (
    <ScrollViewRefresh loading={loading} refetch={loadData} style={styles.container}>
      {groups.length === 0 && !loading && (
        <Empty />
      )}
      {groups.map((group) => (
        <GroupCard key={group.groupId} group={group} />
      ))}
      <SafeAreaBottom />
    </ScrollViewRefresh>
  );
}
