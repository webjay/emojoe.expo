/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType, ComponentProps } from 'react';
import Container from './Container';

function wrapContainer<P extends {}>(Component: ComponentType<P>) {
  function ComponentInContainer(props: ComponentProps<typeof Component>) {
    return (
      <Container>
        <Component {...(props as P)} />
      </Container>
    );
  }
  return ComponentInContainer;
}

export default wrapContainer;
