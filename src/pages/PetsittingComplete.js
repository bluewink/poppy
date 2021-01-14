import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import PinkButton from "../components/PinkButton";
import { giantPoppy } from "../resources/images";
import { Link, useHistory } from "react-router-dom";
export default function PetsittingComplete() {
  return (
    <div>
      <NavBar titleName="돌봄 완료" />
      <Title>돌봄을 완료하였습니다!</Title>
      <Header>
        이웃집 뽀삐를 통해
        <br />
        돌봄 활동을 진행해주셔서 감사합니다.
        <br />
        <br />
        완료한 돌봄 내역은 돌보미 메뉴 탭의
        <br />
        돌봄 내역에서 확인 가능합니다.
      </Header>
      <PoppyImg src={giantPoppy} />
      <ButtonContainer>
        <Link to="/takeoffer">
          <PinkButton content="홈으로" wid="141.2px" hgt="46.9px" />
        </Link>
      </ButtonContainer>
    </div>
  );
}
//259 489

const PoppyImg = styled.img`
  position: absolute;
  width: 259px;
  height: 489px;
  top: 40%;
  right: 0px;
  z-index: -1;
`;

const ButtonContainer = styled.div`
  margin-top: 332.2px;
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  /* width: 314px; */
  margin-left: 16px;
  margin-top: 38px;
  margin-bottom: 47px;
  height: 125px;
  /* margin: 59px 44px 24px 17px; */
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

const Title = styled.div`
  height: 36px;
  margin-left: 16px;
  /* margin: 24px 45px 47px 16px; */
  margin-top: 24px;
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
