import React, {useState} from "react";
import styled, { css } from "styled-components";
import { PoppyBackPng,LocationIcon, SearchTabIcon, CalendarIcon } from "../resources/images";
import OfferCell from "../components/OfferCell";
export default function Search() {

  const [neighbor, setNeighbor] = useState(1);


  const NEIGHBOR_OFFER_LIST = [{
    location: "서울시 마포구 3.5km",
    title: "안심하고 맡겨주세요 :)",
    score : "4.8(148)",
    price : "1박 \ 45,000"
  },
  {
    location: "서울시 서대문구 2.5km",
    title: "초코 집으로 초대합니다~",
    score : "4.4(125)",
    price : "1박 \ 30,000"
  }
  ];
  const PRO_OFFER_LIST = [
    {
      location: "서울시 영등포구 1.5km",
      title: "펫시팅 경력 20년",
      score : "4.5(152)",
      price : "1박 \ 55,000"
    },
    {
      location: "서울시 종로구 2.5km",
      title: "소형견 전문 펫시터!",
      score : "4.3(163)",
      price : "1박 \ 50,000"
    }
  ];

  let offerList = [];
  //이웃 반려인 전체보기
  if(neighbor)
    offerList = NEIGHBOR_OFFER_LIST;
  else{
    offerList = PRO_OFFER_LIST;
  }
  const handleNeighborTabClick = () =>{
    setNeighbor(1);
  }
  const handleProTabClick = ()=>{
    setNeighbor(0);
  }

  return (
    <div>
      <PoppyBack src={PoppyBackPng} />
      <SearchPageHeader>
        우리 강아지   를 돌봐줄
        <br />
        이웃을 찾아보세요.
      </SearchPageHeader>
      <SearchPageAddress >
      <img src={LocationIcon} /> 서울특별시 마포구 상수동
      </SearchPageAddress>
      <SearchPageDate>
      <img src={CalendarIcon} />  12월 20일 - 12월 22일
      </SearchPageDate>
      <FilterBox >
        <> 거리순 </>
        <> 가격순 </>
      </FilterBox>
      <SearchTabBox>
        <SearchTab onClick={handleNeighborTabClick}>
          이웃 반려인 전체 보기
          <div>
            { neighbor ? <img src={SearchTabIcon} /> : null}
          </div>
        </SearchTab>
        <SearchTab onClick={handleProTabClick}>
          전문 펫시터 전체 보기
          <div>
          { !neighbor ? <img src={SearchTabIcon} /> : null}
          </div>
        </SearchTab>
      </SearchTabBox>
      <OfferList>
        <OfferCell {...{offerList}} >
        </OfferCell>
      </OfferList>
      
    </div>
  );
}

const SearchPageHeader = styled.div`
  position: absolute;
  left: 4.27%;
  top: 100px;

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
const PoppyBack = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 140px;
  top: 107px;
`;
const SearchPageAddress = styled.div`
  position: absolute;
  left: 20px;
  top: 200px;
  bottom: 75%;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 141% */

  letter-spacing: -0.5px;

  color: #898989;
`;
const SearchPageDate = styled.div`
  position: absolute;
  left: 20px;
  top: 230px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 141% */

  letter-spacing: -0.5px;

  color: #898989;
`;

const FilterBox = styled.div`
  position: absolute;
  left: 315px;
  top: 235px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: -0.5px;

  color: #898989;

`;

const Empty = styled.div`



`;

const SearchTabBox = styled.div`

  position: relative;
  top: 250px;
  
  display:flex;
  justify-content:space-around;
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
  flex-direction:column;

`;

const OfferList = styled.div`
  position:relative;
  top:260px;
  display:flex;
  justify-content:center;

  
`;
