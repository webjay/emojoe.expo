import React, { useMemo } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

function ScrollViewRefresh({
  children, loading, refetch, scrollEnabled,
}): JSX.Element {
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
