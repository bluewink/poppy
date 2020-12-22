import React from 'react'
import styled, { css } from "styled-components";
import {  OfferPic1 } from "../resources/images";
export default function OfferCell( {offerList}) {

     /*
  {messageList.map((message, index) => {
          return (
            <MessageRow key={index} sending={!message.user}>
              <Img
                src={
                  message.user
                    ? require(`./images/${FRIENDLIST[userIndex].user}.jpg`)
                    : require(`./images/sangbeen.jpg`)
                }
              />
              <Message>{message.content}</Message>
            </MessageRow>
          );
        })}
        */
    return (
        <Wrapper>
            {offerList.map((offer, index) =>{
                return (
                    <CellWrapper>
                        <OfferPicture src={OfferPic1} />
                        <OfferInfo>
                            <OfferLocation>
                            {offer.location}
                            </OfferLocation>
                            <OfferTitle>
                            {offer.title}
                            </OfferTitle>
                            <OfferInfoRow>
                                <OfferScore>
                                    {offer.score}
                                </OfferScore>
                                <div></div>
                                <OfferPrice>
                                    {offer.price}
                                </OfferPrice>
                            </OfferInfoRow>
                        </OfferInfo>
                    </CellWrapper>
                );
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color:rgba(0,0,0,0.02);
  border-radius:12px;
  
`;

const CellWrapper = styled.div`
  display:flex;
  padding-bottom:20px;
`;

const OfferPicture = styled.img`

  display:flex;
  width: 100px;
  height: 75px;
  padding-top: 15px;
  padding-left: 15px;
`;

const OfferInfo = styled.div`
  display:flex;
  flex-direction:column;
  /* justify-content:space-around; */
  padding-left: 15px;
  width:100%;
`;
const OfferInfoRow = styled.div`

  padding-top:17px;

  display:flex;
  justify-content:space-between;
  padding-right:15px;
`;

const OfferLocation = styled.div`
  padding-top:15px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* or 167% */

  letter-spacing: -1px;

  color: #BEBEBE;
`;
const OfferTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  letter-spacing: -1px;

  color: #131313;
`;
const OfferScore = styled.div`
  display:flex;
  
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  
  letter-spacing: 0.15px;

  color: #383838;
`;


const OfferPrice = styled.div`
  display:flex;
 
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 133.5%;
  /* or 16px */

  letter-spacing: 0.15px;

  color: #787878;
`;
