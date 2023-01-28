import React, { useState, useCallback, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import useGroupMemberships from '../hooks/useGroupMemberships';
import ScrollViewRefresh from '../components/ScrollViewRefresh';
import GroupAction from '../components/GroupAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function HomeScreen() {
  const isFocused = useIsFocused();
  const { loading, groups, loadData } = useGroupMemberships();
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const isSwiping = useCallback((swiping: boolean) => {
    setScrollEnabled(swiping === false);
  }, []);
  useEffect(() => {
    if (isFocused) loadData(false);
  }, [isFocused, loadData]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollViewRefresh loading={loading} refetch={loadData} scrollEnabled={scrollEnabled}>
        {groups.map((group) => (
          <GroupAction key={group.groupId} group={group} isSwiping={isSwiping} />
        ))}
      </ScrollViewRefresh>
    </SafeAreaView>
  );
}
