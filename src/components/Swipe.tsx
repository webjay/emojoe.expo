import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  LayoutChangeEvent,
} from 'react-native';
import { useTheme, Avatar } from 'react-native-paper';
import Goal from './Goal';

type Props = {
  emoji: string;
  groupId: string;
  isSwiping: (swiping: boolean) => void;
  handleDone: () => void;
};

const animConfig: Animated.EventConfig<unknown> = {
  useNativeDriver: false,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slide: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 20,
    margin: 20,
    borderRadius: 100,
  },
  animation: {
    zIndex: 1,
    elevation: 1,
  },
  emoji: {
    transform: [{ rotateY: '180deg' }],
  },
});

export default function Swipe({
  emoji,
  groupId,
  isSwiping,
  handleDone,
}: Props) {
  const {
    colors: { surfaceVariant: backgroundColor },
  } = useTheme();
  const [swiped, setSwiped] = useState(false);
  const [swipePast, setSwipePast] = useState(200);
  const pan = useRef(new Animated.ValueXY()).current;
  const onMoveShouldSetPanResponder = useCallback(() => {
    isSwiping(true);
    return true;
  }, [isSwiping]);
  const onPanResponderMove = useRef(
    Animated.event([null, { dx: pan.x }], animConfig),
  ).current;
  const onPanResponderRelease = useCallback(() => {
    isSwiping(false);
    Animated.spring(pan, {
      ...animConfig,
      toValue: { x: 0, y: 0 },
    }).start();
  }, [isSwiping, pan]);
  const {
    panHandlers: {
      onMoveShouldSetResponder,
      onResponderMove,
      onResponderRelease,
    },
  } = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder,
      onPanResponderMove,
      onPanResponderRelease,
    }),
  ).current;
  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { x },
      },
    }: LayoutChangeEvent) => setSwipePast(x - 30),
    [],
  );
  useEffect(() => {
    pan.addListener(({ x }) => {
      if (x > swipePast) {
        setSwiped(true);
      }
    });
    return () => pan.removeAllListeners();
  }, [swipePast, pan]);
  useEffect(() => {
    async function submitIt() {
      handleDone();
      setSwiped(false);
    }
    if (swiped === false) return;
    submitIt();
  }, [swiped, onPanResponderRelease, handleDone]);
  return (
    <View style={styles.container}>
      <View style={[styles.slide, { backgroundColor }]} />
      <Animated.View
        onMoveShouldSetResponder={onMoveShouldSetResponder}
        onResponderMove={onResponderMove}
        onResponderRelease={onResponderRelease}
        style={[styles.animation, { transform: [{ translateX: pan.x }] }]}
      >
        <Avatar.Text size={60} label={emoji} labelStyle={styles.emoji} />
      </Animated.View>
      <Goal groupId={groupId} onLayout={onLayout} />
    </View>
  );
}
