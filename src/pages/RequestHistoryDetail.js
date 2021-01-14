import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import PeriodInfo from "../components/PeriodInfo";

export default function ReservationHistoryDetail() {
  return (
    <div>
      <NavBar titleName="들어온 신청" />
      <Header>
        <HeaderContent>
          들어온 신청 내역입니다.
          <br />
          내역을 확인 후에 수락 혹은 거절해주세요.
        </HeaderContent>
      </Header>
      <Shadow />
      <SectionTitle>신청 내역</SectionTitle>
      <PeriodInfo />
      <Shadow style={{ marginTop: "26px" }} />
      <SectionTitle>예약자 정보</SectionTitle>
      <SectionBox />
    </div>
  );
}

const Header = styled.div`
  /* height: 92px; */
`;
const HeaderContent = styled.div`
  width: 297px;
  height: 48px;
  margin: 26px 61px 18px 17px;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: -1px;
  text-align: left;
  color: #ff9777;
`;

const Shadow = styled.div`
  height: 5px;
  /* margin: 18px 0 29px; */
  box-shadow: inset 0 1px 2px 0 rgba(139, 136, 136, 0.17);
  background-color: #fafafa;
`;

//위 오른쪽 아래 왼쪽

const SectionTitle = styled.div`
  width: 252px;
  height: 21px;
  margin: 29px 106px 11px 17px;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: -1px;
  text-align: left;
  color: black;
`;

const SectionBox = styled.div`
  height: 85px;
  margin: 10px 18px 33px 14px;
  /* padding: 20px 60px 21px 12px; */
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #fafafa;
`;
const SectionRow = styled.div`
  display:flex;
`;

