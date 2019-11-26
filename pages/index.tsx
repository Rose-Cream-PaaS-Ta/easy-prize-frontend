import * as React from 'react';
import styled from 'styled-components';

import Card from '../src/components/Card';
import Header from '../src/components/Header';
import Layout from '../src/components/Layout';
import Section from '../src/components/Section';

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
  { title: '상장 수여자', desc: '상장을 발급하고 수여하세요.' },
  { title: '상장 수상자', desc: '수상 내역을 관리할 수 있습니다.' },
  { title: '상장 조회자', desc: '수상자의 토큰으로\n수상 실적 조회가 가능합니다.' },
];

export default () => (
  <Layout>
    <Section>
      <Header
        title={'투명한 상장,\n이지프라이즈'}
        desc={'이더리움 기반의 블록체인 네트워크를 이용한\n상장 수여 및 수상 내역 관리 서비스'}
      />
    </Section>
    <Section>
      <Content>
        <ContentTitle>지금 시작해 보세요.</ContentTitle>
        <CardList>
          {cardData.map(({ title, desc }, key) => {
            return <Card key={key} title={title} desc={desc} />;
          })}
        </CardList>
      </Content>
    </Section>
  </Layout>
);
