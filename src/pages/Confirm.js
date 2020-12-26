import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

import { confirmIc1 } from '../resources/images';
import NextButton from '../components/NextButton';
export default function Confirm() {
  return (
    <Wrapper>
      <>
        <Header isAddress={false} />
        <PageTitle>
          예약을 <br />
          확정해주세요!
        </PageTitle>
        <ReservationBox>
          <Icon src={confirmIc1} />
          <InformationTitle>예약 정보</InformationTitle>
          <InformationGroup>
            <InformationSubTitle>
              돌봄 이웃: <Lighter>홍길동</Lighter>
            </InformationSubTitle>
            <InformationSubTitle>
              이용할 서비스: <Lighter>당일 케어</Lighter>
            </InformationSubTitle>
            <InformationSubTitle>
              날짜: <Lighter>2020년 12월 21일 (당일)</Lighter>
            </InformationSubTitle>
            <InformationSubTitle>
              요금: <Lighter>20,000원</Lighter>
            </InformationSubTitle>
          </InformationGroup>
        </ReservationBox>
        <WarnLabel>예약 정보를 다시 한 번 확인해 주세요.</WarnLabel>
      </>
      <NB>예약 확정하기</NB>
      {/* <NextButton y={1000} name="에약 확정하기" /> */}
    </Wrapper>
  );
}

const InformationGroup = styled.div`
  margin-top: 20px;
`;

const InformationTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #131313;
`;

const InformationSubTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  letter-spacing: -1px;

  color: #505050;
`;

const Lighter = styled.span`
  color: #838383;
`;

const Icon = styled.img``;

const ReservationBox = styled.div`
  margin: 50px 20px 0 20px;
  padding: 24px;

  border-radius: 23px;
  box-shadow: 0 0 11px 0 rgba(192, 146, 113, 0.24);
  background-color: #ffffff;
`;

const WarnLabel = styled.div`
  margin: 0 auto;
  margin-top: 120px;

  // font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -1px;

  color: #cbc9c9;
`;
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
