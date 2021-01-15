import React from "react";
import styled from "styled-components";
import { arrowRightIc } from "../resources/images";
export default function PeriodInfo({ date }) {
  return (
    <CalendarWrapper>
      <DateBox>
        <Label>돌봄 시작</Label>
        <Date>
          {date}
          <span style={{ fontFamily: "Noto Sans KR", fontSize: "15px" }}>
            (토)
          </span>
        </Date>
        <Time>09:00</Time>
      </DateBox>
      <Arrow src={arrowRightIc} width="20px" height="20px" />
      <DateBox2>
        <Label>돌봄 끝</Label>
        <Date>
          {date}

          <span style={{ fontFamily: "Noto Sans KR", fontSize: "15px" }}>
            (토)
          </span>
        </Date>
        <Time>18:00</Time>
      </DateBox2>
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: space-between;
  /* margin-top: 30px; */
  margin-left: 15px;
  margin-right: 14px;

  padding: 14px 18px 16px 17px;
  //   height: 93px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #fafafa;

  //   width: 346px;
  //   height: 93px;

  position: relative;
`;

const Arrow = styled.img`
  margin-bottom: 10px;
  margin-right: 33px;
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateBox2 = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 0;
`;

const Label = styled.div`
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
`;

const Date = styled.div`
  width: 140px;
  height: 32px;
  /* margin: 15px 48px 0 0; */
  font-family: "Work Sans";
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.03;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;

  display: flex;
  align-items: center;

  /* font-family: NotoSansKR;
  font-size: 15px; */

  /* font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  /* or 103% */

  /* display: flex;
  align-items: center;
  letter-spacing: -1px;
  width: 140px;
  height: 32px;

  color: #505050; */
`;

const Time = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 27px;
  /* or 115% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* black */

  color: #000000;
`;
