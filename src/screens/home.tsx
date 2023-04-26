import React, { useRef, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Container from '@src/components/Container';
import useGroupMemberships from '../hooks/useGroupMemberships';
import ScrollViewRefresh from '../components/ScrollViewRefresh';
import GroupAction from '../components/GroupAction';
import SafeAreaBottom from '../components/SafeAreaBottom';
import Empty from '../components/Empty';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
});

export default function HomeScreen() {
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
      <ScrollViewRefresh
        loading={loading}
        refetch={loadData}
        style={styles.container}
      >
        {hasLoaded.current && !loading && groups.length === 0 && <Empty />}
        {groups.map((group) => (
          <GroupAction key={group.groupId} group={group} />
        ))}
        <SafeAreaBottom />
      </ScrollViewRefresh>
    </Container>
  );
}
