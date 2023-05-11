import React, { useCallback, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import useApi from '@src/hooks/useApi';
import type { Recognition } from '@src/types/api';
import { getRecognitionByActivityId } from '@src/lib/api';

type Props = {
  activityId: string;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: -5,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  emoji: {
    position: 'absolute',
  },
});

function transform(index: number, negative = false) {
  const degree = index * 40 * (negative ? -1 : 1);
  return { transform: [{ rotate: `${degree}deg` }] };
}

function RecognitionEmojis({ activityId }: Props) {
  const { data } = useApi<Recognition[]>(
    useCallback(() => getRecognitionByActivityId(activityId), [activityId]),
  );
  if (!data) return null;
  return (
    <>
      {data.map(({ id, emoji }, index) => (
        <View key={id} style={[styles.container, transform(index)]}>
          <Text
            variant="bodySmall"
            style={[styles.emoji, transform(index, true)]}
          >
            {emoji}
          </Text>
        </View>
      ))}
    </>
  );
}

export default memo(RecognitionEmojis);
