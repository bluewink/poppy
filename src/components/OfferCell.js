import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import Rating from "react-rating";
import { EmptyStar, FullStar } from "../resources/images";

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
              <OfferPicture bg={offer.room_img} />
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
                  <Rating
                    emptySymbol={<StarImg src={EmptyStar} />}
                    fullSymbol={<StarImg src={FullStar} />}
                    readonly
                    initialRating={score}
                  />

                  <ScoreInfo>
                    <span style={{ marginLeft: "1px" }}></span>
                    {offer.score.score}
                    <span style={{ marginLeft: "2px", fontWeight: "400" }}>
                      ({offer.score.num})
                    </span>
                  </ScoreInfo>
                </OfferScore>
                <OfferPriceBox>
                  <OfferPriceRow style={{ paddingBottom: "7px" }}>
                    <OfferPriceDescription>당일 </OfferPriceDescription>
                    <OfferPrice>
                      {offer.small_dog_cost[0]}
                      <span
                        style={{
                          fontFamily: "Noto Sans KR",
                          fontSize: "13px",
                          color: "#2c2c2c",
                          fontWeight: "400",
                        }}
                      >
                        원{" "}
                      </span>
                    </OfferPrice>
                  </OfferPriceRow>

                  <OfferPriceRow>
                    <OfferPriceDescription>1박</OfferPriceDescription>
                    <OfferPrice>
                      {offer.small_dog_cost[1]}
                      <span
                        style={{
                          fontFamily: "Noto Sans KR",
                          fontSize: "13px",
                          color: "#2c2c2c",
                          fontWeight: "400",
                        }}
                      >
                        원{" "}
                      </span>
                    </OfferPrice>
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

const StarSvg = (
  <svg
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.57248 1.30158C5.90896 0.466624 7.09104 0.466624 7.42752 1.30158L8.21007 3.24345C8.35322 3.59866 8.68666 3.84092 9.06872 3.8673L11.1574 4.01148C12.0554 4.07348 12.4207 5.19769 11.7306 5.77572L10.1256 7.12005C9.83201 7.36595 9.70465 7.75794 9.79763 8.12945L10.3059 10.1604C10.5245 11.0337 9.56817 11.7285 8.80518 11.2508L7.03067 10.1398C6.70608 9.93653 6.29392 9.93653 5.96933 10.1398L4.19482 11.2508C3.43183 11.7285 2.47551 11.0337 2.69407 10.1604L3.20237 8.12945C3.29535 7.75794 3.16799 7.36595 2.8744 7.12005L1.26939 5.77572C0.579278 5.19769 0.944559 4.07348 1.84263 4.01148L3.93128 3.8673C4.31334 3.84092 4.64678 3.59866 4.78993 3.24345L5.57248 1.30158Z"
      fill="#FF9777"
    />
  </svg>
);

const Wrapper = styled.div`
  width: 100%;
`;

const CellWrapper = styled.div`
  display: flex;
  position: relative;

  height: 130px;
  width: 358px;
  background-color: #ffffff;
  box-shadow: 0 1px 1px 0 rgba(190, 190, 190, 0.25);

  padding-left: 17px;
  margin-bottom: 10px;
`;

const OfferPicture = styled.div`
  display: flex;
  width: 138px;
  height: 91px;
  margin-top: 20px;
  margin-bottom: 19px;
  border-radius: 4px;

  background-image: url(${(props) => props.bg});
  background-size: cover;
`;

const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  padding-left: 9px;
`;

const OfferLocation = styled.div`
  position: absolute;

  top: 90px;
  border-radius: 0 0 4px 4px;
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
  height: 15px;
  padding-top: 18px;

  font-family: "Noto Sans KR";
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

  margin-top: 5px;
  height: 15px;

  font-family: "Work Sans";
  font-size: 13px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.15px;
  text-align: left;
  color: #505050;
`;

const ScoreInfo = styled.div``;

const OfferPriceBox = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 24px;
  padding-left: 85px;
  width: 103px;
  height: 35px;
  margin-right: 18px;
`;
const OfferPriceRow = styled.div`
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OfferPrice = styled.div`
  margin-left: 5px;
  width: 81px;
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
  width: 23px;

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
const StarImg = styled.img`
  width: 15px;
  height: 15px;
`;
