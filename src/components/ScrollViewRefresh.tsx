import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';

type Props = {
  children: ReactNode;
  loading: boolean;
  refetch: () => void;
  scrollEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

function ScrollViewRefresh({
  children,
  loading,
  refetch,
  scrollEnabled,
  style,
}: Props) {
  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
      style={style}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }
    >
      {children}
    </ScrollView>
  );
}

ScrollViewRefresh.defaultProps = {
  scrollEnabled: true,
  style: undefined,
};

export default ScrollViewRefresh;
