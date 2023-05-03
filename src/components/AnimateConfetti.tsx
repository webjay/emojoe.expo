import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../../assets/143005-bubble-burst-confetti.json';

const styles = StyleSheet.create({
  animation: {
    position: 'absolute',
  },
});

export default function AnimateConfetti() {
  if (Platform.OS === 'web' || Platform.OS === 'android') return null;
  return (
    <LottieView
      source={animation}
      autoPlay
      loop={false}
      style={styles.animation}
    />
  );
}
