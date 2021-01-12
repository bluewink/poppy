import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { survey_poppy } from "../resources/images";

export default function Confirm() {
  return (
    <>
      <NavBar backTo titleName="회원가입" />
      <Wrapper>
        <PageTitle>
          회원가입이 <br />
          완료되었습니다!
        </PageTitle>
        <SubLabel1>
          지금 바로 우리 강아지를
          <br />
          돌봐줄 이웃을 찾아보세요!
          <br />
        </SubLabel1>

        <PoppyImage src={survey_poppy} />
        <NextBox>
          <Link to="/">
            <NextButton style={{ marginRight: "14px" }}>홈으로</NextButton>
          </Link>
          <Link to="/login">
            <NextButton>로그인</NextButton>
          </Link>
        </NextBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  margin-left: 17px;
`;

const PageTitle = styled.div`
  margin-top: 32px;
  height: 61px;

  font-family: "Noto Sans KR";
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: -1px;
  text-align: left;
  color: black;
`;

const SubLabel1 = styled.div`
  margin-top: 36px;

  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;

const SubLabel2 = styled.div`
  margin: 10px 100px 0 16px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: 0.15px;

  color: #393939;
`;

const Bold = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: 0.15px;

  color: #393939;
`;

const PoppyImage = styled.img`
  /* position: absolute; */
  width: 168px;
  height: 210px;
  margin-top: 87px;
  margin-left: 174px;
  /* bottom: 100px; */
  right: 16px;
`;

const NextBox = styled.div`
  /* position: absolute; */
  /* bottom: 10px;
  left: 50%; */

  margin-left: 58px;
  margin-right: 74px;
  margin-top: 76px;
  /* transform: translate(-50%, -50%); */

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.button`
  text-decoration: none;

  width: 106px;

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
