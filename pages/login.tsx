import { Button, FormField, TextInput } from 'grommet';
import * as React from 'react';
import styled from 'styled-components';

import Layout from '../src/components/Layout';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 420px;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Field = styled(props => <FormField {...props} />)`
  margin-bottom: 1.2rem;
`;

const Submit = styled(props => <Button {...props} />)`
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 22px;
  margin-top: 0.5rem;
`;

export default () => {
  return (
    <Layout>
      <Container>
        <Form>
          <Field label="이메일">
            <TextInput placeholder="이메일을 입력하세요." />
          </Field>
          <Field label="비밀번호">
            <TextInput type="password" placeholder="비밀번호를 입력하세요." />
          </Field>
          <Submit label="로그인" primary={true} />
        </Form>
      </Container>
    </Layout>
  );
};
