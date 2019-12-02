import * as React from 'react';
import styled from 'styled-components';

import newlineToBreak from '../utils/newlineToBreak';

const image = require('../../assets/background-1.png');

const Container = styled.div`
  cursor: pointer;
  box-shadow: 0px 10px 36px -16px rgba(0,0,0,0.27);
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  height: 25rem;
  margin-bottom: 2rem;
  border-radius: 4px;
  background-image: url(${image});
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;

  &:not(:last-child) {
    margin-right: 3.5rem;
  }

  @media (max-width: 769px) {
    width: 100%;
    height: unset;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
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

  @media (max-width: 865px) {
    font-size: 1.5rem;
  }

  @media (max-width: 769px) {
    font-size: 1.7rem;
  }
`;

const Description = styled.span`
  font-size: 1.1rem;
  word-break: keep-all;
`;

interface ICardProps {
  title: string;
  desc: string;
  image: string;
  idx?: number;
}

export default class Card extends React.Component<ICardProps> {
  public render() {
    const { title, desc, image, idx = 0 } = this.props;
    const img = require(`../../assets/${image}`);

    const Image = styled.img`
      width: 100%;
      position: absolute;
      top: 0;
      margin-top: 1.5rem;

      ${idx !== 2 && `
        height: 60%;
      `}

      @media (max-width: 769px) {
        margin-top: 0;
        width: 8rem;
        height: 100%;
        margin-left: 0.5rem;
        z-index: -1;
        filter: opacity(0.3);
      }
    `;

    return (
      <Container>
        <Image src={img} key={idx} />
        <Info>
          <Title>{title}</Title>
          <Description>{newlineToBreak(desc)}</Description>
        </Info>
      </Container>
    );
  }
}
