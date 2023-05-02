import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput, Button, Text } from 'react-native-paper';
import Container from '@src/components/Container';
import EmojiButton from '@src/components/EmojiButton';
import useGroup from '@src/hooks/useGroup';
import { groupCreate, groupUpdate } from '@src/lib/api';
import groups from '@src/lib/groups.json';

type Groups = {
  [key: string]: {
    emoji: string;
    name: string;
  };
};

type Props = {
  route: {
    params: {
      groupId: string;
    };
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
  createSection: {
    gap: 20,
  },
  groupsSection: {},
  row: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
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
      <View style={styles.container}>
        <View style={styles.createSection}>
          <TextInput label="Group Name" value={name} onChangeText={setName} />
          <Button
            mode="contained"
            onPress={groupSave}
            loading={loading}
            disabled={!name || loading}
          >
            {groupId ? 'Save' : 'Create'}
          </Button>
        </View>
        {!groupId && (
          <View style={styles.groupsSection}>
            <View>
              <Text variant="bodyLarge">Or join a public group?</Text>
            </View>
            <View style={styles.row}>
              {Object.entries(groups as Groups).map(([id, { emoji }]) => (
                <EmojiButton
                  key={id}
                  href={`/group/${id}/join`}
                  emoji={emoji}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </Container>
  );
}
