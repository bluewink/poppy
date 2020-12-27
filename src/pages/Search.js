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
import Header from "../components/Header";
import DatePicker from "react-datepicker";

export default function Search({ location }) {
  // console.log(location.state.address);

  //http://ec2-3-35-187-250.ap-northeast-2.compute.amazonaws.com:8000/expert/?order_by=distance&&address=

  const [neighbor, setNeighbor] = useState(1);
  const [offerList, setOfferList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // let neighborOfferList = [];
  // let proOfferList = [];
  let res;
  let tmpList = [];
  // let offerList = [];

  const EXPERT_API =
    "http://ec2-3-35-187-250.ap-northeast-2.compute.amazonaws.com:8000/expert/?order_by=distance&&address=";
  const NEIGHBOR_API =
    "http://ec2-3-35-187-250.ap-northeast-2.compute.amazonaws.com:8000/non_expert/?order_by=distance&&address=";

  // const sortData = (list) => {
  //   list.forEach((elem) => {
  //     // console.log(elem);
  //     // console.log("forEach!!");
  //     if (elem.expert_or_not === 0) {
  //       neighborOfferList.push(elem);
  //     } else {
  //       proOfferList.push(elem);
  //     }
  //   });

  //이웃 반려인 전체보기
  // if (neighbor) offerList = neighborOfferList;
  // else {
  //   offerList = proOfferList;
  // }

  useEffect(() => {
    fetchAddressData();
  }, [neighbor]);

  const handleNeighborTabClick = () => {
    setNeighbor(1);
  };
  const handleProTabClick = () => {
    setNeighbor(0);
  };

  const parseAddress = (address) => {
    const words = address.split(" ");
    return words[1] + " " + words[2];
  };

  const dataToSend = {
    method: "get",
    url: neighbor
      ? NEIGHBOR_API + location.state.address
      : EXPERT_API + location.state.address,
  };
  const fetchAddressData = async () => {
    try {
      res = await axios(dataToSend);
      tmpList = neighbor ? res.data.non_experts : res.data.experts;
      setOfferList(tmpList);
      console.log(offerList);
    } catch (e) {
      console.log("fetch failed!!!");
      console.log(e);
    }
    // offerList = await res.data.petsitters;

    // sortData(listFromServer);
  };

  // fetchAddressData();

  // console.log("offerlist!", offerList);

  if (offerList.length === 0) {
    return <>...loading...</>;
  }

  return (
    <div>
      <Header isAddress={false} />
      <SearchPageHeader>
        우리 강아지를 돌봐줄
        <br />
        이웃을 찾아보세요.
      </SearchPageHeader>
      <SearchOptionBox>
        <SearchPageAddress>
          <img src={LocationIcon} /> {parseAddress(location.state.address)}
        </SearchPageAddress>
        <SearchPageDate>
          <img src={CalendarIcon} /> 12.20(목) - 12.22(금)
        </SearchPageDate>
      </SearchOptionBox>
      {/* <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        withPortal
      /> */}
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
  margin-left: 20px;
  margin-top: 20px;
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
  top: 65px;
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
  top: 65px;

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
  top: 70px;
  display: flex;
  justify-content: center;
`;

const SearchOptionBox = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  top: 50px;
  display: flex;
  justify-content: space-around;
`;
