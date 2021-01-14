import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import qs from 'querystring';
import NavBar from '../components/NavBar';
import { arrowRightIc, backBt } from '../resources/images';
import { useHistory, Link } from 'react-router-dom';

export default function Reservation({ location }) {
  const {
    title,
    address,
    name,
    startDate,
    oneDay,
    endDate,
    diffDate,
    cost,
    dates,
    target_petsitterID,
  } = location.state;

  const history = useHistory();

  const [isOneDay, setIsOneDay] = useState(false);

  useEffect(() => {
    setIsOneDay(oneDay);
    var dogSize = '소형견';
    var totalCost = 0;
    console.log(`title::::::::${diffDate}`);

    if (dogBreedIndex == 0) {
      setDogSize('소형견');
      if (oneDay) {
        setTotalCost(cost[0][0]);
      } else {
        setTotalCost(cost[0][1] * diffDate);
      }
    } else if (dogBreedIndex == 1) {
      setDogSize('중형견');
      if (oneDay) {
        totalCost = cost[1][0];
      } else {
        setTotalCost(cost[1][1] * diffDate);
      }
    } else {
      setDogSize('대형견');
      if (oneDay) {
        totalCost = cost[2][0];
      } else {
        setTotalCost(cost[2][1] * diffDate);
      }
    }
    const year = startDate.getFullYear();
    var month = startDate.getMonth() + 1;
    const day = startDate.getDate();

    var month = month < 10 ? `0${month}` : month;

    setStartDateView(year + '년 ' + month + '월 ' + day + '일 ');
    setEndDateView(year + '년 ' + month + '월 ' + day + '일 ');
    setStartDateServer(year + '-' + month + '-' + day);
    setEndDateServer(year + '-' + month + '-' + day);
    // setTotalCost(cost);
    if (endDate !== null) {
      console.log(`Helelfasdlkfsdalf:${endDate}`);
      const e_year = endDate.getFullYear();
      var e_month = endDate.getMonth() + 1;
      e_month = e_month < 10 ? `0${e_month}` : e_month;
      const e_day = endDate.getDate();

      setEndDateServer(e_year + '-' + e_month + '-' + e_day);
      setEndDateView(e_year + '년 ' + e_month + '월 ' + e_day + '일');
    }
  }, []);

  const [startDateView, setStartDateView] = useState('');
  const [endDateView, setEndDateView] = useState('');
  const [startDateServer, setStartDateServer] = useState();
  const [endDateServer, setEndDateServer] = useState();
  const [dogSize, setDogSize] = useState();
  const [totalCost, setTotalCost] = useState();
  const [diffDateServer, setDiffDateServer] = useState();

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogBreedIndex, setDogBreedIndex] = useState(0);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [breedError, setBreedError] = useState(false);
  const [startTimeIndex, setStartTimeIndex] = useState(-1);
  const [endTimeIndex, setEndTimeIndex] = useState(-1);
  const [sixBool, setSixBool] = useState(false);
  const [sevenBool, setSevenBool] = useState(false);
  const [eightBool, setEightBool] = useState(false);
  const [nineBool, setNineBool] = useState(false);
  const [tenBool, setTenBool] = useState(false);
  const [elevenBool, setElevenBool] = useState(false);
  const [twelveBool, setTwelveBool] = useState(false);
  const [thirteenBool, setThirteenBool] = useState(false);
  const [fourteenBool, setFourteenBool] = useState(false);
  const [fifteenBool, setFifteenBool] = useState(false);
  const [sixteenBool, setSixteenBool] = useState(false);
  const [seventeenBool, setSeventeenBool] = useState(false);
  const [eighteenBool, setEighteenBool] = useState(false);
  const [nineteenBool, setNineteenBool] = useState(false);
  const [twentyBool, setTwentyBool] = useState(false);
  const [twentyOneBool, setTwentyOneBool] = useState(false);
  const [twentyTwoBool, setTwentyTwoBool] = useState(false);
  const [twentyThreeBool, setTwentyThreeBool] = useState(false);
  const [twentyFourBool, setTwentyFourBool] = useState(false);

  const [timeStart, setTimeStart] = useState('09:00');
  const [timeEnd, setTimeEnd] = useState('11:00');

  const parseAddress = (address) => {
    const words = address.split(' ');
    return words[0] + ' ' + words[1];
  };

  const handleUserNameChanged = (e) => {
    setUserName(e.target.value);
    if (userName == '') {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleUserPhoneChanged = (e) => {
    setUserPhone(e.target.value);
    if (userPhone == '') {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleDogBrredChanged = (e) => {
    setDogBreed(e.target.value);

    if (dogBreed == '') {
      setBreedError(true);
    } else {
      setBreedError(false);
    }
  };

  const handleSmall = (e) => {
    setDogBreedIndex(0);
    setDogSize('소형견');
    console.log(dogSize);
    if (oneDay) {
      setTotalCost(cost[0][0]);
    } else {
      setTotalCost(cost[0][1] * diffDate);
    }
  };

  const handleMiddle = (e) => {
    setDogBreedIndex(1);
    setDogSize('중형견');
    console.log(dogSize);
    if (oneDay) {
      setTotalCost(cost[1][0]);
    } else {
      setTotalCost(cost[1][1] * diffDate);
    }
  };

  const handleBig = (e) => {
    setDogBreedIndex(2);
    setDogSize('대형견');
    console.log(dogSize);
    if (oneDay) {
      setTotalCost(cost[2][0]);
    } else {
      setTotalCost(cost[2][1] * diffDate);
    }
  };

  const handleSixClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(0, e.target.textContent);
  };
  const handleSevenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(1, e.target.textContent);
  };
  const handleEightClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(2, e.target.textContent);
  };
  const handleNineClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(3, e.target.textContent);
  };
  const handleTenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(4, e.target.textContent);
  };
  const handleElevenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(5, e.target.textContent);
  };
  const handleTwelveClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(6, e.target.textContent);
  };
  const handleThirteenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(7, e.target.textContent);
  };
  const handleFourteenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(8, e.target.textContent);
  };
  const handleFifteenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(9, e.target.textContent);
  };
  const handleSixteenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(10, e.target.textContent);
  };

  const handleSeventeenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(11, e.target.textContent);
  };

  const handleEighteenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(12, e.target.textContent);
  };

  const handleNineteenClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(13, e.target.textContent);
  };

  const handleTwentyClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(14, e.target.textContent);
  };

  const handleTwentyOneClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(15, e.target.textContent);
  };
  const handleTwentyTwoClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(16, e.target.textContent);
  };
  const handleTwentyThreeClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(17, e.target.textContent);
  };
  const handleTwentyFourClock = (e) => {
    console.log(e.target.textContent);
    calculateIndex(18, e.target.textContent);
  };

  function calculateIndex(idx, text) {
    if (startTimeIndex == -1 && endTimeIndex == -1) {
      setStartTimeIndex(idx);
      setEndTimeIndex(idx);
      text = parseInt(text) < 10 ? `0${text}` : text;
      setTimeStart(text);
    } else if (startTimeIndex != -1 && startTimeIndex == endTimeIndex) {
      // 다 눌리는 로직
      setEndTimeIndex(idx);
      text = parseInt(text) < 10 ? `0${text}` : text;
      setTimeEnd(text);
      let timeArray = [
        sixBool,
        sevenBool,
        eightBool,
        nineBool,
        tenBool,
        elevenBool,
        twelveBool,
        thirteenBool,
        fourteenBool,
        fifteenBool,
        sixteenBool,
        seventeenBool,
        eighteenBool,
        nineteenBool,
        twentyBool,
        twentyOneBool,
        twentyTwoBool,
        twentyThreeBool,
        twentyFourBool,
      ];
    } else if (startTimeIndex != -1 && endTimeIndex != -1 && startTimeIndex != endTimeIndex) {
      // 초기화 로직 및 다시 눌리는 로직
      setStartTimeIndex(idx);
      setEndTimeIndex(idx);
      setTimeStart(text);
      setTimeEnd(text);
    }
  }

  const handleNextStep = () => {
    console.log(userName);
    console.log(userPhone);
    console.log(dogBreed);
    if (userName == '') {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (userPhone == '') {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (dogBreed == '') {
      setBreedError(true);
    } else {
      setBreedError(false);
    }
    if (dogBreedIndex == 0) {
      setDogSize('소형견');
      if (oneDay) {
        setTotalCost(cost[0][0]);
      } else {
        setTotalCost(cost[0][1] * diffDate);
      }
    } else if (dogBreedIndex == 1) {
      setDogSize('중형견');
      if (oneDay) {
        totalCost = cost[1][0];
      } else {
        setTotalCost(cost[1][1] * diffDate);
      }
    } else {
      setDogSize('대형견');
      if (oneDay) {
        totalCost = cost[2][0];
      } else {
        setTotalCost(cost[2][1] * diffDate);
      }
    }

    console.log(`cost:::::::::${totalCost}`);
    console.log(userPhone);
    console.log(dogBreed);
    console.log(String(userPhone));
    console.log(dogBreed);
    console.log(dogSize);
    console.log(startDateServer + ' ' + timeStart);
    console.log(endDateServer + ' ' + timeEnd);
    console.log(totalCost);

    if (userPhone !== '' && dogBreed !== '' && dogSize !== '' && userName !== '') {
      // postServer();
      history.push({
        pathname: '/confirm',
        state: {
          name: name,
          date: dates,
          oneDay: oneDay,
          diffDate: diffDate,
          cost: totalCost,
          target_petsitterID: target_petsitterID,
          phone_num: userPhone,
          pet_breed: dogBreed,
          pet_size: dogSize,
          start_time: startDateServer + ' ' + timeStart,
          end_time: endDateServer + ' ' + timeEnd,
          total_fee: totalCost,
        },
      });
    }
  };

  const postServer = async () => {
    await axios({
      method: 'POST',
      url: 'http://ec2-13-209-159-94.ap-northeast-2.compute.amazonaws.com:5432/apply/',
      headers: {
        Authorization: 'Token 8f79775656f32458dfbb9c826dd89276477cec85',
      },
      data: {
        target_petsitterID: '2',
        phone_num: userPhone,
        pet_breed: dogBreed,
        pet_size: dogSize,
        start_time: startDateServer + ' ' + timeStart,
        end_time: endDateServer + ' ' + timeEnd,
        total_fee: totalCost,
      },
    }).then((res) => {
      console.log(res);
      console.log('등록 성공');
      history.push('/confirm');
      //const { name, date, oneDay, diffDate, cost } = location.state;
      // history.push({pathname:'/confirm',state:{
      //   name:userName,
      //   date:
      //   oneDay:
      //   diffDate:
      //   cost:
      // }})
    });
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
          <Date>{startDateView}</Date>
          {oneDay && <Time>{timeStart}</Time>}
        </DateBox>
        <Arrow src={arrowRightIc} width="20px" height="20px" />
        <DateBox2>
          <Label>돌봄 끝</Label>
          <Date>{endDateView}</Date>
          {oneDay && <Time>{timeEnd}</Time>}
        </DateBox2>
      </CalendarWrapper>
      {oneDay && (
        <>
          <TimeWrapper>
            {startTimeIndex <= 0 && 0 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleSixClock}>6:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleSixClock}>6:00</TimeBox>
            )}
            {startTimeIndex <= 1 && 1 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleSevenClock}>7:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleSevenClock}>7:00</TimeBox>
            )}
            {startTimeIndex <= 2 && 2 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleEightClock}>8:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleEightClock}>8:00</TimeBox>
            )}
            {startTimeIndex <= 3 && 3 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleNineClock}>9:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleNineClock}>9:00</TimeBox>
            )}
            {startTimeIndex <= 4 && 4 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleTenClock}>10:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleTenClock}>10:00</TimeBox>
            )}
            {startTimeIndex <= 5 && 5 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleElevenClock}>11:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleElevenClock}>11:00</TimeBox>
            )}
            {startTimeIndex <= 6 && 6 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleTwelveClock}>12:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleTwelveClock}>12:00</TimeBox>
            )}
            {startTimeIndex <= 7 && 7 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleThirteenClock}>13:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleThirteenClock}>13:00</TimeBox>
            )}
            {startTimeIndex <= 8 && 8 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleFourteenClock}>14:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleFourteenClock}>14:00</TimeBox>
            )}
            {startTimeIndex <= 9 && 9 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleFifteenClock}>15:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleFifteenClock}>15:00</TimeBox>
            )}
            {startTimeIndex <= 10 && 10 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleSixteenClock}>:1600</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleSixteenClock}>16:00</TimeBox>
            )}
            {startTimeIndex <= 11 && 11 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleSeventeenClock}>17:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleSeventeenClock}>17:00</TimeBox>
            )}
            {startTimeIndex <= 12 && 12 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleEighteenClock}>18:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleEighteenClock}>18:00</TimeBox>
            )}
            {startTimeIndex <= 13 && 13 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleNineteenClock}>19:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleNineteenClock}>19:00</TimeBox>
            )}
            {startTimeIndex <= 14 && 14 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleTwentyClock}>20:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleTwentyClock}>20:00</TimeBox>
            )}
            {startTimeIndex <= 15 && 15 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleTwentyOneClock}>21:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleTwentyOneClock}>21:00</TimeBox>
            )}
            {startTimeIndex <= 16 && 16 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleTwentyTwoClock}>22:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleTwentyTwoClock}>22:00</TimeBox>
            )}
            {startTimeIndex <= 17 && 17 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleTwentyThreeClock}>23:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleTwentyThreeClock}>23:00</TimeBox>
            )}
            {startTimeIndex <= 18 && 18 <= endTimeIndex ? (
              <SelectedTimeBox onClick={handleTwentyFourClock}>24:00</SelectedTimeBox>
            ) : (
              <TimeBox onClick={handleTwentyFourClock}>24:00</TimeBox>
            )}
          </TimeWrapper>
          <WarningLabel>새벽 시간대 돌봄의 경우, 돌보미와 상의해주세요.</WarningLabel>
        </>
      )}

      <ShadowView />
      <ReservationWrapper>
        <UserInfo>
          <SubTitle>예약자 정보</SubTitle>
          <TextView>
            <HorizontalStackView>
              <InfoLabel>예약자 이름</InfoLabel>
              <VerticalStackView>
                <UserNameTextField text={userName} onChange={handleUserNameChanged} placeholder="예약 시 필요합니다" />
                {nameError && <ErrorMessage>예약자 이름항목은 필수 정보입니다</ErrorMessage>}
              </VerticalStackView>
            </HorizontalStackView>
            <HorizontalStackView>
              <InfoLabel>예약자 번호</InfoLabel>
              <VerticalStackView>
                <UserPhoneTextField
                  text={userPhone}
                  onChange={handleUserPhoneChanged}
                  placeholder="예약 시 필요합니다"
                />
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
                <DogBreedTextField text={dogBreed} onChange={handleDogBrredChanged} placeholder="예약 시 필요합니다" />
                {breedError && <ErrorMessage>올바른 휴대전화번호 형식이 아닙니다</ErrorMessage>}
              </VerticalStackView>
            </HorizontalStackView>
            <HorizontalStackView>
              <InfoLabel>반려견 사이즈</InfoLabel>
              <DogSizeBox>
                {dogBreedIndex == 0 ? (
                  <SelectedButton id="clicked" className="clicked" onClick={handleSmall}>
                    소형견
                  </SelectedButton>
                ) : (
                  <Button onClick={handleSmall}>소형견</Button>
                )}
                {dogBreedIndex == 1 ? (
                  <SelectedButton id="clicked" className="clicked" onClick={handleMiddle}>
                    중형견
                  </SelectedButton>
                ) : (
                  <Button onClick={handleMiddle}>중형견</Button>
                )}
                {dogBreedIndex == 2 ? (
                  <SelectedButton id="clicked" className="clicked" onClick={handleBig}>
                    대형견
                  </SelectedButton>
                ) : (
                  <Button onClick={handleBig}>대형견</Button>
                )}
              </DogSizeBox>
            </HorizontalStackView>
          </TextView>
        </DogInfo>
      </ReservationWrapper>
      <ShadowViewBottom />
      <CostWrapper>
        <CostTitle>요금 확인</CostTitle>
        <CostLabel>
          {totalCost}
          <Low>원</Low>
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
  outline: none;
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

const SelectedButton = styled.button`
  width: 68px;
  height: 32px;

  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

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

  border: none;
  outline: none;
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

  padding-bottom: 5px;
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

  padding-bottom: 5px;
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

  padding-bottom: 5px;
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

const SelectedTimeBox = styled.button`
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
  text-align: center;
  letter-spacing: -0.5px;

  /* 화이트 */

  color: #ffffff;

  background: #ff9777;
  box-shadow: 2px 2px 3px rgba(255, 170, 122, 0.39), inset 2px 2px 5px rgba(248, 110, 33, 0.64);
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
  margin-top: 15px;
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
