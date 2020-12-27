import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ARTICLE_DATA from '../resources/Json/article.json';

import {
  img2,
  detailIc1,
  detailIc2,
  detailIc3,
  detailIc4,
  detailIc5,
  detailIc6,
  detail_photo_1,
  detail_view_photo_1,
  detail_warning_sign,
  detail_star,
  detail_no_one,
  detail_five_start,
} from '../resources/images';

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

export default function Detail({ location }) {
  //takeoffer에서 넘어온 data
  const address = location.state.address;
  const isExpert = location.state.export;
  const index = location.state.type;
  useEffect(() => {}, []);

  const [moreText, setMoreText] = useState('더보기');
  const [moreSwitch, setMoreSwitch] = useState(false);

  // changed information
  const [roomImg, setRoomImg] = useState();
  // const
  const [title, setTitle] = useState();
  const [name, setName] = useState();
  const [content, setContent] = useState();

  const [dogName, setDogName] = useState();
  const [dogAge, setDogAge] = useState();
  const [dogIntroduce, setDogIntroduce] = useState();

  const [comment, setComment] = useState();
  const [score, setScore] = useState();

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
      <Header isAddress={false} />
      <Thumbnail src={detail_photo_1} />
      <ProfileBox>
        <ProfileThumbnail src={img2} />
        <ProfileTextBox>
          <ProfileTitle>안심하고 맡겨주세요:)</ProfileTitle>
          <ProfileContent>
            이현숙 <ProfileAddress>{address}</ProfileAddress>
          </ProfileContent>
        </ProfileTextBox>
      </ProfileBox>
      <ShadowView></ShadowView>
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
      <ShadowView></ShadowView>
      <FamilyBox>
        <FamilyTitle>가족 소개</FamilyTitle>
        <FamilyTable>
          <FamilyCell>
            <DogImage src={detail_view_photo_1} />
            <DogText>
              <DogName>또리</DogName>
              <DogSubDetail>말티즈 · 7살</DogSubDetail>
              <DogIntroduce>활발하고 강아지들과 잘 어울려요.</DogIntroduce>
            </DogText>
          </FamilyCell>
        </FamilyTable>
      </FamilyBox>
      <FeeBox>
        <FeeTitle>요금 소개</FeeTitle>
        <FeeTable>
          <TitleRow>
            <FirstColumnTitle>반려견 사이즈 </FirstColumnTitle>
            <SecondColumnTitle>
              <DayCostTitle>당일돌봄</DayCostTitle>
              <MonthCostTitle>1박돌봄</MonthCostTitle>
            </SecondColumnTitle>
          </TitleRow>
          <LineView />
          <ElementRow>
            <FirstColumn>
              <WhichDog>소형견</WhichDog> <WhichWeight>7키로 미만</WhichWeight>
            </FirstColumn>
            <SecondColumn>
              <DayCost>10,000원</DayCost>
              <MonthCost>20,000원</MonthCost>
            </SecondColumn>
          </ElementRow>

          <ElementRow>
            <FirstColumn>
              <WhichDog>중형견</WhichDog> <WhichWeight>7키로~15키로</WhichWeight>
            </FirstColumn>
            <SecondColumn>
              <DayCost>10,000원</DayCost>
              <MonthCost>20,000원</MonthCost>
            </SecondColumn>
          </ElementRow>

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
      <WarningSign>
        <WarningImage src={detail_warning_sign} />
        현재는 소형견만 예약이 가능합니다.
      </WarningSign>
      <ServiceBox>
        <ServiceTitle>이용 가능 서비스</ServiceTitle>
        <ServiceTable>
          <ServiceRow>
            <ServiceFirstColumn>
              <ServiceCellIcon src={detailIc1} />
              <ServiceCellTitle>오래 맡겨주세요</ServiceCellTitle>
            </ServiceFirstColumn>
            <ServiceSecondeColumn>
              <ServiceCellIcon src={detailIc2} />
              <ServiceCellTitle>놀이 가능해요</ServiceCellTitle>
            </ServiceSecondeColumn>
          </ServiceRow>
          <ServiceRow>
            <ServiceFirstColumn>
              <ServiceCellIcon src={detailIc3} />
              <ServiceCellTitle>약 먹일 수 있어요</ServiceCellTitle>
            </ServiceFirstColumn>
            <ServiceSecondeColumn>
              <ServiceCellIcon src={detailIc4} />
              <ServiceCellTitle>목욕 가능해요</ServiceCellTitle>
            </ServiceSecondeColumn>
          </ServiceRow>
          <ServiceRow>
            <ServiceFirstColumn>
              <ServiceCellIcon src={detailIc5} />
              <ServiceCellTitle>산책 가능해요</ServiceCellTitle>
            </ServiceFirstColumn>
            <ServiceSecondeColumn>
              <ServiceCellIcon src={detailIc6} />
              <ServiceCellTitle>픽업 해드려요</ServiceCellTitle>
            </ServiceSecondeColumn>
          </ServiceRow>
        </ServiceTable>
      </ServiceBox>
      <ExpertBox>
        <ExpertTitle>전문 자격증</ExpertTitle>
        <ExpertTable>
          <ExpertColumn>
            <ExpertCard>반려동물관리사 1급</ExpertCard>
            <ExpertDate>취득일 2019. 5. 7</ExpertDate>
          </ExpertColumn>
          <ExpertPlace>한국반려동물관리협회</ExpertPlace>
        </ExpertTable>
      </ExpertBox>
      <ShadowView></ShadowView>
      <ReviewBox>
        <ReviewTitle>
          돌봄 후기<ReviewNumber>(17)</ReviewNumber>
        </ReviewTitle>
        <StarReviewScore>
          <StarImage src={detail_star} />
          <ReviewScore>
            4.4 <GrayScore>/ 5</GrayScore>
          </ReviewScore>
        </StarReviewScore>
        <BestReview>
          <BestTitle>BEST</BestTitle>
          <BestReviewArticle>
            <BestReviewDetail>
              <BestReviewImage src={detail_no_one} />
              <BestReviewText>
                <BestColumn>
                  <BestReviewName>이*선</BestReviewName>
                  <BestReviewStar src={detail_five_start} />
                </BestColumn>
                <BestReviewDate>2020-12-21</BestReviewDate>
              </BestReviewText>
            </BestReviewDetail>
            <BestArticle>
              처음 맡길 뿐더러 사랑이가 노견이라서 다른 곳에서 잘 안받아줬는데 시터님께서 누구보다 반갑게 맞아주셔서
              너무 감사했습니다! 사랑이 피부, 관절 세세하게 신경써주시고 생각도 하지 못했는데, 사진 선물 너무
              감사드립니다. 너무 좋은 시간 보내고 온 것 같아요.. 잘 맡겼다는 생각이 드네요^^ 앞으로도 연락 드려야
              겠어요!
            </BestArticle>
          </BestReviewArticle>
        </BestReview>
      </ReviewBox>
      <NextBox>
        <Link to="/confirm">
          <NextButton>예약하기</NextButton>
        </Link>
      </NextBox>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Thumbnail = styled.img`
  width: 100%;

  content: object-fit;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 15px 0 25px 0;
`;

