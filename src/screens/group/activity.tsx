import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Text } from 'react-native-paper';
import { handleCreateRecognition } from '@src/lib/task';
import type { Activity, Recognition } from '@src/types/api';
import { activityGet, getRecognitionByActivityId } from '@src/lib/api';
import { getCognitoUsername } from '@src/lib/cognito';
import useGroup from '@src/hooks/useGroup';
import emoRecognition from '@src/lib/recognition.json';
import EmojiTitle from '@src/components/EmojiTitle';
import Howto from '@src/components/Howto';

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
  const [username, setUsername] = useState();
  const [recognitions, setRecognitions] = useState<Recognition[]>([]);
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
    getCognitoUsername().then(setUsername);
    getRecognitionByActivityId(activityId).then(setRecognitions);
  }, [activityId]);
  const hasGivenRecognition = useMemo(
    () => recognitions?.filter(({ owner }) => owner === username),
    [recognitions, username],
  );
  return (
    <SafeAreaView style={styles.container}>
      <EmojiTitle
        title=""
        emoji={activity?.emoji || ''}
        name={group?.name || ''}
      />
      <View style={styles.buttons}>
        {Object.entries(emoRecognition).map(([key, { emoji }]) => (
          <Button
            key={key}
            mode="outlined"
            disabled={Boolean(hasGivenRecognition.length)}
            onPress={() => onAppreciationPress(emoji)}
          >
            {emoji}
          </Button>
        ))}
      </View>
      {Boolean(hasGivenRecognition.length) && (
        <Text>You already gave {hasGivenRecognition[0].emoji}</Text>
      )}
      <Howto />
    </SafeAreaView>
  );
}
