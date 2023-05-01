import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

type SearchParams = {
  groupId: string;
  emoji: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

const words = [
  'Woohoo!',
  'Yay!',
  'Bravo!',
  'Hooray!',
  'Cheers!',
  'Yahoo!',
  'Way to go!',
  'Awesome!',
  'Congrats!',
  'High-five!',
  'Woot!',
  'Fabulous!',
  'Excellent!',
  'Fantastic!',
  'Superb!',
  'Amazing!',
  'Outstanding!',
  'Rock on!',
  'Good job!',
  'You did it!',
];

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default function DoneScreen() {
  const { replace: redirect } = useRouter();
  const { groupId } = useSearchParams<SearchParams>();
  const handlePress = useCallback(
    () => redirect(`/group/${groupId}/activities`),
    [groupId, redirect],
  );
  return (
    <SafeAreaView style={styles.container}>
      <Button icon="party-popper" mode="elevated" onPress={handlePress}>
        {randomWord()}
      </Button>
    </SafeAreaView>
  );
}
