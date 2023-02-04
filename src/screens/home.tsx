import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import useGroupMemberships from '../hooks/useGroupMemberships';
import ScrollViewRefresh from '../components/ScrollViewRefresh';
import GroupAction from '../components/GroupAction';
import SafeAreaBottom from '../components/SafeAreaBottom';
import Empty from '../components/Empty';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function HomeScreen() {
  const { loading, groups, loadData } = useGroupMemberships();
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const isSwiping = useCallback((swiping: boolean) => {
    setScrollEnabled(swiping === false);
  }, []);
  useFocusEffect(useCallback(() => {
    loadData(groups.length === 0);
  }, [groups.length, loadData]));
  return (
    <ScrollViewRefresh loading={loading} refetch={loadData} scrollEnabled={scrollEnabled} style={styles.container}>
      {groups.length === 0 && !loading && (
        <Empty />
      )}
      {groups.map((group) => (
        <GroupAction key={group.groupId} group={group} isSwiping={isSwiping} />
      ))}
      <SafeAreaBottom />
    </ScrollViewRefresh>
  );
}