const ProfileThumbnail = styled.img`
  margin-left: 20px;
  width: 56px;
  height: 56px;

  margin-right: 5px;
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

const ProfileContent = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -1px;
`;

const ProfileAddress = styled.span`
  margin-left: 6px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 22px 25px;

  box-shadow: 0px 1px 3px rgba(129, 129, 129, 0.18);
  border-radius: 8px;
  background-color: #fafafa;
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
  background-color: #fafafa;
  border: 0;
  outline: 0;
`;

const ShadowView = styled.div`
  height: 5px;
  box-shadow: inset 0 1px 2px 0 rgba(139, 136, 136, 0.17);
  background-color: #fafafa;
`;

const DogText = styled.div`
  display: flex;
  flex-direction: column;
`;

const DogName = styled.div`
  margin-bottom: 3px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* gray */

  color: #ff9777;
`;

const DogSubDetail = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #9d9d9d;
`;

const DogIntroduce = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* gray */

  color: #9d9d9d;
`;

const FamilyCell = styled.div`
  padding: 15px;

  background: #fafafa;
  box-shadow: 0px 1px 3px rgba(129, 129, 129, 0.18);
  border-radius: 8px;

  display: flex;
  align-content: center;
  align-items: center;
`;

const DogImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  margin-right: 10px;
`;

const FamilyBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 25px;
`;

const FamilyTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #505050;
`;

const FamilyTable = styled.div`
  margin-top: 12px;
`;

const FeeBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 0 0 0;
`;

