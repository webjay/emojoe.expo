import React, { useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import Container from '@src/components/Container';
import useGroupMemberships from '@src/hooks/useGroupMemberships';
import ScrollViewRefresh from '@src/components/ScrollViewRefresh';
import GroupAction from '@src/components/GroupAction';
import SafeAreaBottom from '@src/components/SafeAreaBottom';
import Howto from '@src/components/Howto';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
  onboard: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});

export default function HomeScreen() {
  const { push: navigate } = useRouter();
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
        {hasLoaded.current && !loading && groups.length === 0 && (
          <View style={styles.onboard}>
            <Button onPress={() => navigate('/onboard/group')}>
              Join or create a group to get started
            </Button>
          </View>
        )}
        {groups.map((group) => (
          <GroupAction key={group.groupId} group={group} />
        ))}
        <SafeAreaBottom />
      </ScrollViewRefresh>
      <Howto />
    </Container>
  );
}
