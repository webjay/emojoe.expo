import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, LayoutChangeEvent, StyleSheet } from 'react-native';
import { useTheme, Avatar } from 'react-native-paper';

type Props = {
  groupId: string;
  onLayout: (event: LayoutChangeEvent) => void;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default function Goal({ groupId, onLayout }: Props) {
  const { navigate } = useNavigation();
  const {
    colors: { surfaceVariant: backgroundColor },
  } = useTheme();
  const onPress = useCallback(() => {
    navigate('GroupActivity', { groupId });
  }, [groupId, navigate]);
  return (
    <Pressable onPress={onPress}>
      <Avatar.Text
        size={40}
        label=""
        style={[styles.container, { backgroundColor }]}
        onLayout={onLayout}
      />
    </Pressable>
  );
}
