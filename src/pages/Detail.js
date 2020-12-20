import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { img1, img2, detailIc1, detailIc2, detailIc3, detailIc4, detailIc5, detailIc6 } from '../resources/images';
import NextButton from '../components/NextButton';

// References: https://velog.io/@jeonghoheo/React-Hooks리액트-훅스의-기본-Part-1-2jjxpaobgg
// Scroll을 움직이면 h1의 스타일을 변화해주기 위한 함수.
const useScroll = () => {
  // state를 생성합니다.
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  // scroll의 값을 가져와 state를 갱신합니다.
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    // scroll 이벤트를 만들어줍니다. 스크롤을 움직일때 마다
    // onScroll 함수가 실행됩니다.
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};

export default function Detail() {
  const [moreText, setMoreText] = useState('더보기');
  const [moreSwitch, setMoreSwitch] = useState(false);

  const { y } = useScroll();

  const handleMore = () => {
    if (moreSwitch) {
      setMoreSwitch(false);
      setMoreText('더보기');
    } else {
      setMoreSwitch(true);
      setMoreText('줄어들기');
    }
  };

  return (
    <Wrapper>
      <Header></Header>
      <Thumbnail src={img1} />
      <ProfileBox>
        <ProfileThumbnail src={img2} />
        <ProfileTextBox>
          <ProfileTitle>안심하고 맡겨주세요:)</ProfileTitle>
          <ProfileAddress>서울시 마포구 상수동</ProfileAddress>
        </ProfileTextBox>
      </ProfileBox>
      <IntroduceBox>
        <IntroduceTitle>이웃 소개</IntroduceTitle>
        <IntroduceText>
          안녕하세요 이웃집 뽀삐 돌봄 이웃 홍*동 입니다. 저는 지금 사랑스러운 저의 반려견인 뽀삐(푸들, 4살)와 살고
          있습니다. 남자아이고, 중성화 했어요. 저희 뽀삐는 순한 성격이라 웬만한 친구들과 사이좋게 지내요. 성격이 안 맞는
          친구를 만나면 관심을 주지 않아요. 뽀삐와 시간을 보내면서 저는 반려견을 키우면서 책임감에 대한 ...{' '}
          <MoreText>
            {moreSwitch
              ? '이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅이웃집뽀삐화이팅'
              : ''}
          </MoreText>
          <MoreButton onClick={handleMore}>{moreText}</MoreButton>
        </IntroduceText>
      </IntroduceBox>
      <FeeBox>
        <FeeTitle>요금 소개</FeeTitle>
        <FeeTable>
          <TitleRow>
            <FirstColumnTitle>반려견 크기 </FirstColumnTitle>
            <SecondColumnTitle>
              <DayCostTitle>당일</DayCostTitle>
              <MonthCostTitle>1박</MonthCostTitle>
            </SecondColumnTitle>
          </TitleRow>
          <ElementRow>
            <FirstColumn>
              <WhichDog>소형견</WhichDog> <WhichWeight>7키로 미만</WhichWeight>
            </FirstColumn>
            <SecondColumn>
              <DayCost>10,000원</DayCost>
              <MonthCost>20,000원</MonthCost>
            </SecondColumn>
          </ElementRow>
          <LineView />
          <ElementRow>
            <FirstColumn>
              <WhichDog>중형견</WhichDog> <WhichWeight>7키로~15키로</WhichWeight>
            </FirstColumn>
            <SecondColumn>
              <DayCost>10,000원</DayCost>
              <MonthCost>20,000원</MonthCost>
            </SecondColumn>
          </ElementRow>
          <LineView />
          <ElementRow>
            <FirstColumn>
              <WhichDog>대형견</WhichDog> <WhichWeight>15키로 이상</WhichWeight>
            </FirstColumn>
            <SecondColumn>
              <DayCost>10,000원</DayCost>
              <MonthCost>20,000원</MonthCost>
            </SecondColumn>
          </ElementRow>
        </FeeTable>
      </FeeBox>
      <CalendarBox>
        <CalendarTitle>이용 가능 날짜</CalendarTitle>
      </CalendarBox>
      <ServiceBox>
        <ServiceTitle>이용 가능 서비스</ServiceTitle>
        <ServiceTable>
          <ServiceRow>
            <ServiceFirstColumn>
              <ServiceCellIcon src={detailIc1} />
              <ServiceCellTextBox>
                <ServiceCellTitle>장기 예약</ServiceCellTitle>
                <ServiceCellSubTitle>14일이상 돌봄 가능</ServiceCellSubTitle>
              </ServiceCellTextBox>
            </ServiceFirstColumn>
            <ServiceSecondeColumn>
              <ServiceCellIcon src={detailIc2} />
              <ServiceCellTextBox>
                <ServiceCellTitle>실내 놀이</ServiceCellTitle>
                <ServiceCellSubTitle>터크놀이, 노즈워크 등</ServiceCellSubTitle>
              </ServiceCellTextBox>
            </ServiceSecondeColumn>
          </ServiceRow>
          <ServiceRow>
            <ServiceFirstColumn>
              <ServiceCellIcon src={detailIc3} />
              <ServiceCellTextBox>
                <ServiceCellTitle>약물 복용</ServiceCellTitle>
                <ServiceCellSubTitle>비용 펫시터와 협의</ServiceCellSubTitle>
              </ServiceCellTextBox>
            </ServiceFirstColumn>
            <ServiceSecondeColumn>
              <ServiceCellIcon src={detailIc4} />
              <ServiceCellTextBox>
                <ServiceCellTitle>목욕 가능</ServiceCellTitle>
                <ServiceCellSubTitle>비용 펫시터와 협의</ServiceCellSubTitle>
              </ServiceCellTextBox>
            </ServiceSecondeColumn>
          </ServiceRow>
          <ServiceRow>
            <ServiceFirstColumn>
              <ServiceCellIcon src={detailIc5} />
              <ServiceCellTextBox>
                <ServiceCellTitle>매일 산책</ServiceCellTitle>
                <ServiceCellSubTitle>산책 및 실외배변 가능</ServiceCellSubTitle>
              </ServiceCellTextBox>
            </ServiceFirstColumn>
            <ServiceSecondeColumn>
              <ServiceCellIcon src={detailIc6} />
              <ServiceCellTextBox>
                <ServiceCellTitle>집앞 픽업</ServiceCellTitle>
                <ServiceCellSubTitle>비용 펫시터와 협의</ServiceCellSubTitle>
              </ServiceCellTextBox>
            </ServiceSecondeColumn>
          </ServiceRow>
        </ServiceTable>
      </ServiceBox>
      <NextButton {...{ y }} name="예약" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Header = styled.div`
  width: 100%;
  height: 60px;

  background-color: #f38f71;
`;

const Thumbnail = styled.img`
  width: 100%;

  content: object-fit;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-top: 15px;
`;

const ProfileThumbnail = styled.img`
  margin-left: 20px;
  padding: 5px;
  border-radius: 50px;
`;

const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-content: flex-end;
`;

const ProfileTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  letter-spacing: -1px;
`;

const ProfileAddress = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -1px;
`;

const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 22px 25px;
`;

const IntroduceTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #505050;
`;

const IntroduceText = styled.div`
  margin-top: 8px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const MoreButton = styled.button`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  letter-spacing: -1px;

  color: #4a4a4a;

  border: 0;
  outline: 0;
`;

const FeeBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 25px;
`;

const FeeTitle = styled.div`
  margin: 0 0 12px 0;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;
`;

const FeeTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleRow = styled.div`
  margin: 0 0 8px 0;
  display: flex;
  justify-content: space-between;
`;

const ElementRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FirstColumnTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  justify-content: space-between;
  letter-spacing: -1px;

  color: #505050;
`;

const SecondColumnTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #505050;
`;

const FirstColumn = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #505050;
`;

const SecondColumn = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;
  text-align: center;

  /* gray */

  color: #9d9d9d;
`;

const LineView = styled.div`
  margin-bottom: 4px;
  height: 5px;
  background-color: #fff8eb;
`;

const WhichDog = styled.span`
  padding: 0 16px 0 0;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #000000;
`;

const WhichWeight = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #b6b6b6;
`;
const DayCostTitle = styled.div`
  padding: 0 25px;
`;
const MonthCostTitle = styled.div`
  padding: 0 25px;
`;
const DayCost = styled.div`
  padding: 0 5px;
`;

const MonthCost = styled.div`
  padding: 0 5px;
`;

const MoreText = styled.span``;

const ServiceCellIcon = styled.img`
  margin: 0 1px;
  padding: 0 2px;
`;
const ServiceCellTextBox = styled.div`
  margin-left: 5px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ServiceCellTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #505050;
`;
const ServiceCellSubTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 10px;

  letter-spacing: -1px;

  color: #9d9d9d;
`;
const ServiceTable = styled.div`
  margin: 15px 0;

  display: flex;
  flex-direction: column;
`;
const ServiceRow = styled.div`
  margin: 8px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ServiceFirstColumn = styled.div`
  width: 50%;

  display: flex;
  align-content: center;
  justify-content: flex-start;
`;
const ServiceSecondeColumn = styled.div`
  width: 50%;

  display: flex;
  align-content: center;
  justify-content: flex-start;
`;
const ServiceBox = styled.div`
  margin: 40px 25px;
`;

const ServiceTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #505050;
`;

const CalendarBox = styled.div`
  margin: 50px 0 20px 25px;
`;
const CalendarTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #505050;
`;
