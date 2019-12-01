import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0rem 1.5rem;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`;

interface ISectionProps {
  children?: React.ReactElement[] | React.ReactElement;
}

export default class Section extends React.Component<ISectionProps> {
  public render() {
    const { children } = this.props;
    return (
      <Container>
        {children}
      </Container>
    );
  }
}
