import React, { useState } from 'react';
import styled from 'styled-components';
import { backIc, aaaa } from '../resources/images';
export default function Register() {
  const handleBackButton = () => [window.history.back()];

  const [titleInput, setTitleInput] = useState('');
  const [introduceInput, setIntroduceInput] = useState('');
  const [smallDogOneDayCostInput, setSmallDogOneDayCostInput] = useState('');
  const [smallDogTodayCostInput, setSmallDogTodayCostInput] = useState('');
  const [middleDogTodayCostInput, setMiddleDogTodayCostInput] = useState('');
  const [middleDogOneDayCostInput, setMiddleDogOneDayCostInput] = useState('');
  const [bigDogTodayCostInput, setBigDogTodayCostInput] = useState('');
  const [bigDogOneDayCostInput, setBigDogOneDayCostInput] = useState('');

  const handleTitleChanged = (e) => {
    setTitleInput(e.target.value);
  };

  const handleIntroduceChanged = (e) => {
    setIntroduceInput(e.target.value);
  };

  const handleSmallDogOneDayCostInput = (e) => {
    setSmallDogOneDayCostInput(e.target.value);
  };

  const handleSmallDogTodayCostInput = (e) => {
    setSmallDogTodayCostInput(e.target.value);
  };

  const handleMiddleDogTodayCostInput = (e) => {
    setMiddleDogTodayCostInput(e.target.value);
  };

  const handleMiddleDogOneDayCostInput = (e) => {
    setMiddleDogOneDayCostInput(e.target.value);
  };

  const handleBigDogTodayCostInput = (e) => {
    setBigDogTodayCostInput(e.target.value);
  };

  const handleBigDogOneDayCostInput = (e) => {
    setBigDogOneDayCostInput(e.target.value);
  };

  return (
    <Wrapper>
      <Navbar>
        <Back onClick={handleBackButton}>
          <img src={backIc} width="38px" height="38px" />
        </Back>

        <Title>프로필 등록</Title>

        <CompleteButton> 완료</CompleteButton>
      </Navbar>
      <HouseImageBox></HouseImageBox>
      <TitleBox>
        <TitleInput text={titleInput} onChange={handleTitleChanged} placeholder="소개문구를 입력해주세요." />
      </TitleBox>
      <ShadowView />
      <IntroduceBox>
        <IntroduceInput
          text={introduceInput}
          onChange={handleIntroduceChanged}
          placeholder="이웃 소개에 올라갈 내용을 작성해주세요. &#13;&#10;허위 및 불건전한 내용을 작성할 경우, 서비스 이용이 제한될 수 있습니다. "
        />
      </IntroduceBox>
      <ShadowView />
      <FeeBox>
        <FeeTitle>돌봄 요금을 설정해주세요.</FeeTitle>
        <FeeTable>
          <FirstRow>
            <FirstRowTitle>반려견크기</FirstRowTitle>
            <HorizontalStackView>
              <FirstRowTitle>당일</FirstRowTitle>
              <FirstRowTitle>1박</FirstRowTitle>
            </HorizontalStackView>
          </FirstRow>
          <SecondRows>
            <CostRow>
              <SubRowTitle>소형견</SubRowTitle>
              <HorizontalStackView>
                <SmallDogTodayCostInput
                  text={smallDogTodayCostInput}
                  onChangeCapture={handleSmallDogTodayCostInput}
                  placeholder="가격입력"
                />
                <SmallDogOneDayCostInput
                  text={smallDogOneDayCostInput}
                  onChangeCapture={handleSmallDogOneDayCostInput}
                  placeholder="가격입력"
                />
              </HorizontalStackView>
            </CostRow>
            <CostRow>
              <SubRowTitle>중형견</SubRowTitle>
              <HorizontalStackView>
                <SmallDogTodayCostInput
                  text={middleDogTodayCostInput}
                  onChangeCapture={handleMiddleDogTodayCostInput}
                  placeholder="가격입력"
                />
                <SmallDogOneDayCostInput
                  text={middleDogOneDayCostInput}
                  onChangeCapture={handleMiddleDogOneDayCostInput}
                  placeholder="가격입력"
                />
              </HorizontalStackView>
            </CostRow>
            <CostRow>
              <SubRowTitle>대형견</SubRowTitle>
              <HorizontalStackView>
                <SmallDogTodayCostInput
                  text={bigDogTodayCostInput}
                  onChangeCapture={handleBigDogTodayCostInput}
                  placeholder="가격입력"
                />
                <SmallDogOneDayCostInput
                  text={bigDogOneDayCostInput}
                  onChangeCapture={handleBigDogOneDayCostInput}
                  placeholder="가격입력"
                />
              </HorizontalStackView>
            </CostRow>
          </SecondRows>
        </FeeTable>
        <WarningLabel>
          해당하는 크기의 반려견에 대한 돌봄을 <br />
          원하시지 않으시는 경우, 공란으로 설정해주세요.
        </WarningLabel>
      </FeeBox>
      <CalendarBox>
        <CalendarTitle>돌봄 가능 날짜를 설정해주세요.</CalendarTitle>
      </CalendarBox>
    </Wrapper>
  );
}

const CalendarTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  /* or 139% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;
`;

const CalendarBox = styled.div`
  margin: 51px 16px 0 16px;
`;

const WarningLabel = styled.div`
  margin-top: 15px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* or 121% */

  display: flex;
  align-items: center;
  letter-spacing: -0.5px;

  /* light gray */

  color: #dbdbdb;
`;

const CostRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

const SecondRows = styled.div`
  margin-top: 16px;
`;

const SubRowTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;
`;

const SmallDogOneDayCostInput = styled.input`
  outline: none;
  border: none;
  width: 70px;
  margin-left: 0px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  /* or 106% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.5px;

  /* 찐회색 */

  color: #505050;

  ::placeholder {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* or 121% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.5px;

    color: #d5d5d5;
  }
`;
const SmallDogTodayCostInput = styled.input`
  outline: none;
  border: none;

  width: 70px;
  margin-left: 0px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  /* or 106% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.5px;

  /* 찐회색 */

  color: #505050;

  ::placeholder {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* or 121% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.5px;

    color: #d5d5d5;
  }
`;
const FeeTable = styled.div``;

const FirstRowTitle = styled.div``;

const HorizontalStackView = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const FirstRow = styled.div`
  margin-top: 14px;

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

  display: flex;
  justify-content: space-between;
`;

const FeeBox = styled.div`
  margin: 46px 32px 0 24px;
`;

const FeeTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  /* or 139% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;
`;

const ShadowView = styled.div`
  height: 2px;
  box-shadow: inset 0 1px 2px 0 rgba(139, 136, 136, 0.17);
  background-color: #fafafa;
`;

const IntroduceBox = styled.div`
  height: 250px;

  background-color: #fafafa;

  display: flex;
`;

const IntroduceInput = styled.textarea`
  margin: 18px 24px 0 24px;
  width: 100%;
  border: none;
  background-color: #fafafa;
  outline: none;
  ::placeholder {
    color: #dbdbdb;
  }
`;

const TitleBox = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
`;

const TitleInput = styled.input`
  border: none;
  outline: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  /* or 131% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* light gray */

  color: #2c2c2c;

  ::placeholder {
    color: #dbdbdb;
  }
`;

const Wrapper = styled.div``;

const HouseImageBox = styled.div`  
  width: 100%;
  height: 215px;
  background-color: rgba(0, 0, 0, 0.57);

  background-image: URL(https://user-images.githubusercontent.com/56102421/104219945-1fbe9f00-5482-11eb-9d8a-de40e3dd5ef5.png);
  object-fit: contain;
`;

const CompleteButton = styled.button`
  outline: none;
  background: white;
  border: none;

  margin-bottom: 4px;

  margin-right: 5px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.3px;

  /* gray */

  color: #9d9d9d;
`;

const Title = styled.div`
  margin-bottom: 5px;
  margin-left: 1px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;

  color: #4d4d4d;
`;

const Back = styled.button`
  outline: none;
  border: none;
  background: white;

  margin-top: 10px;
  margin-left: 2px;
`;

const Navbar = styled.div`
  width: 105px;
  height: 55px;

  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  padding-top: 10px;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
