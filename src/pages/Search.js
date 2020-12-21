import React from "react";
import styled, { css } from "styled-components";
import { PoppyBackPng,LocationIcon } from "../resources/images";

export default function Search() {
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
        12월 20일 - 12월 22일
      </SearchPageDate>
      <FilterBox >
        <> 거리순 </>
        <> 가격순 </>
      </FilterBox>
    </div>
  );
}

const SearchPageHeader = styled.div`
  position: absolute;
  left: 4.27%;
  right: 7.47%;
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
  left: 12.27%;
  right: 34.13%;
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
  left: 12.27%;
  right: 34.13%;
  top: 230px;
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

const FilterBox = styled.div`
  position: absolute;
  left: 200px;
  right: 34.13%;
  top: 250px;
  bottom: 75%;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  letter-spacing: -0.5px;

  color: #898989;

`;