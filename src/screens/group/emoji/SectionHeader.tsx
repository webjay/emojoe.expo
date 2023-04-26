import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

type Props = {
  section: {
    title: string;
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    textTransform: 'capitalize',
  },
});

function SectionHeader({ section: { title } }: Props) {
  const {
    colors: { secondaryContainer: backgroundColor },
  } = useTheme();
  if (title === '') return null;
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text variant="titleMedium" style={styles.text}>
        {title}
      </Text>
    </View>
  );
}

export default memo(SectionHeader);