const FeeTitle = styled.div`
  margin: 0 0 12px 25px;

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

  margin: 0 16px;
  padding: 18px 20px 20px;
  border-radius: 8px;

  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #fafafa;
`;

const TitleRow = styled.div`
  margin: 0 0 8px 0;
  display: flex;
  justify-content: space-between;
`;

const ElementRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 3px 0;
`;

const FirstColumnTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;

  width: 50%;
`;

const SecondColumnTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: -1px;

  color: #505050;

  width: 50%;
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

  width: 50%;
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
  justify-content: space-around;

  text-align: center;

  /* gray */

  color: #9d9d9d;

  width: 50%;
`;

const LineView = styled.div`
  border: 2px solid #efefef;

  margin-bottom: 3px;
`;

const WhichDog = styled.span`
  padding: 0 16px 0 0;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -1px;
  text-align: left;
  color: #ff9777;
`;

const WhichWeight = styled.span`
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: normal;
  color: #b6b6b6;
`;

const DayCostTitle = styled.div``;

const MonthCostTitle = styled.div``;

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

  width: 27px;
  height: 27px;
`;

const ServiceCellTitle = styled.div`
  margin-left: 4px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;

const ServiceTable = styled.div`
  margin: 15px 0;

  padding: 20px 30px 20px 17px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #fafafa;

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
  flex-direction: row;
  align-content: center;
  align-items: flex-end;
`;
const ServiceSecondeColumn = styled.div`
  width: 50%;

  display: flex;
  align-content: center;
  align-items: flex-end;
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

const WarningSign = styled.div`
  margin: 12px 16px 0 16px;
  padding: 5px 78px 5px 5px;

  border-radius: 6px;
  background-color: #fff8eb;

  display: flex;
  align-items: center;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -1px;
  text-align: left;
  color: #ff9777;
`;

const WarningImage = styled.img`
  width: 16.5px;
  height: 16.5px;

  margin-right: 4.8px;
`;

const ExpertBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;
`;

const ExpertTitle = styled.div`
  margin: 15px 25px 0 25px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;

const ExpertTable = styled.div`
  margin: 14px 16px;

  padding: 16px 18px 15px 20px;
  border-radius: 10px;
  background-color: #fff8eb;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ExpertColumn = styled.div``;

const ExpertCard = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  text-align: left;
  color: #ff9777;
`;

const ExpertDate = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: -0.5px;

  color: #9d9d9d;
`;

const ExpertPlace = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  text-align: right;
  color: #505050;
`;

const NextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fafafa;
`;

const NextButton = styled.button`
  margin: 0px auto 40px auto;
  text-decoration: none;

  outline: none;
  border: none;

  padding: 0 25px;

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

const BestReviewDate = styled.div`
  font-family: Work Sans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.5px;
  text-align: right;
  color: #2c2c2c;
`;

const BestColumn = styled.div``;

const BestArticle = styled.div`
  margin: 0 10px;
`;

const BestReviewDetail = styled.div`
  display: flex;

  margin: 17px 0 10px 9px;
`;

const BestReviewText = styled.div`
  margin-left: 9px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const BestReviewName = styled.div``;

const BestReviewStar = styled.img``;

const BestReviewImage = styled.img`
  width: 40px;
  height: 40px;
`;

const BestReview = styled.div`
  margin: 25px 0 10px 10px;
`;
const BestTitle = styled.span`
  padding: 2px 11px 2px 11px;
  border-radius: 8px;
  background-color: #ff9777;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -1px;
  text-align: left;
  color: #ffffff;
`;
const BestReviewArticle = styled.div`
  margin-top: 9px;

  padding: 15px 18px 38px 19px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #ffffff;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const StarReviewScore = styled.div`
  margin-top: 25px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: flex-end;
`;

const StarImage = styled.img`
  width: 53px;
  height: 53px;

  border-radius: 2.5px;
`;

const ReviewScore = styled.div`
  margin-left: 5px;

  font-size: 48px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.42;
  letter-spacing: -1px;
  text-align: left;
  color: var(--black);
`;

const GrayScore = styled.span`
  margin: 0 1px 4px 0;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: -2.5px;
  text-align: left;
  color: #9d9d9d;
`;

const ReviewBox = styled.div`
  padding: 27px 17px 36px 15px;
  background-color: #fafafa;
`;

const ReviewTitle = styled.div`
  margin-left: 10px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;

const ReviewNumber = styled.span`
  margin-left: 3px;

  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #505050;
`;
