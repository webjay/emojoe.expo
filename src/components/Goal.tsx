import React, { useCallback } from 'react';
import { useRouter } from 'expo-router';
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
  const { push: navigate } = useRouter();
  const {
    colors: { surfaceVariant: backgroundColor },
  } = useTheme();
  const onPress = useCallback(() => {
    navigate(`/group/${groupId}/activities`);
  }, [groupId, navigate]);
  return (
    <Pressable onPress={onPress} style={styles.container} onLayout={onLayout}>
      <Avatar.Text size={40} label="" style={{ backgroundColor }} />
    </Pressable>
  );
}
