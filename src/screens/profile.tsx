import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Appbar, Button, TextInput } from 'react-native-paper';
import Container from '@src/components/Container';
import { profileGetBySubId, profileUpdate } from '../lib/api';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 20,
  },
});

function ProfileScreen() {
  const { push: navigate } = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    profileGetBySubId().then((profile) => setName(profile.name || ''));
  }, []);
  const onPressSave = useCallback(async () => {
    setLoading(true);
    await profileUpdate({ name });
    setLoading(false);
    navigate('/');
  }, [name, navigate]);
  return (
    <Container safeArea={false}>
      <Appbar.Header mode="small">
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="cog" onPress={() => navigate('/settings')} />
      </Appbar.Header>
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          autoCorrect={false}
          placeholder="Average Joe"
          textContentType="name"
        />
        <Button
          mode="contained"
          onPress={onPressSave}
          loading={loading}
          disabled={!name || loading}
        >
          Save
        </Button>
      </View>
    </Container>
  );
}

export default ProfileScreen;
