import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { OfferPic1 } from "../resources/images";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export default function OfferCell({ offerList }) {
  useEffect(() => {}, [offerList]);

  console.log("offerCell ", offerList);

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
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <CellWrapper>
              <OfferPicture src={offer.room_img} />
              <OfferLocation>
                {" "}
                {parseAddress(offer.address)} {offer.distance}{" "}
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
                  {offer.score.score}({offer.score.num})
                </OfferScore>
                <OfferPriceBox>
                  <OfferPriceRow>
                    <OfferPriceDescription>당일 </OfferPriceDescription>
                    <OfferPrice>{offer.small_dog_cost[0]}</OfferPrice>
                    <OfferPriceDescription style={{ color: "#2c2c2c" }}>
                      원{" "}
                    </OfferPriceDescription>
                  </OfferPriceRow>

                  <OfferPriceRow>
                    <OfferPriceDescription>일박 </OfferPriceDescription>
                    <OfferPrice>{offer.small_dog_cost[1]}</OfferPrice>
                    <OfferPriceDescription style={{ color: "#2c2c2c" }}>
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
  margin-top: 7px;
  width: 110px;
  /* height: 20px; */
`;
const OfferPriceRow = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
`;
const OfferPrice = styled.div`
  margin-left: 5px;

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
const OfferPriceDescription = styled.div`
  padding-top: 4px;
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
