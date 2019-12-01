import * as React from 'react';
import styled from 'styled-components';

import newlineToBreak from '../utils/newlineToBreak';

const Container = styled.div`
  cursor: pointer;
  box-shadow: 0px 10px 36px -16px rgba(0,0,0,0.27);
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  height: 25rem;

  margin-bottom: 2rem;

  @media screen and (min-width: 769px) {
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: 3.5rem;
    }
  }
`;

const Info = styled.div`
  padding: 1.3rem 1.5rem;
  text-align: right;

  @media screen and (min-width: 769px) {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  line-height: 1.5;
`;

const Description = styled.span`
  font-size: 1.1rem;
  word-break: keep-all;
`;

interface ICardProps {
  title: string;
  desc: string;
}

export default class Card extends React.Component<ICardProps> {
  public render() {
    const { title, desc } = this.props;
    return (
      <Container>
        <Info>
          <Title>{title}</Title>
          <Description>{newlineToBreak(desc)}</Description>
        </Info>
      </Container>
    );
  }
}
