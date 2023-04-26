import React, { useRef, useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import Container from '@src/components/Container';
import useGroupMemberships from '../hooks/useGroupMemberships';
import Empty from '../components/Empty';
import ScrollViewRefresh from '../components/ScrollViewRefresh';
import GroupCard from '../components/GroupCard';
import SafeAreaBottom from '../components/SafeAreaBottom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
});

export default function GroupsScreen() {
  const { push: navigate } = useRouter();
  const hasLoaded = useRef<boolean>(false);
  const { loading, groups, loadData } = useGroupMemberships();
  useEffect(() => {
    loadData();
    hasLoaded.current = true;
  }, [loadData]);
  useFocusEffect(
    useCallback(() => {
      if (!hasLoaded.current) return;
      loadData(false);
    }, [loadData]),
  );
  return (
    <Container>
      <Appbar.Header mode="small" statusBarHeight={0}>
        <Appbar.Content title="Groups" />
        <Appbar.Action icon="plus" onPress={() => navigate('/group/create')} />
      </Appbar.Header>
      <ScrollViewRefresh
        loading={loading}
        refetch={loadData}
        style={styles.container}
      >
        {hasLoaded.current && !loading && groups.length === 0 && <Empty />}
        {groups.map((group) => (
          <GroupCard key={group.groupId} group={group} />
        ))}
        <SafeAreaBottom />
      </ScrollViewRefresh>
    </Container>
  );
}
