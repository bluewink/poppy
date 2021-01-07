import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

import { arrowRightIc } from '../resources/images';

export default function Reservation({ location }) {
  const { title, address, name, date, oneDay, diffDate, cost, isExpert } = location.state;

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [doBreed, setDogBreed] = useState('');
  const [dogBreedIndex, setDogBreedIndex] = useState(0);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [breedError, setBreedError] = useState(false);

  console.log(name);
  console.log(date);
  console.log(oneDay);
  console.log(diffDate);
  console.log(cost);
  console.log(title);
  console.log(address);

  const parseAddress = (address) => {
    const words = address.split(' ');

    if (isExpert) {
      return words[0] + ' ' + words[1];
    } else {
      return words[0] + ' ' + words[1] + ' ' + words[2];
    }
  };

  const handleNextStep = () => {
    let un = userName.trim('');
  };
  return (
    <Wrapper>
      <NavBar backTo titleName="돌봄 예약" />
      <ProfileContent>
        <ProfileTitle>{title}</ProfileTitle>

        <ProfileAddress>
          {name} · {parseAddress(address)}
        </ProfileAddress>
      </ProfileContent>
      <CalendarWrapper>
        <DateBox>
          <Label>돌봄 시작</Label>
          <Date>2021.01.23 (토)</Date>
          <Time>09:00</Time>
        </DateBox>
        <Arrow src={arrowRightIc} width="20px" height="20px" />
        <DateBox2>
          <Label>돌봄 시작</Label>
          <Date>2021.01.23(토)</Date>
          <Time>09:00</Time>
        </DateBox2>
      </CalendarWrapper>
      <TimeWrapper>
        <TimeBox>6:00</TimeBox>
        <TimeBox>7:00</TimeBox>
        <TimeBox>8:00</TimeBox>
        <TimeBox>9:00</TimeBox>
        <TimeBox>10:00</TimeBox>
        <TimeBox>11:00</TimeBox>
        <TimeBox>12:00</TimeBox>
        <TimeBox>13:00</TimeBox>
        <TimeBox>14:00</TimeBox>
        <TimeBox>15:00</TimeBox>
        <TimeBox>16:00</TimeBox>
        <TimeBox>17:00</TimeBox>
        <TimeBox>18:00</TimeBox>
        <TimeBox>19:00</TimeBox>
        <TimeBox>20:00</TimeBox>
      </TimeWrapper>
      <WarningLabel>새벽 시간대 돌봄의 경우, 돌보미와 상의해주세요.</WarningLabel>
      <ShadowView />
      <ReservationWrapper>
        <UserInfo>
          <SubTitle>예약자 정보</SubTitle>
          <TextView>
            <HorizontalStackView>
              <InfoLabel>예약자 이름</InfoLabel>
              <VerticalStackView>
                <UserNameTextField placeholder="예약 시 필요합니다" />
                {nameError && <ErrorMessage>예약자 이름항목은 필수 정보입니다</ErrorMessage>}
              </VerticalStackView>
            </HorizontalStackView>
            <HorizontalStackView>
              <InfoLabel>예약자 번호</InfoLabel>
              <VerticalStackView>
                <UserPhoneTextField placeholder="예약 시 필요합니다" />
                {phoneError && <ErrorMessage>올바른 휴대전화번호 형식이 아닙니다</ErrorMessage>}
              </VerticalStackView>
            </HorizontalStackView>
          </TextView>
        </UserInfo>
        <DogInfo>
          <SubTitle>반려견 정보</SubTitle>
          <TextView>
            <HorizontalStackView>
              <InfoLabel>반려견 견종</InfoLabel>
              <VerticalStackView>
                <DogBreedTextField placeholder="예약 시 필요합니다" />
                {breedError && <ErrorMessage>올바른 휴대전화번호 형식이 아닙니다</ErrorMessage>}
              </VerticalStackView>
            </HorizontalStackView>
            <HorizontalStackView>
              <InfoLabel>반려견 사이즈</InfoLabel>
              <DogSizeBox>
                <Button>소형견</Button>
                <Button>중형견</Button>
                <Button>대형견</Button>
              </DogSizeBox>
            </HorizontalStackView>
          </TextView>
        </DogInfo>
      </ReservationWrapper>
      <ShadowViewBottom />
      <CostWrapper>
        <CostTitle>요금 확인</CostTitle>
        <CostLabel>
          30,000<Low>원</Low>
        </CostLabel>
      </CostWrapper>
      <NextButton onClick={handleNextStep}>예약하기</NextButton>
    </Wrapper>
  );
}

const Gray = styled.span``;

const NextButton = styled.div`
  margin: 39px auto 37px auto;
  text-decoration: none;

  width: 124px;

  outline: none;
  border: none;

  //   padding: 0 25px;

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

const Low = styled.span`
  margin-left: 2px;
  margin-top: 5px;
  font-size: 18px;
