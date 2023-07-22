import React, { useCallback, memo } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { useTheme, Avatar } from 'react-native-paper';

type Props = {
  groupId: string;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

function Goal({ groupId }: Props) {
  const { push: navigate } = useRouter();
  const {
    colors: { surfaceVariant: backgroundColor },
  } = useTheme();
  const onPress = useCallback(() => {
    navigate(`/group/${groupId}/activities`);
  }, [groupId, navigate]);
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Avatar.Text size={40} label="" style={{ backgroundColor }} />
    </Pressable>
  );
}

export default memo(Goal);
