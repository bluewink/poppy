import React, { useState } from 'react';
import styled from 'styled-components';

import NextButton from '../components/NextButton';

export default function Confirm() {
  return (
    <Wrapper>
      <Header></Header>
      <PageTitle>
        예약해주셔서 <br />
        감사합니다!
      </PageTitle>
      <SubLabel>
        추가적으로 <Bold>1분</Bold>안에 끝나는 <br />
        <Bold>설문조사</Bold>를 진행해주시면 <br />
        추첨을 통하여 <br />
        <Bold>기프티콘</Bold>을 선물로 드립니다.
      </SubLabel>
      <EmptyBox />
      <NextButton y={1000} name="설문 진행하기" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;

  background-color: #f38f71;
`;

const PageTitle = styled.div`
  margin: 24px 16px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;

  letter-spacing: -1px;

  color: #131313;
`;

const SubLabel = styled.div`
  margin: 42px 20px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 23px;
  letter-spacing: 0.15px;

  color: #393939;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const EmptyBox = styled.div`
  height: 400px;
`;
