import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { profileGetBySubId, profileUpdate } from '../lib/api';

const styles = StyleSheet.create({
  input: {
    margin: 10,
  },
});

function ProfileScreen() {
  const [name, setName] = useState<string>('');
  useEffect(() => {
    profileGetBySubId().then((profile) => setName(profile.name || ''));
  }, []);
  const onDone = useCallback(() => {
    profileUpdate({ name });
  }, [name]);
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
        onEndEditing={onDone}
        textContentType="name"
      />
    </SafeAreaView>
  );
}

export default ProfileScreen;
