import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useTheme, Text, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 40,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

type Props = {
  handleSignIn: () => void;
};

export default function Signin({ handleSignIn }: Props) {
  const {
    colors: { background: backgroundColor },
  } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Text variant="headlineMedium" numberOfLines={1} adjustsFontSizeToFit>
          You&apos;re here to build a habit?
        </Text>
        <View style={styles.buttons}>
          <Pressable onPress={handleSignIn}>
            <Button mode="contained">Sign in</Button>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
