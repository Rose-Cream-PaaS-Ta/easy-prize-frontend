import { useRouter } from 'next/router';
import * as React from 'react';

import { LargeButton } from '../src/components/Button';
import { StyledField } from '../src/components/Field';
import Form from '../src/components/Form';
import Layout from '../src/components/Layout';

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <Form title="돌아오신 걸 환영해요!">
        <StyledField
          label="이메일"
          placeholder="이메일을 입력하세요."
        />
        <StyledField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
        <LargeButton>
          로그인
        </LargeButton>
        <LargeButton
          light={true}
          onClick={() => router.push('/join')}
        >
          회원가입
        </LargeButton>
      </Form>
    </Layout>
  );
};
