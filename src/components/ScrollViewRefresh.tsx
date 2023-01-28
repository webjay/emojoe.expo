import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

type Props = {
  children: ReactNode
  loading: boolean
  refetch: () => void
  scrollEnabled?: boolean
  style?: StyleProp<ViewStyle>
};

function ScrollViewRefresh({
  children, loading, refetch, scrollEnabled, style,
}: Props): JSX.Element {
  const refreshControl = useMemo(
    () => <RefreshControl refreshing={loading} onRefresh={refetch} />,
    [loading, refetch],
  );
  return (
    <ScrollView refreshControl={refreshControl} scrollEnabled={scrollEnabled} style={style}>
      {children}
    </ScrollView>
  );
}

ScrollViewRefresh.defaultProps = {
  scrollEnabled: true,
  style: undefined,
};

export default ScrollViewRefresh;
