import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput, Button, Text } from 'react-native-paper';
import Container from '@src/components/Container';
import EmojiButton from '@src/components/EmojiButton';
import useGroup from '@src/hooks/useGroup';
import { groupCreate, groupUpdate } from '@src/lib/api';
import groups from '@src/lib/groups';

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
  row: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  public: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function GroupEditScreen({ route: { params } }: Props) {
  const { push: navigate } = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const groupId = params?.groupId;
  const isPublic = groupId in groups;
  const { group } = useGroup(groupId);
  const handleGroupCreateButtonPress = useCallback(() => {
    navigate('/group/create');
  }, [navigate]);
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
          <TextInput
            label="Group Name"
            value={name}
            disabled={isPublic}
            onChangeText={setName}
          />
          <Button
            mode="contained"
            onPress={groupSave}
            loading={loading}
            disabled={isPublic || !name || loading}
          >
            {groupId ? 'Save' : 'Create'}
          </Button>
        </View>
        {!groupId && (
          <View>
            <View>
              <Text variant="bodyLarge">Or join a public group?</Text>
            </View>
            <View style={styles.row}>
              {Object.entries(groups).map(([id, { emoji }]) => (
                <EmojiButton
                  key={id}
                  href={`/group/${id}/join`}
                  emoji={emoji}
                />
              ))}
            </View>
          </View>
        )}
        {isPublic && (
          <View style={styles.public}>
            <Text variant="bodyLarge">
              This is a public group, thus the name can not be changed, but you
              can create your own group?
            </Text>
            <Button compact onPress={handleGroupCreateButtonPress}>
              Create group
            </Button>
          </View>
        )}
      </View>
    </Container>
  );
}
