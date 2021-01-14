import React from "react";
import styled from "styled-components";
export default function CheckFooter() {
  return (
    <CostWrapper>
      <CostTitle>요금 확인</CostTitle>
      <CostLabel>
        30,000<Low>원</Low>
      </CostLabel>
    </CostWrapper>
  );
}

const CostWrapper = styled.div`
  margin-left: 26px;
  margin-right: 20px;
  margin-top: 12px;
  padding-top: 17px;
  display: flex;
  justify-content: space-between;
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

const Low = styled.span`
  margin-left: 2px;
  margin-top: 5px;
  font-size: 18px;
`;
