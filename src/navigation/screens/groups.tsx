import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { DataStore } from '@aws-amplify/datastore';
import { GroupMember } from '../../models';
import useProfile from '../../hooks/useProfile';
import GroupCard from '../../components/GroupCard';
import ScrollViewRefresh from '../../components/ScrollViewRefresh';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function GroupsScreen() {
  const isFocused = useIsFocused();
  const { profileGet } = useProfile();
  const [groupIds, setGroupIds] = useState<GroupMember['groupMemberGroupId'][]>([]);
  const [loading, setLoading] = useState(false);
  const getGroups = useCallback(async () => {
    setLoading(true);
    const profile = await profileGet();
    const data = await DataStore.query(GroupMember, (c) => c.groupMemberProfileId.eq(profile.id));
    setGroupIds(data.map(({ groupMemberGroupId }) => groupMemberGroupId));
    setLoading(false);
  }, [profileGet]);
  useEffect(() => {
    getGroups();
  }, [getGroups, isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollViewRefresh loading={loading} refetch={getGroups}>
        {groupIds.map((groupId) => (
          <GroupCard key={groupId} groupId={groupId} />
        ))}
      </ScrollViewRefresh>
    </SafeAreaView>
  );
}
