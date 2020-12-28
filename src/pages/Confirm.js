import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import { confirmIc1, confirmIc } from '../resources/images';

export default function Confirm({ location }) {
  const { name, date, oneDay, diffDate, cost } = location.state;

  return (
    <Wrapper>
      <>
        <Header isAddress={false} />
        <PageTitle>
          예약을 <br />
          확정해주세요!
        </PageTitle>
        <ReservationBox image={confirmIc}>
          <PaddingBox>
            <Icon src={confirmIc1} />
            <InformationTitle>예약 정보</InformationTitle>
            <InformationGroup>
              <InformationSubTitle>
                돌봄 이웃: <Lighter>{name}</Lighter>
              </InformationSubTitle>
              <InformationSubTitle>
                이용할 서비스: <Lighter>소형견 /{oneDay ? ' 당일케어' : diffDate + ' 박돌봄'}</Lighter>
              </InformationSubTitle>
              <InformationSubTitle>
                날짜: <Lighter>{date} </Lighter>
              </InformationSubTitle>
              <InformationSubTitle>
                요금: <Lighter>{cost}</Lighter>
              </InformationSubTitle>
            </InformationGroup>
          </PaddingBox>
        </ReservationBox>

        <NextBox>
          <WarnLabel>예약 정보를 다시 한 번 확인해 주세요.</WarnLabel>
          <Link to="/survey">
            <NextButton>예약 확정</NextButton>
          </Link>
        </NextBox>
      </>
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
  margin: 50px auto 0 auto;
  max-width: 341px;
  max-height: 197px;
  border-radius: 23px;
  box-shadow: 0 0 11px 0 rgba(192, 146, 113, 0.24);
  background-color: #ffffff;
  
  background-image: URL(https://user-images.githubusercontent.com/56102421/103185790-4963bc00-4901-11eb-81b2-98c3cf890c04.png); 
`;

const PaddingBox = styled.div`
  padding: 24px;
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

const NextBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const WarnLabel = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -1px;

  color: #cbc9c9;
`;

const NextButton = styled.button`
  margin: 9px auto;
  text-decoration: none;

  outline: none;
  border: none;

  padding: 0 25px;

  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  border-radius: 5px;
  box-shadow: 0 4px 10px 0 rgba(191, 170, 114, 0.35);
  background-color: #ff9777;
`;
