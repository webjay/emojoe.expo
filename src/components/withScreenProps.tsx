/* eslint-disable react/jsx-props-no-spreading */
import type { ComponentType, ComponentProps } from 'react';
import React from 'react';
import { useSearchParams } from 'expo-router';

type Props = {
  route: {
    params: ReturnType<typeof useSearchParams>;
  };
};

function withScreenProps<P>(Component: ComponentType<P & Props>) {
  function ComponentWithScreenProps(props: ComponentProps<typeof Component>) {
    const params = useSearchParams();
    return <Component route={{ params }} {...(props as P)} />;
  }
  return ComponentWithScreenProps;
}

export default withScreenProps;
