import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useCookies } from 'react-cookie';
import Header from '../components/Header';
import ARTICLE_DATA from '../resources/Json/article.json';

import { detail_warning_sign, detail_no_one, detail_five_start, ser, star, service6 } from '../resources/images';

const EXPERT_API = 'http://ec2-3-35-187-250.ap-northeast-2.compute.amazonaws.com:8000/expert/';
const NEIGHBOR_API = 'http://ec2-13-209-159-94.ap-northeast-2.compute.amazonaws.com:5432/petsitter_detail/';

export default function Detail({ location }) {
  //takeoffer에서 넘어온 data
  const { address, petsitterId, type, endDate, startDate } = location.state;
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  // changed information
  const [server, setServer] = useState(false);
  const [diffDate, setDiffDate] = useState(1);
  const [dates, setDates] = useState('');
  const [oneDay, setOneDay] = useState(true);
  const [roomImg, setRoomImg] = useState('');

  const history = useHistory();

  const [comment, setComment] = useState({
    content: '',
    date: '',
    name: '장*나',
    score: 4.5,
    num_of_comments: 15,
  });
  const [content, setContent] = useState();
  const [moreContent, setMoreContent] = useState();
  const [title, setTitle] = useState();
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();
  const [largeCost, setLargeCost] = useState(['40,000원', '50,000원']);
  const [middleCost, setMiddleCost] = useState(['40,000원', '50,000원']);
  const [smallCost, setSmallCost] = useState(['40,000원', '50,000원']);

  const [pets, setPets] = useState([
    {
      pet_img: 'pet_img/default_pet.png',
      name: '또리',
      breed: '말티즈',
      age: '7살',
      character: '활발하고 강아지들과 잘 어울려요',
    },
  ]);

  const fetchDatas = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: NEIGHBOR_API + petsitterId,
      });

      setRoomImg(response.data.room_img);
      setComment(response.data.comment);

      setContent(response.data.content.slice(0, 140) + '...');
      setMoreContent(response.data.content);
      setTitle(response.data.title);
      setName(response.data.name);
      // setScore(response.data.score);
      setPets(response.data.pets);
      setLargeCost(response.data.large_dog_fee);
      setMiddleCost(response.data.middle_dog_fee);
      setSmallCost(response.data.small_dog_fee);
      setProfileImg(response.data.profile_img);

      setServer(true);

      // if (isExpert) {
      //   setCertification(response.data.certification);
      // }
    } catch (e) {
      console.log('fetch failed!!!');
      console.log(e);
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookies.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    const year = startDate.getFullYear();
    const month = startDate.getMonth() + 1;
    const day = startDate.getDate();

    console.log(address);
    console.log(petsitterId);
    setDates(year + '년 ' + month + '월 ' + day + '일 ');
    console.log();
    if (endDate !== null) {
      const e_year = endDate.getFullYear();
      const e_month = endDate.getMonth() + 1;
      const e_day = endDate.getDate();

      if (e_year === year && e_month === month && e_day === day) {
        setDates(year + '년 ' + month + '월 ' + day + '일');
      } else {
        setDates(year + '년 ' + month + '월 ' + day + '일 ~ ' + e_year + '년 ' + e_month + '월 ' + e_day + '일');
        const startDateMoment = moment(startDate);
        const endDateMoment = moment(endDate);
        const diff = endDateMoment.diff(startDateMoment, 'days') + 1;

        setDiffDate(Math.abs(diff));

        setOneDay(false);
      }
    }

    fetchDatas();
  }, []);

  const [moreText, setMoreText] = useState('더보기');
  const [moreSwitch, setMoreSwitch] = useState(false);

  const numberWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleMore = () => {
    if (moreSwitch) {
      setMoreSwitch(false);
      setMoreText('더보기');
    } else {
      setMoreSwitch(true);
      setMoreText('줄어들기');
    }
  };

  const parseAddress = (address) => {
    const words = address.split(' ');
    return words[0] + ' ' + words[1];
  };

  const [background, setBackground] = useState(false);

  const handleNextButton = () => {
    if (isLoggedIn) {
      history.push({
        pathname: '/reservation',
        state: {
          title: title,
          address: address,
          oneDay: oneDay,
          name: name,
          startDate: startDate,
          endDate: endDate,
          cost: [smallCost, middleCost, largeCost],
          diffDate: diffDate,
          dates: dates,
          target_petsitterID: petsitterId,
        },
      });
    } else {
      alert('로그인해주세요!');
      history.push({
        pathname: '/login',
      });
    }
  };
  return (
    <>
      <Wrapper>
        <Header isAddress={false} background={background} setBackground={setBackground} />
        <Thumbnail src={roomImg} />
        <ProfileBox>
          <ProfileThumbnail src={profileImg} />
          <ProfileTextBox>
            <ProfileContent>
              <ProfileTitle>{title}</ProfileTitle>
              &nbsp;{name}&nbsp;&nbsp;
              <ProfileAddress>{parseAddress(address)}</ProfileAddress>
            </ProfileContent>
          </ProfileTextBox>
        </ProfileBox>
        <ShadowView></ShadowView>
        <IntroduceBox>
          <IntroduceTitle>이웃집돌보미 소개</IntroduceTitle>
          <IntroduceText>
            {moreSwitch ? moreContent : content}
            <MoreButton onClick={handleMore}>{moreText}</MoreButton>
          </IntroduceText>
        </IntroduceBox>
        <ShadowView></ShadowView>
        <FamilyBox>
          <FamilyTitle>가족 소개</FamilyTitle>
          <FamilyTable>
            {pets.map((dog) => {
              return (
                <FamilyCell>
                  {server && <DogImage src={dog.pet_img} />}
                  <DogText>
                    <DogName>{dog.name}</DogName>
                    <DogSubDetail>
                      {dog.breed} · {dog.age}
                    </DogSubDetail>
                    <DogIntroduce>{dog.character}</DogIntroduce>
                  </DogText>
                </FamilyCell>
              );
            })}
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
                <WhichDog>소형견</WhichDog>&nbsp;&nbsp;
                <WhichWeight>
                  7kg<Noto>미만</Noto>
                </WhichWeight>
              </FirstColumn>
              <SecondColumn>
                <DayCost>
                  {numberWithCommas(smallCost[0])}
                  <Noto>원</Noto>
                </DayCost>
                <MonthCost>
                  {numberWithCommas(smallCost[1])}
                  <Noto>원</Noto>
                </MonthCost>
              </SecondColumn>
            </ElementRow>

            <ElementRow>
              <FirstColumn>
                <WhichDog>중형견</WhichDog>&nbsp;&nbsp;
                <WhichWeight>7kg~15kg</WhichWeight>
              </FirstColumn>
              <SecondColumn>
                <DayCost>
                  {numberWithCommas(middleCost[0])}
                  <Noto>원</Noto>
                </DayCost>
                <MonthCost>
                  {numberWithCommas(middleCost[1])}
                  <Noto>원</Noto>
                </MonthCost>
              </SecondColumn>
            </ElementRow>

            <ElementRow>
              <FirstColumn>
                <WhichDog>대형견</WhichDog>&nbsp;&nbsp;
                <WhichWeight>
                  15kg<Noto>이상</Noto>
                </WhichWeight>
              </FirstColumn>
              <SecondColumn>
                <DayCost>
                  {numberWithCommas(largeCost[0])}
                  <Noto>원</Noto>
                </DayCost>
                <MonthCost>
                  {numberWithCommas(largeCost[1])}
                  <Noto>원</Noto>
                </MonthCost>
              </SecondColumn>
            </ElementRow>
          </FeeTable>
        </FeeBox>
        <WarningSign>
          <WarningImage src={detail_warning_sign} />
          <WarningLabel>현재는 소형견만 예약이 가능합니다.</WarningLabel>
        </WarningSign>
        <ServiceBox>
          <ServiceTitle>이용 가능 서비스</ServiceTitle>
          <ServiceTable src={service6} />
          {/* <ServiceTable src={ser}> */}
          {/* <ServiceRow>
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
          </ServiceRow> */}
          {/* </ServiceTable> */}
        </ServiceBox>
        {/* {isExpert === 0 ? (
          <EmptyBox />
        ) : (
          <ExpertBox>
            <ExpertTitle>전문 자격증</ExpertTitle>
            {certification.map((certi) => {
              return (
                <ExpertTable>
                  <ExpertColumn>
                    <ExpertCard>{certi.name}</ExpertCard>
                    <ExpertDate>취득일 {certi.acquisition_date}</ExpertDate>
                  </ExpertColumn>
                  <ExpertPlace>한국반려동물관리협회</ExpertPlace>
                </ExpertTable>
              );
            })}
          </ExpertBox>
        )} */}
        <ShadowView></ShadowView>
        <ReviewBox>
          <ReviewTitle>
            <ReviewTitleBox>
              돌봄 후기
              <ReviewNumber>({comment.num_of_comments})</ReviewNumber>
            </ReviewTitleBox>
            {/* <ReviewMoreButton img={detailButtonIc} /> */}
          </ReviewTitle>
          <StarReviewScore>
            <StarImage src={star} />
            <ReviewScore>
              <Score>{comment.score}</Score>
              <GrayScore>&nbsp;/ 5</GrayScore>
            </ReviewScore>
          </StarReviewScore>
          <BestReview>
            <BestTitle>BEST</BestTitle>
            <BestReviewArticle>
              <BestReviewDetail>
                <BestReviewImage src={detail_no_one} />
                <BestReviewText>
                  <BestColumn>
                    <BestReviewName>{comment.name}</BestReviewName>
                    <BestReviewStar src={detail_five_start} />
                  </BestColumn>
                  <BestReviewDate>{comment.date}</BestReviewDate>
                </BestReviewText>
              </BestReviewDetail>
              <BestArticle>{comment.content}</BestArticle>
            </BestReviewArticle>
          </BestReview>
        </ReviewBox>
        <NextBox>
          <NextButton onClick={handleNextButton}>예약하기</NextButton>
        </NextBox>
      </Wrapper>
      {background && (
        <DarkBackground
          onClick={() => {
            setBackground(false);
          }}
        />
      )}
    </>
  );
}

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.45);
`;

const ReviewMoreButton = styled.img`
  width: 22px;
  height: 22px;
  width: 22px;
  height: 22px;
