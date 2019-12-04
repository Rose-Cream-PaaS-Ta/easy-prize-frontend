import * as React from 'react';

import { LargeButton } from '../../src/components/Button';
import { StyledField } from '../../src/components/Field';
import Form from '../../src/components/Form';
import Layout from '../../src/components/Layout';

export default class TokenLogin extends React.Component {

  public render() {
    return (
      <Layout>
        <Form
          title="토큰을 입력해주세요!"
          image="auth/token.svg"
        >
          <StyledField
            label="수상 실적 조회를 위한 토큰"
            placeholder="발급받은 토큰을 입력하세요."
          />
          <LargeButton>인증하기</LargeButton>
        </Form>
      </Layout>
    );
  }
}
