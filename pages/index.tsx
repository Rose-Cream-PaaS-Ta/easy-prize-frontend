import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';

import Button from '../src/components/Button';
import Card from '../src/components/Card';
import Header from '../src/components/Header';
import Layout from '../src/components/Layout';
import Section from '../src/components/Section';

const ButtonRow = styled.div`
  display: flex;
  position: absolute;
  margin: 1.5rem;
  top: 0;
  right: 0;

  button:first-child {
    margin-right: 0.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: 769px) {
    flex-direction: row;
    padding: 0 3rem;
  }
`;

const ContentTitle = styled.span`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  letter-spacing: 3px;
`;

const cardData = [
  { title: '상장 수여자', desc: '상장을 발급하고 수여하세요.', image: 'cards/awardee.svg' },
  { title: '상장 수상자', desc: '수상 내역을 관리할 수 있습니다.', image: 'cards/recipients.svg' },
  { title: '상장 조회자', desc: '수상자의 실적을 조회합니다.', image: 'cards/inquiry.svg' },
];

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <Section>
        <ButtonRow>
          <Button
            onClick={() => router.push('/join')}
          >
            회원가입
          </Button>
          <Button
            light={true}
            onClick={() => router.push('/login')}
          >
            로그인
          </Button>
        </ButtonRow>
        <Header
          title={'투명한 상장,\n이지프라이즈'}
          desc={'이더리움 기반의 블록체인 네트워크를 이용한\n상장 수여 및 수상 내역 관리 서비스'}
        />
      </Section>
      <Section>
        <Content>
          <ContentTitle>지금 시작해 보세요.</ContentTitle>
          <CardList>
            {cardData.map(({ title, desc, image }, key) => {
              return <Card key={key} title={title} desc={desc} image={image} />;
            })}
          </CardList>
        </Content>
      </Section>
    </Layout>
  );
};
