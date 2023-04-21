import React, { useState, useMemo, useEffect, useCallback } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedReaction,
  runOnJS,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { useTheme, Avatar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from './Swipe.styles';
import Goal from '../Goal';

type Props = {
  emoji: string;
  groupId: string;
};

const acceptDistance = 30;

export default function Swipe({ emoji, groupId }: Props) {
  const { replace: redirect } = useRouter();
  const {
    colors: { surfaceVariant: backgroundColor },
  } = useTheme();
  const [positionEnd, setPositionEnd] = useState(200);
  const [done, setDone] = useState(false);
  const swipePast = useMemo(() => positionEnd - acceptDistance, [positionEnd]);

  useEffect(() => {
    if (done) {
      redirect(`/group/${groupId}/done?emoji=${emoji}`);
    }
  }, [done, emoji, groupId, redirect]);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { x },
      },
    }: LayoutChangeEvent) => {
      setPositionEnd(x);
    },
    [],
  );

  const onLeft = useSharedValue(true);
  const position = useSharedValue(0);

  useAnimatedReaction(
    () => position.value,
    (value) => {
      if (value === positionEnd) {
        runOnJS(setDone)(true);
      }
      if (value === 0) {
        runOnJS(setDone)(false);
      }
    },
    [positionEnd],
  );

  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .onUpdate(({ translationX }) => {
          if (onLeft.value) {
            position.value = translationX;
          } else {
            position.value = swipePast + translationX;
          }
        })
        .onEnd(() => {
          if (position.value > swipePast) {
            position.value = withSpring(positionEnd);
            onLeft.value = false;
          } else {
            position.value = withSpring(0);
            onLeft.value = true;
          }
        }),
    [onLeft, position, swipePast, positionEnd],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={[styles.slide, { backgroundColor }]} />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.animation, animatedStyle]}>
          <Avatar.Text size={60} label={emoji} labelStyle={styles.emoji} />
        </Animated.View>
      </GestureDetector>
      <Goal groupId={groupId} onLayout={onLayout} />
    </View>
  );
}
