import React, { useState, useCallback, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Group } from '../../models';
import ScrollViewRefresh from '../../components/ScrollViewRefresh';
import GroupAction from '../../components/GroupAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function HomeScreen() {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const refetch = useCallback(async () => {
    setLoading(true);
    const data = await DataStore.query(Group);
    setGroups(data);
    setLoading(false);
  }, []);
  const isSwiping = useCallback((swiping: boolean) => {
    setScrollEnabled(swiping === false);
  }, []);
  useEffect(() => {
    if (isFocused) refetch();
  }, [isFocused, refetch]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollViewRefresh loading={loading} refetch={refetch} scrollEnabled={scrollEnabled}>
        {groups.map((group) => (
          <GroupAction key={group.id} group={group} isSwiping={isSwiping} />
        ))}
      </ScrollViewRefresh>
    </SafeAreaView>
  );
}
