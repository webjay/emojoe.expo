import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import useProfile from '../../hooks/useProfile';

const styles = StyleSheet.create({
  input: {
    margin: 10,
  },
});

function ProfileScreen() {
  const { profileGet, profileSave } = useProfile();
  const [name, setName] = useState<string>('');
  useEffect(() => {
    profileGet().then((profile) => setName(profile.name || ''));
  }, [profileGet]);
  const onDone = useCallback(() => {
    profileSave({ name });
  }, [name, profileSave]);
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
