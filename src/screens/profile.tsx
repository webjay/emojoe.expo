import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import type { ScreenPropsDrawer } from '../types/navigation';
import { profileGetBySubId, profileUpdate } from '../lib/api';

type Props = ScreenPropsDrawer<'Profile'>;

const styles = StyleSheet.create({
  input: {
    margin: 10,
  },
});

function ProfileScreen({ navigation: { setOptions, navigate } }: Props) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    profileGetBySubId().then((profile) => setName(profile.name || ''));
  }, []);
  const onDone = useCallback(async () => {
    setLoading(true);
    await profileUpdate({ name });
    setLoading(false);
    navigate('Home');
  }, [name, navigate]);
  const headerRight = useCallback(() => (
    <Button compact onPress={onDone} loading={loading} disabled={!name || loading}>
      Save
    </Button>
  ), [loading, name, onDone]);
  useEffect(() => {
    setOptions({ headerRight });
  }, [headerRight, setOptions]);
  return (
    <SafeAreaView>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        autoCapitalize="words"
        autoCorrect={false}
        placeholder="Average Joe"
        textContentType="name"
      />
    </SafeAreaView>
  );
}

export default ProfileScreen;
