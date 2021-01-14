import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { LocationIcon, CalendarIcon } from "../resources/images";
import OfferCell from "../components/OfferCell";
import Header from "../components/Header";
import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import moment from "moment";
import "moment/locale/ko";

export default function Search({ location }) {
  const [filterStatus, setFilterStatus] = useState(0);
  const [offerList, setOfferList] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [selectionComplete, toggleSelectionComplete] = useState(false);

  const [background, setBackground] = useState(false);

  const SearchDateCustomInput = ({ onClick }) => (
    <SearchPageDatePicker>
      <img
        src={CalendarIcon}
        style={{
          width: "16px",
          height: "16px",
          marginLeft: "8px",
          marginRight: "4px",
        }}
      />

      <div onClick={onClick}>
        {startDate ? moment(startDate).format("MM.DD(ddd)") : "??/??/????"} -{" "}
        {endDate >= startDate ? moment(endDate).format("MM.DD(ddd)") : null}
      </div>
    </SearchPageDatePicker>
  );

  registerLocale("ko", ko);
  moment.locale("ko");
  let res;
  let tmpList = [];
  //petsitters_nearby/<str:address>/<int:dist_or_fee>
  //http://ec2-13-209-159-94.ap-northeast-2.compute.amazonaws.com:5432/

  const SERVER_API =
    "http://ec2-13-209-159-94.ap-northeast-2.compute.amazonaws.com:5432/";
  const GET_URL = "petsitters_nearby/";
  const API = SERVER_API + GET_URL;

  useEffect(() => {
    fetchAddressData();
  }, [filterStatus]);

  const handleDateChange = (date) => {
    if (!selectionComplete && !startDate) {
      setStartDate(date);
      return;
    }

    if (!selectionComplete && startDate && !endDate) {
      setEndDate(date);
      toggleSelectionComplete(true);

      return;
    }
    if (selectionComplete && startDate && endDate) {
      setStartDate(date);
      setEndDate(undefined);
      toggleSelectionComplete(false);
      return;
    }
  };

  const handleSelect = (date) => {
    if (
      !selectionComplete &&
      startDate &&
      !endDate &&
      sameDay(date, startDate)
    ) {
      handleDateChange(date);
    }
  };
  const sameDay = (d1, d2) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  // const handleNeighborTabClick = () => {
  //   setNeighbor(1);
  // };
  // const handleProTabClick = () => {
  //   setNeighbor(0);
  // };

  const parseAddress = (address) => {
    const words = address.split(" ");
    return words[1] + " " + words[2];
  };

  const dataToSend = {
    method: "get",
    url: API + location.state.address + "/" + filterStatus,
  };
  const fetchAddressData = async () => {
    try {
      res = await axios(dataToSend);
      console.log("response:", res);
      //이 부분 수정되어야함. 주호형이 넘겨주면 res.data 확인해보자. 예상으로는 non_experts, experts 구분이 사라질듯?
      tmpList = res.data.petsitter_list;
      setOfferList(tmpList);
      console.log(offerList);
    } catch (e) {
      console.log(dataToSend);
      console.log("fetch failed!!!");
      console.log(e);
    }
  };

  if (offerList.length === 0) {
    return <>...loading...</>;
  }

  return (
    <>
      <Header
        isAddress={false}
        background={background}
        setBackground={setBackground}
      />
      <Wrapper>
        <SearchPageHeader>
          강아지를 돌봐줄
          <br />
          이웃을 찾아보세요.
        </SearchPageHeader>
        <SearchOptionBox>
          <SearchPageAddress>
            <img
              src={LocationIcon}
              style={{
                width: "18px",
                height: "18px",
                marginLeft: "7px",
                marginRight: "1.7px",
              }}
            />{" "}
            {parseAddress(location.state.address)}
          </SearchPageAddress>
          <SearchPageDate>
            <DatePicker
              locale="ko"
              shouldCloseOnSelect={!selectionComplete}
              customInput={<SearchDateCustomInput />}
              selected={startDate}
              onChange={handleDateChange}
              onSelect={handleSelect}
              selectsEnd={Boolean(startDate)}
              startDate={startDate}
              endDate={endDate}
              popperPlacement="bottom-end"
            />
          </SearchPageDate>
        </SearchOptionBox>

        {/* <SearchTabBox>
          <SearchTab clicked={neighbor} onClick={handleNeighborTabClick}>
            <NeighborTab>이웃 반려인</NeighborTab>
          </SearchTab>
          <SearchTab clicked={!neighbor} onClick={handleProTabClick}>
            <ProTab>전문 펫시터</ProTab>
          </SearchTab>
        </SearchTabBox> */}
        <FilterBox>
          <FilterOption>
            <FilterSelect
              onChange={(event) =>
                setFilterStatus(parseInt(event.target.value))
              }
            >
              <option value="0">거리순</option>
              <option value="1">가격순</option>
            </FilterSelect>
          </FilterOption>
        </FilterBox>
        <OfferList>
          <OfferCell
            {...{ offerList }}
            startDate={startDate}
            endDate={endDate}
          ></OfferCell>
        </OfferList>
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

const Wrapper = styled.div`
  margin-left: 17px;
`;
const SearchPageHeader = styled.div`
  width: 331px;
  height: 69px;
  /* margin-left: 20px; */
  padding-top: 7px;
  display: flex;

  font-family: "Noto Sans KR";
  font-style: normal;
  //bold
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;

  letter-spacing: -1px;

  color: #2c2c2c;
`;

const SearchPageAddress = styled.div`
  /* width: 167.2px; */
  height: 36px;
  margin-right: 6.8px;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: "Noto Sans KR";
  font-size: 13px;
  //regular
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;

  border-radius: 2px;
  border: solid 1px lightgray;
`;
const SearchPageDate = styled.div`
  /* width: 167.2px; */
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;

  font-family: "Work Sans";
  font-size: 13px;
  //reg
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #505050;

  border-radius: 2px;
  border: solid 1px lightgray;
`;
const SearchPageDatePicker = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;

  font-family: "Work Sans", sans-serif;
  font-size: 13px;
  //reg
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #505050;
`;

const FilterBox = styled.div`
  margin-left: -17px;
  margin-top: 16px;
  height: 38px;

  box-shadow: inset 0 1px 2px 0 rgba(165, 159, 150, 0.22),
    0 1px 2px 0 rgba(170, 170, 170, 0.31);
  background-color: #f9f9f9;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "Work Sans", sans-serif;
  font-size: 13px;

  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -1px;
  text-align: right;
  color: gray;
`;
const FilterSelect = styled.select`
  font-family: "Noto Sans KR";
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -1px;
  text-align: right;
  color: #9d9d9d;
  background: #f9f9f9;
  border: none;

  &:focus {
    outline: none;
  }
`;

const FilterOption = styled.div`
  margin-right: 20px;
`;

const Empty = styled.div``;
const NeighborTab = styled.div`
  width: 110px;
  height: 16px;
  margin-left: 39px;
  margin-right: 39px;
`;
const ProTab = styled.div`
  width: 110px;
  height: 16px;
  margin-left: 38px;
  margin-right: 39px;
`;

const SearchTabBox = styled.div`
  padding-top: 17px;
  margin-left: -17px;
  display: flex;
  justify-content: space-around;
  font-family: "Noto Sans KR";
  font-style: normal;

  //bold
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -1px;

  color: #404040;
`;

const SearchTab = styled.div`
  display: flex;

  width: 100%;
  color: #d1d1d1;

  ${(props) =>
    props.clicked &&
    css`
      color: #2c2c2c;
      //bold
      font-weight: 700;
      border-bottom: 2px solid black;
      padding-bottom: 10px;
    `};
`;

const OfferList = styled.div`
  margin-left: -17px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
`;

const SearchOptionBox = styled.div`
  /* width: 100%; */
  padding-top: 19px;

  margin-right: 16.8px;

  display: flex;
`;
