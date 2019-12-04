import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Container = styled.form`
  width: 420px;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Image = styled.img`
  width: 212px;
  height: 212px;
  display: flex;
  margin: 2rem auto;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  color: black;
  margin-top: 0;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

interface IFormProps {
  title?: string;
  image?: string;
  children?: React.ReactElement[] | React.ReactElement;
}

const Form = ({ title, image, children }: IFormProps) => {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        {(() => {
          if (image) {
            const img = require(`../../assets/${image}`);
            return <Image src={img} />;
          }
        })()}
        {children}
      </Container>
    </Wrapper>
  );
};

export default Form;
