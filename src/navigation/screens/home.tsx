import React, { useState, useCallback, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { GroupMember } from '../../models';
import useProfile from '../../hooks/useProfile';
import ScrollViewRefresh from '../../components/ScrollViewRefresh';
import GroupAction from '../../components/GroupAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function HomeScreen() {
  const isFocused = useIsFocused();
  const { profileGet } = useProfile();
  const [loading, setLoading] = useState(false);
  const [groupIds, setGroupIds] = useState<GroupMember['groupMemberGroupId'][]>([]);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const refetch = useCallback(async () => {
    setLoading(true);
    const profile = await profileGet();
    const data = await DataStore.query(GroupMember, (c) => c.groupMemberProfileId.eq(profile.id));
    setGroupIds(data.map(({ groupMemberGroupId }) => groupMemberGroupId));
    setLoading(false);
  }, [profileGet]);
  const isSwiping = useCallback((swiping: boolean) => {
    setScrollEnabled(swiping === false);
  }, []);
  useEffect(() => {
    if (isFocused) refetch();
  }, [isFocused, refetch]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollViewRefresh loading={loading} refetch={refetch} scrollEnabled={scrollEnabled}>
        {groupIds.map((groupId) => (
          <GroupAction key={groupId} groupId={groupId} isSwiping={isSwiping} />
        ))}
      </ScrollViewRefresh>
    </SafeAreaView>
  );
}
