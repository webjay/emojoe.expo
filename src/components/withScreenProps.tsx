/* eslint-disable react/jsx-props-no-spreading */
import type { ComponentType, ComponentProps } from 'react';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';

type Props = {
  route: {
    params: ReturnType<typeof useLocalSearchParams>;
  };
};

function withScreenProps<P>(
  Component: ComponentType<P & Props>,
  title?: string,
) {
  function ComponentWithScreenProps(props: ComponentProps<typeof Component>) {
    const params = useLocalSearchParams();
    return (
      <>
        {title && <Stack.Screen options={{ title: `${title} | Emojoe` }} />}
        <Component route={{ params }} {...(props as P)} />
      </>
    );
  }
  return ComponentWithScreenProps;
}

export default withScreenProps;
