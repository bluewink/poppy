import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import NextButton from '../components/NextButton';

export default function Confirm() {
  return (
    <Wrapper>
      <Header isAddress={false} />
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
      {/* <EmptyBox /> */}
      <NB>설문 진행하기</NB>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
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

const NB = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;

  border: 0;
  outline: 0;
  padding: 11px 100px 9px 91px;
  box-shadow: 0 4px 10px 0 rgba(191, 170, 114, 0.35);
  background-color: #f38f71;

  // Text
  // font-family: DMSans;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
