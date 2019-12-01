import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';

import { LargeButton } from '../src/components/Button';
import Field from '../src/components/Field';
import Form from '../src/components/Form';
import Layout from '../src/components/Layout';

const StyledField = styled(props => <Field {...props} />)`
  margin-bottom: 1.2rem;
`;

const StyledLargeButton = styled(LargeButton)`
  margin-top: 0.5rem;
`;

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <Form>
        <StyledField
          label="이메일"
          placeholder="이메일을 입력하세요."
        />
        <StyledField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
        <StyledLargeButton>
          로그인
        </StyledLargeButton>
        <StyledLargeButton
          light={true}
          onClick={() => router.push('/join')}
        >
          회원가입
        </StyledLargeButton>
      </Form>
    </Layout>
  );
};
