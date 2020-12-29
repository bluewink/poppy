import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { OfferPic1 } from "../resources/images";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export default function OfferCell({ offerList, startDate, endDate }) {
  useEffect(() => {}, [offerList]);

  const parseAddress = (address) => {
    const words = address.split(" ");

    return words[words.length - 1];
  };

  return (
    <Wrapper>
      {offerList.map((offer, index) => {
        const score = parseFloat(offer.score.score);
        return (
          <Link
            to={{
              pathname: "/takeofferdetail",
              state: {
                address: offer.address,
                expert: offer.expert_or_not,
                type: offer.type,
                startDate: startDate,
                endDate: endDate,
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <CellWrapper>
              <OfferPicture src={offer.room_img} />
              <OfferLocation>
                {" "}
                {parseAddress(offer.address)}{" "}
                <span style={{ fontFamily: "Work Sans" }}>
                  {offer.distance}
                </span>{" "}
              </OfferLocation>
              <OfferInfo>
                <OfferTitle>{offer.title}</OfferTitle>
                <OfferScore>
                  <StarRatings
                    rating={score}
                    starDimension="15px"
                    starSpacing="0px"
                    starRatedColor="#ff9777"
                  ></StarRatings>
                  {offer.score.score}{" "}
                  <span style={{ paddingLeft: "3px", fontWeight: "500" }}>
                    {" "}
                    ({offer.score.num})
                  </span>
                </OfferScore>
                <OfferPriceBox>
                  <OfferPriceRow style={{ paddingBottom: "7px" }}>
                    <OfferPriceDescription>당일 </OfferPriceDescription>
                    <OfferPrice>{offer.small_dog_cost[0]}</OfferPrice>
                    <OfferPriceDescription
                      style={{ fontSize: "13px", color: "#2c2c2c" }}
                    >
                      원{" "}
                    </OfferPriceDescription>
                  </OfferPriceRow>

                  <OfferPriceRow>
                    <OfferPriceDescription>일박 </OfferPriceDescription>
                    <OfferPrice>{offer.small_dog_cost[1]}</OfferPrice>
                    <OfferPriceDescription
                      style={{ fontSize: "13px", color: "#2c2c2c" }}
                    >
                      원{" "}
                    </OfferPriceDescription>
                  </OfferPriceRow>
                </OfferPriceBox>
              </OfferInfo>
            </CellWrapper>
          </Link>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */

  background-color: #f9f9f9;
  /* border-radius: 12px; */
`;

const CellWrapper = styled.div`
  display: flex;
  position: relative;
  /* padding-bottom: 20px; */
  height: 130px;
  width: 100%;
  /* margin-left: -17px; */
  background: #ffffff;
  box-shadow: 0 1px 1px 0 rgba(190, 190, 190, 0.25);
  margin-bottom: 10px;
  /* margin: 10px 0; */
`;

const OfferPicture = styled.img`
  display: flex;
  width: 138px;
  height: 91px;
  padding-top: 20px;
  padding-bottom: 19px;
  /* border-radius: px; */
  /* padding-left: 15px; */
  /* border-radius: 10px; */
`;

const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  padding-left: 9px;

  /* padding-bottom: 12px; */
  /* width: 100%; */
`;

const OfferLocation = styled.div`
  position: absolute;
  /* display: flex; */
  top: 90px;
  /* border-radius: 20px; */
  width: 133px;
  height: 21px;
  font-family: "Noto Sans KR";
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
  /* margin-top: 15px; */
  height: 15px;
  padding-top: 21px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -1px;
  text-align: left;
  color: #2c2c2c;
`;
const OfferScore = styled.div`
  display: flex;
  padding-top: 8px;
  height: 10px;
  /* padding-bottom: 24px; */
  font-family: "Work Sans";
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
  display: flex;
  flex-direction: column;

  padding-top: 24px;
  padding-left: 85px;
  width: 105px;
  height: 35px;
  margin-right: 18px;

  /* margin-left: 50%;
  margin-top: 7px; */
  /* padding-bottom: 19px; */
  /* width: 110px; */
  /* height: 20px; */
`;
const OfferPriceRow = styled.div`
  height: 13px;
  display: flex;
  align-items: center;
`;
const OfferPrice = styled.div`
  margin-left: 5px;

  font-family: "Work Sans";
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.15px;
  text-align: right;
  color: #2c2c2c;
`;
const OfferPriceDescription = styled.div`
  /* padding-top: 4px; */
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.42;
  letter-spacing: -1px;
  text-align: right;
  color: #bebebe;
`;
