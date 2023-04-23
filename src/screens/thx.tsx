import React, { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Container from '@src/components/Container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});

export default function ThxScreen() {
  const { replace: redirect } = useRouter();
  const onPress = useCallback(() => {
    redirect('/');
  }, [redirect]);
  return (
    <Container>
      <View style={styles.container}>
        <Text variant="displayLarge">Thank you</Text>
        <Button mode="outlined" onPress={onPress}>
          Anytime
        </Button>
      </View>
    </Container>
  );
}
