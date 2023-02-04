import React, { useState, useCallback, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      <ScrollViewRefresh loading={loading} refetch={loadData} scrollEnabled={scrollEnabled} style={styles.container}>
        {groups.length === 0 && !loading && (
          <Empty />
        )}
        {groups.map((group) => (
          <GroupAction key={group.groupId} group={group} isSwiping={isSwiping} />
        ))}
        <SafeAreaBottom />
      </ScrollViewRefresh>
    </View>
  );
}
