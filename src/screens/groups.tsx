import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import useGroupMemberships from '../hooks/useGroupMemberships';
import GroupCard from '../components/GroupCard';
import ScrollViewRefresh from '../components/ScrollViewRefresh';
import SafeAreaBottom from '../components/SafeAreaBottom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function GroupsScreen() {
  const isFocused = useIsFocused();
  const { loading, groups, loadData } = useGroupMemberships();
  useEffect(() => {
    if (isFocused) loadData(false);
  }, [isFocused, loadData]);
  return (
    <View style={styles.container}>
      <ScrollViewRefresh loading={loading} refetch={loadData}>
        {groups.map((group) => (
          <GroupCard key={group.groupId} group={group} />
        ))}
        <SafeAreaBottom />
      </ScrollViewRefresh>
    </View>
  );
}