`;
const EmptyBox = styled.div``;
const Wrapper = styled.div``;

const Thumbnail = styled.img`
  width: 100%;
  height: 215px;
  content: object-fit;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 12px 0 25px 0;
`;

const ProfileThumbnail = styled.img`
  margin-left: 19px;
  width: 56px;
  height: 56px;

  margin-right: 8px;
  border-radius: 50px;
  content: object-fit;
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
  line-height: 33px;
  /* or 137% */

  letter-spacing: -1px;

  color: #2c2c2c;
`;

const ProfileContent = styled.div`
  position: relative;
  height: -7px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -1px;

  color: #505050;
`;

const ProfileAddress = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 26px 24px;
  padding-top: 31px;

  box-shadow: 0px 1px 3px rgba(129, 129, 129, 0.18);
  border-radius: 8px;
  background-color: #fafafa;
`;

const IntroduceTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #505050;
`;

const IntroduceText = styled.div`
  margin-top: 10px;
  margin-left: 1px;
  margin-bottom: 9px;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: regular;
  line-height: 1.53;
  letter-spacing: -1px;
  text-align: left;
  /* gray */

  color: #9d9d9d;
`;

const MoreButton = styled.button`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  // line-height: 22px;

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

const DogName = styled.span`
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

const DogSubDetail = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20.5px;
  /* or 146% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* gray */

  color: #505050;
`;

