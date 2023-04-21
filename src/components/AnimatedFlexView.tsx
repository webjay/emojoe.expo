import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  flex: number;
};

export default function AnimatedFlexView({ flex }: Props) {
  const flexShared = useSharedValue(0);
  flexShared.value = withDelay(100, withTiming(flex));
  const animatedStyle = useAnimatedStyle(() => ({ flex: flexShared.value }));
  return <Animated.View style={animatedStyle} />;
}
