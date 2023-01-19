import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import useGroupMemberships from '../hooks/useGroupMemberships';
import GroupCard from '../components/GroupCard';
import ScrollViewRefresh from '../components/ScrollViewRefresh';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function GroupsScreen() {
  const isFocused = useIsFocused();
  const { loading, groups, refetch } = useGroupMemberships();
  useEffect(() => {
    if (isFocused) refetch();
  }, [isFocused, refetch]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollViewRefresh loading={loading} refetch={refetch}>
        {groups.map((group) => (
          <GroupCard key={group.groupId} group={group} />
        ))}
      </ScrollViewRefresh>
    </SafeAreaView>
  );
}
