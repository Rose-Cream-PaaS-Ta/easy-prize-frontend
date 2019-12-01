import * as React from 'react';
import styled from 'styled-components';

import newlineToBreak from '../utils/newlineToBreak';

const Container = styled.div`
  padding: 0 3rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  line-height: 1.3;
  font-weight: 900;

  @media (max-width: 458px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

interface IHeaderProps {
  title: string;
  desc: string;
}

export default class Header extends React.Component<IHeaderProps> {
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