const DogIntroduce = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
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

  margin-top: 10px;
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
  margin-left: 3px;
  margin-right: 11px;
  margin-bottom: -1px;
  content: object-fit;
`;

const FamilyBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 45px 16px 0 16px;
`;

const FamilyTitle = styled.div`
  margin-left: 8px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #505050;
`;

const FamilyTable = styled.div`
  margin-top: 2px;
`;

const FeeBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 49px 0 0 0;
`;

const FeeTitle = styled.div`
  margin: 0 0 0 24px;

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

  margin: 15px 16px 0 16px;
  padding: 18px 20px 20px;
  border-radius: 8px;

  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #fafafa;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ElementRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 8px 0 0 0x;
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
  align-items: flex-end
  
  letter-spacing: -1px;

  vertical-align: text-bottom;
  color: #505050;

  width: 50%;

  margin-top: 8px;
`;

const SecondColumn = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  text-align: center;

  /* gray */

  color: #9d9d9d;

  width: 50%;
`;

const LineView = styled.div`
  border: 0.1px solid #efefef;
  margin-top: 10px;
`;

const WhichDog = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: 300;
  letter-spacing: -1px;
  text-align: left;
  vertical-align: text-bottom;
  color: #ff9777;
`;

const WhichWeight = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  letter-spacing: 0px;
  display: flex;
  align-items: center;

  color: #b6b6b6;
`;

