import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

type Props = {
  flex: number;
};

export default function AnimatedFlexView({ flex }: Props) {
  const animatedFlex = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(animatedFlex, {
      useNativeDriver: false,
      delay: 100,
      toValue: flex,
    }).start();
  }, [animatedFlex, flex]);
  return <Animated.View style={{ flex: animatedFlex }} />;
}
