import React from "react";
import styled from "styled-components";
import { confirmIc } from "../resources/images";

export default function ConfirmBox({ reservation }) {
  // console.log(reservation);
  const name = reservation.target_petsitter;
  const diffDate = reservation.date;
  const oneDay = true;
  const date = reservation.date;
  const cost = reservation.total_fee;
  const numberWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <ReservationBox image={confirmIc}>
      <PaddingBox>
        <InformationTitle>예약 정보</InformationTitle>
        <InformationGroup>
          <InformationSubTitle>
            돌봄 이웃 : <Lighter>{name}</Lighter>
          </InformationSubTitle>
          <InformationSubTitle>
            이용할 서비스 :{" "}
            <Lighter>
              소형견 / {oneDay ? " 당일케어" : diffDate + "박 돌봄"}
            </Lighter>
          </InformationSubTitle>
          <InformationSubTitle>
            날짜 :{" "}
            <Lighter>
              <WorkSans>{date}</WorkSans>
            </Lighter>
          </InformationSubTitle>
          <InformationSubTitle>
            요금 :{" "}
            <Lighter>
              <WorkSans>{numberWithCommas(cost)}</WorkSans>원
            </Lighter>
          </InformationSubTitle>
        </InformationGroup>
      </PaddingBox>
    </ReservationBox>
  );
}

const ReservationBox = styled.div`
  /* margin: 26px 16px 0 18px; */
  /* max-width: 341px; */
    margin-bottom:15px;

  height: 197px;
  border-radius: 23px;
  box-shadow: 0 0 11px 0 rgba(192, 146, 113, 0.24);
  background-color: #ffffff;
  
  background-image: URL(https://user-images.githubusercontent.com/56102421/103185790-4963bc00-4901-11eb-81b2-98c3cf890c04.png); 
`;

const PaddingBox = styled.div`
  padding: 29.81px 0 33px 25.31px;
`;

const InformationTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  /* or 100% */

  letter-spacing: -1px;

  color: #131313;
`;
const InformationGroup = styled.div`
  margin-top: 14px;
`;

const InformationSubTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;

  letter-spacing: -1px;

  color: #505050;
`;

const Lighter = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const WorkSans = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  letter-spacing: -1px;

  color: #9d9d9d;
`;
