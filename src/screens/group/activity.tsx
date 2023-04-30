import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, Button } from 'react-native-paper';
import { handleCreateRecognition } from '@src/lib/task';
import type { Activity } from '@src/types/api';
import { activityGet } from '@src/lib/api';
import useGroup from '@src/hooks/useGroup';
import emoRecognition from '@src/lib/recognition.json';

type Props = {
  route: {
    params: {
      activityId: string;
    };
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default function GroupActivityScreen({
  route: {
    params: { activityId },
  },
}: Props) {
  const { replace } = useRouter();
  const [activity, setActivity] = useState<Activity>();
  const { group } = useGroup(activity?.groupId);
  const onAppreciationPress = useCallback(
    (emoji: Activity['emoji']) => {
      handleCreateRecognition(activityId, emoji);
      replace(`/activity/${activityId}/thx?emoji=${emoji}`);
    },
    [activityId, replace],
  );
  useEffect(() => {
    activityGet(activityId).then(setActivity);
  }, [activityId]);
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="headlineLarge">{group?.name}</Text>
      <Text variant="displayLarge">{activity?.emoji}</Text>
      <View style={styles.buttons}>
        {Object.entries(emoRecognition).map(([key, { emoji }]) => (
          <Button
            key={key}
            mode="outlined"
            onPress={() => onAppreciationPress(emoji)}
          >
            {emoji}
          </Button>
        ))}
      </View>
    </SafeAreaView>
  );
}
