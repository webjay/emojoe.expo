import React, { useCallback } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button, TouchableRipple } from 'react-native-paper';
import AnimateConfetti from '@src/components/AnimateConfetti';

type SearchParams = {
  groupId: string;
  emoji: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  const { groupId } = useLocalSearchParams<SearchParams>();
  const handlePress = useCallback(() => {
    redirect(`/group/${groupId}/activities`);
  }, [groupId, redirect]);
  return (
    <SafeAreaView style={styles.container}>
      <AnimateConfetti />
      <TouchableRipple style={styles.touchable} onPress={handlePress}>
        <Button icon="party-popper" mode="elevated">
          {randomWord()}
        </Button>
      </TouchableRipple>
    </SafeAreaView>
  );
}
