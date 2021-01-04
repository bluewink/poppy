import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import { confirmIc1, confirmIc } from '../resources/images';

export default function Confirm({ location }) {
  const { name, date, oneDay, diffDate, cost } = location.state;
  console.log('diff Date', diffDate);

  const numberWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

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
            {/* <Icon src={confirmIc1} /> */}
            <InformationTitle>예약 정보</InformationTitle>
            <InformationGroup>
              <InformationSubTitle>
                돌봄 이웃 : <Lighter>{name}</Lighter>
              </InformationSubTitle>
              <InformationSubTitle>
                이용할 서비스 : <Lighter>소형견 / {oneDay ? ' 당일케어' : diffDate + ' 박돌봄'}</Lighter>
              </InformationSubTitle>
              <InformationSubTitle>
                날짜 :{' '}
                <Lighter>
                  <WorkSans>{date}</WorkSans>
                </Lighter>
              </InformationSubTitle>
              <InformationSubTitle>
                요금 :{' '}
                <Lighter>
                  <WorkSans>{numberWithCommas(cost)}</WorkSans>원
                </Lighter>
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
  margin-top: 14px;
`;

const InformationTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  /* or 100% */

  letter-spacing: -1px;

  color: #131313;
`;

const InformationSubTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;

  letter-spacing: -1px;

  color: #505050;
`;

const Lighter = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const WorkSans = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const ReservationBox = styled.div`
  margin: 26px 16px 0 18px;
  max-width: 341px;
  height: 197px;
  border-radius: 23px;
  box-shadow: 0 0 11px 0 rgba(192, 146, 113, 0.24);
  background-color: #ffffff;
  
  background-image: URL(https://user-images.githubusercontent.com/56102421/103185790-4963bc00-4901-11eb-81b2-98c3cf890c04.png); 
`;

const PaddingBox = styled.div`
  padding: 29.81px 0 33px 25.31px;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const PageTitle = styled.div`
  margin: 0 16px;
  margin-top: 3px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31.5px;

  letter-spacing: -1px;

  color: #131313;
`;

const NextBox = styled.div`
  position: absolute;
  bottom: 6.7%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const WarnLabel = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #cbc9c9;
`;

const NextButton = styled.button`
  margin: 7.21px auto;
  text-decoration: none;

  padding: 0 25px;

  width: 148px;

  border: 1px solid #ff1d1d;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;

  font-stretch: normal;
  font-style: normal;

  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  border-radius: 5px;
  box-shadow: 0 4px 10px 0 rgba(191, 170, 114, 0.35);
  background-color: #ff9777;

  outline: none;
  border: none;
`;
