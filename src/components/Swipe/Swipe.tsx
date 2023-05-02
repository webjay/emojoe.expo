import React, {
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { useTheme, Avatar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { handleCreateActivity } from '@src/lib/task';
import styles from './Swipe.styles';
import Goal from '../Goal';

type Props = {
  emoji: string;
  groupId: string;
};

const acceptDistance = 50;

export default function Swipe({ emoji, groupId }: Props) {
  const { replace: redirect } = useRouter();
  const {
    colors: { surfaceVariant: backgroundColor },
  } = useTheme();
  const doneRef = useRef(false);
  const [positionEnd, setPositionEnd] = useState(200);
  const [swiped, setSwiped] = useState(false);
  const swipePast = useMemo(() => positionEnd - acceptDistance, [positionEnd]);

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

  useEffect(() => {
    if (swiped) {
      if (doneRef.current) return;
      doneRef.current = true;
      handleCreateActivity(groupId, emoji);
      onLeft.value = false;
      position.value = withSpring(positionEnd, undefined, () => {
        runOnJS(redirect)(`/group/${groupId}/done?emoji=${emoji}`);
      });
    } else {
      doneRef.current = false;
    }
  }, [swiped, onLeft, position, positionEnd, redirect, groupId, emoji]);

  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .onUpdate(({ translationX }) => {
          if (translationX > swipePast) {
            runOnJS(setSwiped)(true);
            return;
          }
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
            runOnJS(setSwiped)(false);
          }
        }),
    [swipePast, positionEnd, onLeft, position],
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
