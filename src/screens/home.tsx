import React, { useState, useCallback, useEffect } from 'react';
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
  const { loading, groups, loadData } = useGroupMemberships();
  const [hasLoaded, setHasLoaded] = useState(false);
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
    <Container>
      <ScrollViewRefresh
        loading={loading}
        refetch={loadData}
        style={styles.container}
      >
        {hasLoaded && !loading && groups.length === 0 && <Empty />}
        {groups.map((group) => (
          <GroupAction key={group.groupId} group={group} />
        ))}
        <SafeAreaBottom />
      </ScrollViewRefresh>
    </Container>
  );
}
