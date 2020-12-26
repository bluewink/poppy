import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import { survey_poppy } from '../resources/images';

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
      <PoppyImage src={survey_poppy} />
      <NextBox>
        <Link to="/">
          <NextButton>설문하기</NextButton>
        </Link>
      </NextBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

const PageTitle = styled.div`
  margin: 24px 16px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: -1px;
  text-align: left;
  color: #131313;
`;

const SubLabel = styled.div`
  margin: 42px 20px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.15px;
  text-align: left;
  color: #393939;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const PoppyImage = styled.img`
  position: absolute;
  bottom: 85px;
  right: 16px;
`;

const NextBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.button`
  margin: 10px auto;
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
