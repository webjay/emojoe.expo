import React, { useState, useCallback, useEffect } from 'react';
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
  const [hasLoaded, setHasLoaded] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const isSwiping = useCallback((swiping: boolean) => {
    setScrollEnabled(swiping === false);
  }, []);
  useEffect(() => {
    loadData();
    setHasLoaded(true);
  }, [loadData]);
  useFocusEffect(
    useCallback(() => {
      loadData(false);
    }, [loadData]),
  );
  return (
    <ScrollViewRefresh
      loading={loading}
      refetch={loadData}
      scrollEnabled={scrollEnabled}
      style={styles.container}
    >
      {hasLoaded && !loading && groups.length === 0 && <Empty />}
      {groups.map((group) => (
        <GroupAction key={group.groupId} group={group} isSwiping={isSwiping} />
      ))}
      <SafeAreaBottom />
    </ScrollViewRefresh>
  );
}
