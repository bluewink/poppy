import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Rating from 'react-rating';
import { EmptyStar, FullStar } from '../resources/images';

export default function OfferCell({ offerList, startDate, endDate }) {
  useEffect(() => {}, [offerList]);

  const parseAddress = (isExpert, address) => {
    const words = address.split(' ');

    if (isExpert) {
      return words[words.length - 2];
    } else {
      return words[words.length - 1];
    }
  };

  return (
    <Wrapper>
      {offerList.map((offer, index) => {
        const score = parseFloat(offer.score.score);
        return (
          <Link
            to={{
              pathname: '/takeofferdetail',
              state: {
                address: offer.address,
                expert: offer.expert_or_not,
                type: offer.type,
                startDate: startDate,
                endDate: endDate,
              },
            }}
            style={{ textDecoration: 'none' }}
          >
            <CellWrapper>
              <OfferPicture bg={offer.room_img} />
              <OfferLocation>
                <OfferLocationDistance>
                  {' '}
                  {parseAddress(offer.expert_or_not, offer.address)} &nbsp;
                  <span style={{ fontFamily: 'Work Sans' }}>{offer.distance}</span>{' '}
                </OfferLocationDistance>
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
                    <span style={{ marginLeft: '1px' }}></span>
                    {offer.score.score}
                    <span style={{ marginLeft: '2px', fontWeight: '400' }}>({offer.score.num})</span>
                  </ScoreInfo>
                </OfferScore>
                <OfferPriceBox>
                  <OfferPriceRow style={{ paddingBottom: '7px' }}>
                    <OfferPriceDescription>당일 </OfferPriceDescription>
                    <OfferPrice>
                      {offer.small_dog_cost[0]}
                      <span
                        style={{
                          fontFamily: 'Noto Sans KR',
                          fontSize: '13px',
                          color: '#2c2c2c',
                          fontWeight: '400',
                        }}
                      >
                        원{' '}
                      </span>
                    </OfferPrice>
                  </OfferPriceRow>

                  <OfferPriceRow>
                    <OfferPriceDescription>1박</OfferPriceDescription>
                    <OfferPrice>
                      {offer.small_dog_cost[1]}
                      <span
                        style={{
                          fontFamily: 'Noto Sans KR',
                          fontSize: '13px',
                          color: '#2c2c2c',
                          fontWeight: '400',
                        }}
                      >
                        원{' '}
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

const Wrapper = styled.div`
  width: 100%;
`;

const CellWrapper = styled.div`
  display: flex;
  position: relative;

  height: 130px;
  /* width: 358px; */
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
  width: 191px;
  /* width: 100%; */
  padding-left: 9px;
`;

const OfferLocationDistance = styled.div`
  padding-left: 5px;
`;
const OfferLocation = styled.div`
  position: absolute;

  top: 90px;
  border-radius: 0 0 4px 4px;
  width: 138px;
  height: 21px;
  font-family: 'Noto Sans KR';
  font-size: 11px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.82;
  letter-spacing: -0.5px;
  text-align: left;
  color: #ffffff;

  /* padding-left: 5px; */
  background-color: rgba(0, 0, 0, 0.62);
`;
const OfferTitle = styled.div`
  height: 15px;
  padding-top: 18px;

  font-family: 'Noto Sans KR';
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

  font-family: 'Work Sans';
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
  /* position: absolute; */
  display: flex;
  flex-direction: column;

  padding-top: 24px;
  padding-left: 85px;
  width: 103px;
  /* width: 100%; */
  height: 35px;

  /* margin-right: 18px; */
  right: 18px;
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
  font-family: 'Work Sans';
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

  font-family: 'Noto Sans KR';
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
