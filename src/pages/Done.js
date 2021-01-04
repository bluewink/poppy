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
      <SubLabel1>
        추가적으로 <Bold>1분</Bold>안에 끝나는 <br />
        <Bold>설문조사</Bold>를 진행해주시면 <br />
      </SubLabel1>
      <SubLabel2>
        추첨을 통하여 <br />
        <Bold>기프티콘</Bold>을 선물로 드립니다.
      </SubLabel2>
      <PoppyImage src={survey_poppy} />
      <NextBox>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeo49pXpxFmNd7lx2wSVk1RHdFieODjTyGLdRpyYBvGIehKAA/viewform?usp=sf_link"
        >
          <NextButton>설문하기</NextButton>
        </a>
      </NextBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

const PageTitle = styled.div`
  margin: 3px 10px 0 16px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31.5px;

  letter-spacing: -1px;

  color: #131313;
`;

const SubLabel1 = styled.div`
  margin: 21px 100px 0 16px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: 0.15px;

  color: #393939;
`;

const SubLabel2 = styled.div`
  margin: 10px 100px 0 16px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: 0.15px;

  color: #393939;
`;

const Bold = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: 0.15px;

  color: #393939;
`;

const PoppyImage = styled.img`
  position: absolute;
  bottom: 152px;
  right: 16px;
`;

const NextBox = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.button`
  margin: 10px auto;
  text-decoration: none;

  width: 148px;

  outline: none;
  border: none;

  padding: 0 25px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  /* or 240% */

  color: #ffffff;

  background: #ff9777;
  box-shadow: 0px 4px 10px rgba(191, 170, 114, 0.35);
  border-radius: 5px;
`;
