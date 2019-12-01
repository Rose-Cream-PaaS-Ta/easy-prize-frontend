import { Grommet } from 'grommet';
import React from 'react';
import styled from 'styled-components';

import '../global.scss';

const theme = {
  global: {
    colors: {
      brand: '#4263eb',
      focus: '#364fc7',
    },
  },
};

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

interface ILayoutProps {
  children?: React.ReactElement[] | React.ReactElement;
}

export default class Layout extends React.Component<ILayoutProps> {
  public render() {
    const { children } = this.props;
    return (
      <Grommet theme={theme}>
        <Container>
          {children}
        </Container>
      </Grommet>
    );
  }
}
