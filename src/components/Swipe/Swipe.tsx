import React, { useState, useMemo, useCallback } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureHandlerRootView,
  GestureDetector,
} from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { handleCreateActivity } from '@src/lib/task';
import styles from './Swipe.styles';
import Emoji from '../Emoji';
import Goal from '../Goal';

type Props = {
  emoji: string;
  groupId: string;
};

const emojiSize = 60;
const goalX = 20 + emojiSize;
const acceptPercentage = 0.65;

export default function Swipe({ emoji, groupId }: Props) {
  const { replace: goto } = useRouter();
  const {
    colors: { surfaceVariant: backgroundColor },
  } = useTheme();
  const [positionEnd, setPositionEnd] = useState(200);
  const [swipePast, setSwipePast] = useState(positionEnd);

  const position = useSharedValue(0);
  const onLeft = useSharedValue(true);
  const locked = useSharedValue(false);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { x, width },
      },
    }: LayoutChangeEvent) => {
      setPositionEnd(x + width - goalX);
      setSwipePast(Math.round((x + width) * acceptPercentage));
    },
    [],
  );

  const handleSwipeDone = useCallback(() => {
    handleCreateActivity(groupId, emoji);
    position.value = withSpring(positionEnd, { duration: 1000 }, () => {
      locked.value = false;
      // runOnJS(goto)(`/group/${groupId}/done?emoji=${emoji}`);
    });
    setTimeout(() => {
      goto(`/group/${groupId}/done?emoji=${emoji}`);
    }, 500);
  }, [emoji, groupId, locked, position, positionEnd, goto]);

  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .onUpdate(({ translationX }) => {
          if (locked.value) return;
          if (translationX > swipePast) {
            locked.value = true;
            onLeft.value = false;
            runOnJS(handleSwipeDone)();
          } else if (onLeft.value) {
            position.value = translationX;
          } else {
            position.value = positionEnd + translationX;
          }
        })
        .onEnd(() => {
          if (locked.value) return;
          position.value = withSpring(0);
          onLeft.value = true;
        }),
    [locked, swipePast, onLeft, handleSwipeDone, position, positionEnd],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <GestureHandlerRootView onLayout={onLayout} style={styles.container}>
      <View style={[styles.slide, { backgroundColor }]} />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.animation, animatedStyle]}>
          <Emoji emoji={emoji} size={emojiSize} />
        </Animated.View>
      </GestureDetector>
      <Goal groupId={groupId} />
    </GestureHandlerRootView>
  );
}
