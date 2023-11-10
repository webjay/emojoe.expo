import React, { useRef, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
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
  groupCreate: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
    marginTop: 30,
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
  const onGroupCreateClick = useCallback(() => {
    navigate('/group/create');
  }, [navigate]);
  return (
    <Container>
      <ScrollViewRefresh
        loading={loading}
        refetch={loadData}
        style={styles.container}
      >
        {hasLoaded.current && !loading && groups.length === 0 && <Empty />}
        {groups.map((group) => (
          <GroupCard key={group.groupId} group={group} />
        ))}
        <View style={styles.groupCreate}>
          <IconButton
            icon="plus"
            mode="outlined"
            accessibilityLabel="Create group"
            onPress={onGroupCreateClick}
          />
        </View>
        <SafeAreaBottom />
      </ScrollViewRefresh>
    </Container>
  );
}
