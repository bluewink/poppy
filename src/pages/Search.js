import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import {
  PoppyBackPng,
  LocationIcon,
  SearchTabIcon,
  CalendarIcon,
} from "../resources/images";
import OfferCell from "../components/OfferCell";
import DatePicker from "react-datepicker";
export default function Search() {
  // http://ec2-3-35-187-250.ap-northeast-2.compute.amazonaws.com:8000/?address=
  //headers: {"Access-Control-Allow-Origin": "*"}
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    const dataToSend = {
      method: "get",
      url:
        "http://ec2-3-35-187-250.ap-northeast-2.compute.amazonaws.com:8000/?address=서울시 마포구 신수동",
    };
    const fetchAddressData = async () => {
      try {
        const res = await axios(dataToSend);
        console.log(res);
      } catch (e) {
        console.log("fetch failed!!!");
        console.log(e);
      }
    };
    fetchAddressData();
  }, []);

  const [neighbor, setNeighbor] = useState(1);

  const NEIGHBOR_OFFER_LIST = [
    {
      location: "상수동 300m",
      title: "안심하고 맡겨주세요 :)",
      score: "4.8(148)",
      oneSleep: "20,000",
      oneDay: "45,000",
    },
    {
      location: "연희동 300m",
      title: "초코 집으로 초대합니다~",
      score: "4.4(125)",
      oneSleep: "20,000",
      oneDay: "30,000",
    },
    {
      location: "연희동 300m",
      title: "초코 집으로 초대합니다~",
      score: "4.4(125)",
      oneSleep: "20,000",
      oneDay: "30,000",
    },
    {
      location: "연희동 300m",
      title: "초코 집으로 초대합니다~",
      score: "4.4(125)",
      oneSleep: "20,000",
      oneDay: "30,000",
    },
    {
      location: "연희동 300m",
      title: "초코 집으로 초대합니다~",
      score: "4.4(125)",
      oneSleep: "20,000",
      oneDay: "30,000",
    },
    {
      location: "연희동 300m",
      title: "초코 집으로 초대합니다~",
      score: "4.4(125)",
      oneSleep: "20,000",
      oneDay: "30,000",
    },
  ];
  const PRO_OFFER_LIST = [
    {
      location: "가츠동 300m",
      title: "펫시팅 경력 20년",
      score: "4.5(152)",
      oneSleep: "20,000",
      oneDay: "55,000",
    },
    {
      location: "상수동 300m",
      title: "소형견 전문 펫시터!",
      score: "4.3(163)",
      oneSleep: "20,000",
      oneDay: "50,000",
    },
  ];

  let offerList = [];
  //이웃 반려인 전체보기
  if (neighbor) offerList = NEIGHBOR_OFFER_LIST;
  else {
    offerList = PRO_OFFER_LIST;
  }
  const handleNeighborTabClick = () => {
    setNeighbor(1);
  };
  const handleProTabClick = () => {
    setNeighbor(0);
  };

  return (
    <div>
      <SearchPageHeader>
        우리 강아지를 돌봐줄
        <br />
        이웃을 찾아보세요.
      </SearchPageHeader>
      <SearchOptionBox>
        <SearchPageAddress>
          <img src={LocationIcon} /> 마포구 상수동
        </SearchPageAddress>
        <SearchPageDate>
          <img src={CalendarIcon} /> 12.20(목) - 12.22(금)
          {/* <DatePicker
          selected={date}
          onSelect={handleDateSelect}
          onChange={handleDateChange}
          /> */}
        </SearchPageDate>
      </SearchOptionBox>

      <SearchTabBox>
        <SearchTab clicked={neighbor} onClick={handleNeighborTabClick}>
          이웃 반려인
          {/* <div>{neighbor ? <img src={SearchTabIcon} /> : null}</div> */}
        </SearchTab>
        <SearchTab clicked={!neighbor} onClick={handleProTabClick}>
          전문 펫시터
          {/* <div>{!neighbor ? <img src={SearchTabIcon} /> : null}</div> */}
        </SearchTab>
      </SearchTabBox>
      <FilterBox>
        <FilterOption> 거리순 </FilterOption>
      </FilterBox>
      <OfferList>
        <OfferCell {...{ offerList }}></OfferCell>
      </OfferList>
    </div>
  );
}

const SearchPageHeader = styled.div`
  position: absolute;
  left: 20px;
  top: 100px;
  display: flex;
  /* 대제목_24pt_Bold */

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  /* or 146% */

  letter-spacing: -1px;

  color: #131313;

  white-space: pre-wrap;
`;

const SearchPageAddress = styled.div`
  /* position: absolute;
  left: 20px;
  top: 200px;
  bottom: 75%; */
  width: 45%;
  height: 36px;
  display: flex;
  align-items: center;
  /* margin: 19px 6.8px 17px 17px; */
  /* padding: 9px 59.7px 9px 7px; */

  font-family: NotoSansKR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
  /* identical to box height, or 141% */

  border-radius: 2px;
  border: solid 1px lightgray;
`;
const SearchPageDate = styled.div`
  /* position: absolute;
  left: 20px;
  top: 230px; */
  width: 45%;
  height: 36px;
  display: flex;
  align-items: center;
  /* margin: 19px 0 17px 3px; */
  /* padding: 10px 1.2px 10px 8px; */

  font-family: WorkSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #505050;

  /* identical to box height, or 141% */

  border-radius: 2px;
  border: solid 1px lightgray;
`;

const FilterBox = styled.div`
  position: relative;
  top: 185px;
  width: 100%;
  height: 38px;
  box-shadow: inset 0 1px 2px 0 rgba(165, 159, 150, 0.22),
    0 1px 2px 0 rgba(170, 170, 170, 0.31);
  background-color: #f9f9f9;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: NotoSansKR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -1px;
  text-align: right;
  color: gray;
`;
const FilterOption = styled.div`
  margin-right: 20px;
`;

const Empty = styled.div``;

const SearchTabBox = styled.div`
  position: relative;
  top: 185px;

  display: flex;
  justify-content: space-around;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  text-align: center;
  letter-spacing: -1px;

  color: #404040;
`;

const SearchTab = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* font-weight: lighter; */
  color: gray;

  ${(props) =>
    props.clicked &&
    css`
      color: black;
      font-weight: bold;
      border-bottom: 1px solid black;
      padding-bottom: 5px;
    `};
`;

const OfferList = styled.div`
  position: relative;
  top: 190px;
  display: flex;
  justify-content: center;
`;

const SearchOptionBox = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  top: 170px;
  display: flex;
  justify-content: space-around;
`;