const Noto = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #b6b6b6;
`;

const DayCostTitle = styled.div``;

const MonthCostTitle = styled.div``;

const DayCost = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -1px;

  /* gray */

  color: #9d9d9d;
`;

const MonthCost = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -1px;

  /* gray */

  color: #9d9d9d;
  display: flex;
`;

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

const ServiceTable = styled.img`
  margin: 15px 0 49px 0;
  // margin: 15px auto 49px auto;
  //   border-radius: 8px;
  //   box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  //   background-color: #fafafa;

  // position: relative;
  width: 100%;
  // height: 159px;
  object-fit: contain;
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
  margin: 45px 16px 0 16px;
`;

const ServiceTitle = styled.div`
  margin-top: 14px;
  margin-left: 8px;

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
  margin: 12px 16px 0 17px;
  padding: 5px;

  border-radius: 6px;
  background-color: #fff8eb;

  display: flex;
  align-items: center;
  align-content: center;

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

const WarningLabel = styled.div`
  margin: 3px 0 3px 2px;
`;

const WarningImage = styled.img`
  width: 22px;
  height: 22px;
`;

const ExpertBox = styled.div`
  margin: -2px 15px 0 16px;
  display: flex;
  flex-direction: column;

  margin-bottom: 49px;
`;

const ExpertTitle = styled.div`
  margin-left: 9px;

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
  margin: 14px 0 0 0;

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

  word-break: nowrap;
  white-space: nowrap;
  color: #ff9777;
`;

const ExpertDate = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 24px;
  /* or 188% */

  word-break: nowrap;
  white-space: nowrap;

  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  color: #9d9d9d;
`;

const ExpertPlace = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  // line-height: 0px;

  // display: flex;
  // align-items: center;
  text-align: right;
  letter-spacing: -0.5px;

  color: #505050;
`;

const NextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fafafa;
`;

const NextButton = styled.button`
  margin: 35px auto 34px auto;
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
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.5px;

  color: #2c2c2c;
`;

const BestColumn = styled.div``;

const BestArticle = styled.div`
  margin: 0 12px 0 3px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  letter-spacing: -1px;

  color: #9d9d9d;
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
  align-items: flex-start;
`;

const BestReviewName = styled.div``;

const BestReviewStar = styled.img``;

const BestReviewImage = styled.img`
  width: 40px;
  height: 40px;
`;

const BestReview = styled.div`
  margin: 29px 0 0 0;
`;

const BestTitle = styled.span`
  border-radius: 8px;
  background-color: #ff9777;

  margin-left: 9px;

  width: 56px;
  height: 24.6px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;

  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -1px;

  color: #ffffff;
`;

const BestReviewArticle = styled.div`
  margin-top: 9.4px;

  padding: 15px 18px 23px 19px;
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

const Score = styled.div``;

const StarReviewScore = styled.div`
  margin-top: 25px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: flex-end;
`;

const StarImage = styled.img`
  width: 40.03px;
  height: 38.32px;

  border-radius: 2.5px;
`;

const ReviewScore = styled.div`
  position: relative;

  margin-left: 5px;
  height: 40px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 20px;

  display: flex;
  align-content: flex-end;
  align-items: center;
  letter-spacing: -1px;

  color: #000000;
`;

const GrayScore = styled.div`
  position: relative;
  bottom: 0;

  padding-top: 14px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  /* or 100% */

  display: flex;
  align-items: flex-end;
  letter-spacing: -2.5px;

  /* gray */

  color: #9d9d9d;
`;

const ReviewBox = styled.div`
  padding: 27px 17px 0 15px;
  background-color: #fafafa;
`;

const ReviewTitle = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  margin-left: 9px;

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

const ReviewTitleBox = styled.div``;

const ReviewNumber = styled.span`
  margin-left: 3px;s

  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #505050;
`;