`;
const CostTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* black */

  color: #000000;
`;
const CostLabel = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 31px;
  /* identical to box height, or 117% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;
`;
const CostWrapper = styled.div`
  margin-left: 26px;
  margin-right: 20px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`;

const ShadowViewBottom = styled.div`
  margin-top: 20px;

  height: 5px;
  background: #fafafa;
  box-shadow: inset 0px 1px 2px rgba(139, 136, 136, 0.17);
`;

const DogSizeBox = styled.div`
  display: flex;
  margin-left: -15px;
`;

const Button = styled.div`
  width: 68px;
  height: 32px;

  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 37px;
  border: solid 1px #dadada;
  background-color: #ffffff;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* gray */

  color: #9d9d9d;

  .clicked {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -1px;

    /* 화이트 */

    color: #ffffff;

    background: #ff9777;
    box-shadow: 2px 2px 3px rgba(255, 170, 122, 0.39), inset 2px 2px 5px rgba(248, 110, 33, 0.64);
    border-radius: 37px;
  }
`;

const ErrorMessage = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height, or 142% */

  display: flex;
  align-items: center;
  letter-spacing: -0.5px;

  /* 주황 */

  color: #ff9777;
`;

const VerticalStackView = styled.div``;

const TextView = styled.div`
  margin-top: 19px;
`;

const HorizontalStackView = styled.div`
  display: flex;
  //   justify-content: stretch;
  align-items: flex-start;

  width: 100%;

  height: 45px;
  margin-bottom: 13px;
`;

const InfoLabel = styled.div`
  margin-top: 2px;
  margin-left: 1px;
  margin-right: 33px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;

  white-space: nowrap;
  /* gray */

  color: #9d9d9d;
`;

const UserNameTextField = styled.input`
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  width: 224px;
  outline: none;

  box-shadow: none;
  font-size: 1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐찐회색 */

  color: #2c2c2c;

  ::placeholder {
    color: #d1d1d1;
  }
`;

const UserPhoneTextField = styled.input`
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  width: 224px;
  outline: none;

  box-shadow: none;
  font-size: 1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;

  /* 찐찐회색 */

  color: #2c2c2c;

  ::placeholder {
    color: #d1d1d1;
  }
`;

const DogBreedTextField = styled.input`
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  width: 224px;
  outline: none;

  box-shadow: none;
  font-size: 1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐찐회색 */

  color: #2c2c2c;

  ::placeholder {
    color: #d1d1d1;
  }
`;

const ReservationWrapper = styled.div`
  margin: 29px 24px 0 17px;
`;

const UserInfo = styled.div``;

const DogInfo = styled.div`
  margin-top: 20px;
`;

const SubTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* black */

  color: #000000;
`;

const ShadowView = styled.div`
  margin-top: 34px;

  height: 5px;
  background: #fafafa;
  box-shadow: inset 0px 1px 2px rgba(139, 136, 136, 0.17);
`;

const WarningLabel = styled.div`
  margin: 9px 0 0 14px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -1px;

  /* light gray */

  color: #d1d1d1;
`;

const TimeWrapper = styled.div`
  margin-top: 22px;
  white-space: nowrap;
  overflow: auto;
  padding-left: 9px;
  display: flex;
`;

const TimeBox = styled.button`
  outline: none;
  border: none;

  width: 40px;
  height: 40px;
  margin: 0 5px;

  background: #f2f2f2;
  /* 찐연회색 */

  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 3px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.5px;

  /* gray */

  color: #9d9d9d;
`;

const Arrow = styled.img`
  margin-bottom: 10px;
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateBox2 = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 0;
`;

const Label = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* or 121% */

  display: flex;
  align-items: center;
  letter-spacing: -0.5px;

  /* gray */

  color: #9d9d9d;
`;

const Date = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  /* or 103% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;
  width: 140px;
  height: 32px;
  /* 찐회색 */

  color: #505050;
`;

const Time = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 27px;
  /* or 115% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* black */

  color: #000000;
`;

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: space-between;
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 14px;

  padding: 14px 18px 16px 17px;
  //   height: 93px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #fafafa;

  //   width: 346px;
  //   height: 93px;

  position: relative;
`;

const Wrapper = styled.div``;

const ProfileContent = styled.div`
  margin: 24px 1px 0 17px;
  position: relative;
  height: -7px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -1px;

  color: #505050;
`;

const ProfileTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* or 137% */

  letter-spacing: -1px;

  color: #2c2c2c;
`;

const ProfileAddress = styled.span`
  margin-top: 6px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  letter-spacing: -1px;

  color: #9d9d9d;
`;
