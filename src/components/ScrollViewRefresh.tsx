import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

type Props = {
  children: ReactNode
  loading: boolean
  refetch: () => void
  scrollEnabled?: boolean
};

function ScrollViewRefresh({
  children, loading, refetch, scrollEnabled,
}: Props): JSX.Element {
  const refreshControl = useMemo(
    () => <RefreshControl refreshing={loading} onRefresh={refetch} />,
    [loading, refetch],
  );
  return (
    <ScrollView refreshControl={refreshControl} scrollEnabled={scrollEnabled}>
      {children}
    </ScrollView>
  );
}

ScrollViewRefresh.defaultProps = {
  scrollEnabled: true,
};

export default ScrollViewRefresh;
