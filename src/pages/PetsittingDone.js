import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import PinkButton from "../components/PinkButton";
import { Link, useHistory } from "react-router-dom";
export default function PetsittingDone() {
  return (
    <div>
      <NavBar titleName="돌봄 내역" />
      <Title>돌봄을 끝내셨나요?</Title>
      <Header>
        돌봄을 완료하시기 전에
        <br />
        아래의 체크리스트를 모두 확인해주세요.
      </Header>
      <CheckRow>
        <CheckContent>
          1. 예약자가 돌봄 요금을 지불했는지 확인해주세요.{" "}
        </CheckContent>
      </CheckRow>
      <CheckRow>
        <CheckContent>
          2. 돌본 반려견을 귀가 시킨 후 돌봄 완료를 눌러주세요.
        </CheckContent>
      </CheckRow>
      <CheckRow style={{ height: "58px" }}>
        <CheckContent>
          3. 돌본 반려견에게 문제가 발생하지 않았는지 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다시 한번 확인해주세요.
        </CheckContent>
      </CheckRow>
      <ButtonContainer>
        <Link to="/petsittingcomplete">
          <PinkButton content="돌봄 완료" wid="129px" hgt="46px" />
        </Link>
      </ButtonContainer>
    </div>
  );
}
const ButtonContainer = styled.div`
  margin-top: 287px;
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  /* width: 314px; */
  margin-left: 16px;
  margin-top: 11px;
  margin-bottom: 47px;
  height: 48px;
  /* margin: 59px 44px 24px 17px; */
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
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
const CheckRow = styled.div`
  display: flex;
  align-items: center;

  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 13px;

  /* width: 343px; */
  height: 36px;
  /* margin: 47px 16px 13px; */
  /* padding: 9px 45px 9px 15px; */
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #fafafa;
`;
const CheckContent = styled.div`
  /* height: 18px; */
  padding-left: 15px;

  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;
