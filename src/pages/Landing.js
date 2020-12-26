import React from 'react';
import styled, { css } from 'styled-components';

import Header from '../components/Header';
import { LandingPageVector, PoppyLogoPng, Poppy, LandingPageDogPng2 } from '../resources/images';

export default function Landing() {
  return (
    <>
      <Header isAddress={false} />
      <VectorBackground src={LandingPageVector}></VectorBackground> <PoppyLogo src={PoppyLogoPng} />
      <LandingPageHeader>
        우리 동네 반려견
        <br />
        돌봄 품앗이 플랫폼,
      </LandingPageHeader>
      <LandingPageTitle>이웃집 뽀삐</LandingPageTitle>
      <PoppyImg src={Poppy} />
      <LandingPageTitle first>1.</LandingPageTitle>
      <LandingPageHeader first>
        가장 가까운 이웃 반려인에게 <br />
        도움을 요청해요!
      </LandingPageHeader>
      <LandingPageDescription>
        오랜 시간 혼자 집을 지키는 우리 강아지에게 이웃 친구를 만들어주세요.
        <br /> <br />
        이웃집 뽀삐에서 <br />
        믿을 수 있는 이웃 반려인에게 <br />
        가격 부담없이 강아지를 맡길 수 있어요.
      </LandingPageDescription>
      <LandingPageTitle second>2.</LandingPageTitle>
      <LandingPageHeader second>
        혼자 외롭게 집을 지키는 <br />
        이웃집 강아지를 돌봐주세요!
      </LandingPageHeader>
      <LandingPageDescription second>
        이웃집 강아지를 부담없이 돌봐주며 <br />
        우리 강아지에게도 친구를 만들어주세요.
        <br />
        <br />
        명예 이웃(가명)이 되면
        <br /> 이웃집 뽀삐가 특별한 선물을 드려요.
      </LandingPageDescription>
      <LandingPageDog2 src={LandingPageDogPng2} />
    </>
  );
}

const VectorBackground = styled.img`
  //"../resources/images/LandingPageVector.png"

  /* position: relative;
  width: 375px;
  height: 644px;
  z-index: -1; */
  width: 100%;
`;
const PoppyLogo = styled.img`
  position: absolute;
  width: 105px;
  height: 42px;
  left: -2px;
  top: 122px;
`;
const LandingPageHeader = styled.div`
  position: absolute;
  width: 324px;
  height: 68.36px;
  left: 15px;
  top: 152.08px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  /* or 135% */

  letter-spacing: -1px;

  color: #000000;

  ${(props) =>
    props.first &&
    css`
      position: absolute;
      width: 248px;
      height: 72px;
      left: 16px;
      top: 573.75px;
    `}
  ${(props) =>
    props.second &&
    css`
      top: 1104.44px;
    `}
`;
const LandingPageTitle = styled.div`
  position: absolute;
  width: 169px;
  height: 55px;
  left: 14px;
  top: 227px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  /* or 118% */

  letter-spacing: -1px;

  color: #fa8865;

  ${(props) =>
    props.first &&
    css`
      top: 526.3px;
    `}
  ${(props) =>
    props.second &&
    css`
      top: 1051.37px;
    `}
`;
const PoppyImg = styled.img`
  position: absolute;
  width: 37.33px;
  height: 63px;
  left: 189px;
  top: 206px;
`;

const LandingPageDescription = styled.div`
  position: absolute;
  width: 335px;
  height: 303.99px;
  left: 9px;
  top: 675px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  /* or 164% */

  letter-spacing: -1px;

  color: #505050;

  ${(props) =>
    props.second &&
    css`
      top: 1221.61px;
    `}
`;

const LandingPageDog2 = styled.img`
  position: absolute;
  width: 100%;
  height: 565px;
  left: 0px;
  top: 1050px;
  z-index: -1;
`;
