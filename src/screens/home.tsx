import React, { useRef, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Container from '@src/components/Container';
import useGroupMemberships from '@src/hooks/useGroupMemberships';
import ScrollViewRefresh from '@src/components/ScrollViewRefresh';
import GroupAction from '@src/components/GroupAction';
import SafeAreaBottom from '@src/components/SafeAreaBottom';
import Empty from '@src/components/Empty';
import Howto from '@src/components/Howto';

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
    loadData().then(() => {
      hasLoaded.current = true;
    });
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
      <Howto />
    </Container>
  );
}
