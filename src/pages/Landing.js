import React, { useState } from "react";
import styled, { css } from "styled-components";

import Header from "../components/Header";
import { Poppy, LandingPageBackgroundPng } from "../resources/images";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Wrapper>
      <Header isAddress={false} />
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
        오랜 시간 혼자 집을 지키는 우리<br></br>
        강아지에게 이웃 친구를 만들어주세요.
        <br /> <br />
        이웃집 뽀삐에서 <br />
        믿을 수 있는 이웃 반려인에게 <br />
        가격 부담없이 강아지를 맡길 수 있어요.
      </LandingPageDescription>

      <LandingPageBackground src={LandingPageBackgroundPng} />
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

      <NextButtonBox>
        <Link to="/address">
          <NextButton>돌보미 찾기</NextButton>
        </Link>
      </NextButtonBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 1000px;
`;

const LandingPageHeader = styled.div`
  position: absolute;
  margin-left: 10px;
  width: 100%;
  height: 68.36px;
  /* left: 15px; */
  top: 122.08px;

  font-family: "Noto Sans KR";
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: -1px;
  text-align: left;

  ${(props) =>
    props.first &&
    css`
      position: absolute;
      width: 100%;
      height: 72px;
      /* left: 16px; */
      top: 333.75px;
    `}
  ${(props) =>
    props.second &&
    css`
      top: 766.44px;
    `}
`;
const LandingPageTitle = styled.div`
  margin-left: 10px;

  position: absolute;
  width: 169px;
  height: 55px;
  /* left: 14px; */
  top: 197px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  /* or 118% */

  letter-spacing: -1px;

  color: #fa8865;

  ${(props) =>
    props.first &&
    css`
      top: 297.3px;
      font-family: Work Sans;
    `}
  ${(props) =>
    props.second &&
    css`
      top: 724.37px;
      font-family: Work Sans;
    `}
`;
const PoppyImg = styled.img`
  margin-left: 10px;
  position: absolute;
  width: 37.33px;
  height: 63px;
  left: 175px;
  top: 176px;
`;

const LandingPageDescription = styled.div`
  margin-left: 10px;
  position: absolute;
  width: 100%;
  height: 303.99px;
  /* left: 9px; */
  top: 408px;

  font-family: "Noto Sans KR";
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
      top: 841px;
    `}
`;
const LandingPageBackground = styled.img`
  position: absolute;
  width: 100%;

  margin-left: 0px;
  /* left: 0px; */
  top: 358px;
  z-index: -10;
`;

const NextButton = styled.button`
  width: 150.2px;
  height: 46.9px;

  text-decoration: none;

  outline: none;
  border: none;

  padding: 0 25px;

  font-family: DMSans;
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
const NextButtonBox = styled.div`
  position: relative;
  top: 100%;
  display: flex;
  justify-content: center;
`;
