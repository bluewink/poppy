import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import PeriodInfo from "../components/PeriodInfo";
import CheckFooter from "../components/CheckFooter";
import PinkButton from "../components/PinkButton";
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
      <SectionBox>
        <SectionRow>
          <SectionRequest>예약자 이름</SectionRequest>
          <SectionResponse>정우림</SectionResponse>
        </SectionRow>
        <SectionRow style={{ paddingTop: "12px" }}>
          <SectionRequest style={{ height: "14px" }}>
            예약자 번호
          </SectionRequest>
          <SectionResponse>돌봄수락 후 확인 가능</SectionResponse>
        </SectionRow>
      </SectionBox>

      <SectionTitle>돌봄 신청 반려견</SectionTitle>
      <SectionBox>
        <SectionRow>
          <SectionRequest>반려견 이름</SectionRequest>
          <SectionResponse>뽀삐</SectionResponse>
        </SectionRow>
        <SectionRow style={{ paddingTop: "12px" }}>
          <SectionRequest style={{ height: "14px" }}>
            반려견 사이즈
          </SectionRequest>
          <SectionResponse>소형견</SectionResponse>
        </SectionRow>
      </SectionBox>
      <FooterBox>
        <CheckFooter />
        <ButtonRow>
          <PinkButton
            bgColor="#d1d1d1"
            content="돌봄거절"
            wid="124px"
            hgt="46px"
          />
          <Empty />
          <PinkButton content="돌봄수락" wid="124px" hgt="46px" />
        </ButtonRow>
      </FooterBox>
    </div>
  );
}
const Empty = styled.div`
  width: 14px;
`;

const ButtonRow = styled.div`
  margin-top: 31px;
  display: flex;
  justify-content: center;
`;

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
  display: flex;
  height: 18px;
  padding-top: 16px;
`;

const SectionRequest = styled.div`
  height: 18px;
  width: 83px;
  margin-right: 31px;
  margin-left: 12px;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #9d9d9d;
`;

const SectionResponse = styled.div`
  /* width: 124px; */
  height: 17px;
  /* margin: 0 33px 10px 31px; */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;

const FooterBox = styled.div`
  height: 166px;
  /* margin: 41px 0 0;
  padding: 12px 20px 51px 26px; */
  background-color: #f8f8f8;
`;
