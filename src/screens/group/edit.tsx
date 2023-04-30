import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput, Button } from 'react-native-paper';
import Container from '@src/components/Container';
import useGroup from '@src/hooks/useGroup';
import { groupCreate, groupUpdate } from '@src/lib/api';

type Props = {
  route: {
    params: {
      groupId: string;
    };
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 20,
  },
});

export default function GroupEditScreen({ route: { params } }: Props) {
  const { push: navigate } = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const groupId = params?.groupId;
  const { group } = useGroup(groupId);
  const groupSave = useCallback(async () => {
    if (!name) return;
    if (groupId) {
      setLoading(true);
      await groupUpdate(groupId, { name });
      setLoading(false);
      navigate('/groups');
    } else {
      setLoading(true);
      const { id } = await groupCreate({ name });
      setLoading(false);
      navigate(`/group/${id}/emoji`);
    }
  }, [name, groupId, navigate]);
  useEffect(() => {
    if (!group) return;
    setName(group.name);
  }, [group]);
  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <TextInput label="Group Name" value={name} onChangeText={setName} />
        <Button
          mode="contained"
          onPress={groupSave}
          loading={loading}
          disabled={!name || loading}
        >
          Save
        </Button>
      </SafeAreaView>
    </Container>
  );
}
