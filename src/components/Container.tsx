import React from 'react';
import { StyleSheet, Platform, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Surface } from 'react-native-paper';

type Props = {
  children: JSX.Element | JSX.Element[];
  safeArea?: boolean;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  surface: {
    flex: 1,
    width: '100%',
    maxWidth: 800,
    marginVertical: 10,
    marginHorizontal: 'auto',
  },
});

function Container({ children, safeArea }: Props) {
  if (Platform.OS !== 'web') {
    if (safeArea) {
      return (
        <SafeAreaView edges={['top']} style={styles.container}>
          {children}
        </SafeAreaView>
      );
    }
    return <View style={styles.container}>{children}</View>;
  }
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Surface style={styles.surface}>{children}</Surface>
    </ScrollView>
  );
}

Container.defaultProps = {
  safeArea: true,
};

export default Container;
