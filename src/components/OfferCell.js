import React, { useState } from "react";
import styled, { css } from "styled-components";
import { OfferPic1 } from "../resources/images";

import StarRatings from "react-star-ratings";
export default function OfferCell({ offerList }) {
  return (
    <Wrapper>
      {offerList.map((offer, index) => {
        const score = parseFloat(offer.score);
        return (
          <CellWrapper>
            <OfferPicture src={OfferPic1} />
            <OfferLocation> {offer.location}</OfferLocation>
            <OfferInfo>
              <OfferTitle>{offer.title}</OfferTitle>
              <OfferScore>
                <StarRatings
                  rating={score}
                  starDimension="15px"
                  starSpacing="0px"
                  starRatedColor="#ff9777"
                ></StarRatings>
                {offer.score}
              </OfferScore>
              <OfferPriceBox>
                <OfferPriceRow>
                  <OfferPriceDescription>당일 </OfferPriceDescription>
                  <OfferPrice>{offer.oneDay}</OfferPrice>
                  <OfferPriceDescription>원 </OfferPriceDescription>
                </OfferPriceRow>

                <OfferPriceRow>
                  <OfferPriceDescription>일박 </OfferPriceDescription>
                  <OfferPrice>{offer.oneSleep}</OfferPrice>
                  <OfferPriceDescription>원 </OfferPriceDescription>
                </OfferPriceRow>
              </OfferPriceBox>
            </OfferInfo>
          </CellWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
`;

const CellWrapper = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;
  height: 120px;

  background: #ffffff;
  margin: 10px 0;
`;

const OfferPicture = styled.img`
  display: flex;
  width: 140px;
  height: 95px;
  padding-top: 15px;
  padding-left: 15px;
  /* border-radius: 10px; */
`;

const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 15px;
  width: 100%;
`;
const OfferInfoRow = styled.div`
  padding-top: 17px;

  display: flex;
  justify-content: space-between;
  padding-right: 15px;
`;

const OfferLocation = styled.div`
  position: absolute;
  display: flex;
  top: 90px;
  left: 15px;
  width: 133px;
  height: 20px;
  font-family: WorkSans;
  font-size: 11px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.82;
  letter-spacing: -0.5px;
  text-align: left;
  color: #ffffff;
  padding-left: 5px;
  background-color: rgba(0, 0, 0, 0.62);
`;
const OfferTitle = styled.div`
  margin-top: 15px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -1px;
  text-align: left;
  color: #2c2c2c;
`;
const OfferScore = styled.div`
  display: flex;

  font-family: WorkSans;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.15px;
  text-align: left;
  color: #505050;
`;

const OfferPriceBox = styled.div`
  /* margin-top: 10px; */
  /* display: flex;
  flex-direction: column; */
  display: flex;
  flex-direction: column;
  margin-left: 50%;
  width: 110px;
  /* height: 20px; */
`;
const OfferPriceRow = styled.div`
  height: 20px;
`;
const OfferPrice = styled.span`
  font-family: WorkSans;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.15px;
  text-align: right;
  color: #2c2c2c;
`;
const OfferPriceDescription = styled.span`
  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.42;
  letter-spacing: -1px;
  text-align: right;
  color: #bebebe;
`;
