import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.form`
  width: 420px;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

interface IFormProps {
  children?: React.ReactElement[] | React.ReactElement;
}

const Form = ({ children }: IFormProps) => (
  <Wrapper>
    <Container>
      {children}
    </Container>
  </Wrapper>
);

export default Form;
