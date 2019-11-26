import * as React from 'react';
import styled from 'styled-components';

import newlineToBreak from '../utils/newlineToBreak';

const Container = styled.div``;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  line-height: 1.3;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  font-size: 1.3rem;
`;

interface HeaderProps {
  title: string;
  desc: string;
}

export default class Header extends React.Component<HeaderProps> {
  public render() {
    const { title, desc } = this.props;
    return (
      <Container>
        <Title>{newlineToBreak(title)}</Title>
        <Description>{newlineToBreak(desc)}</Description>
      </Container>
    );
  }
}
