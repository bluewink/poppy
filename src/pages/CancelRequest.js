import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import PinkButton from "../components/PinkButton";
import { textareaPoppy } from "../resources/images";

export default function CancelRequest() {
  return (
    <>
      <NavBar titleName="신청 취소" />
      <Wrapper>
        <Title>정말 취소하시겠어요?</Title>
        <Header>취소하시는 사유를 입력해주세요.</Header>
        <PoppyImg src={textareaPoppy} />
        <TextareaBox>
          <ReasonInput cols="10" rows="15" placeholder="취소사유 입력" />
        </TextareaBox>
        <ButtonContainer>
          <PinkButton content="입력완료" wid="129px" hgt="46px" />
        </ButtonContainer>
      </Wrapper>
    </>
  );
}
const ButtonContainer = styled.div`
  margin-top: 374px;
  display: flex;
  justify-content: center;
`;

const PoppyImg = styled.img`
  position: absolute;
  width: 92px;
  height: 73px;
  top: 12px;
  right: 21.1px;
`;

const TextareaBox = styled.div`
  margin-top: 24px;
  margin-left: 17px;
  margin-right: 17px;

  display: block;
  /* border: 3px solid #38c; */
  padding-left: 14px;
  padding-top: 10px;
  border-radius: 5px;
  border: solid 2px #e5e5e5;

  background-color: #ffffff;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Header = styled.div`
  /* width: 314px; */
  margin-left: 17px;
  height: 24px;
  /* margin: 59px 44px 24px 17px; */
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: -0.5px;
  text-align: left;
  color: #505050;
`;

const Title = styled.div`
  height: 36px;
  margin-left: 16px;
  /* margin: 24px 45px 47px 16px; */
  margin-top: 24px;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: -1px;
  text-align: left;
  color: black;
`;

const ReasonInput = styled.textarea`
  width: 100%;
  height: 127px;

  /* margin: 24px 17px 374px; */
  /* margin-left: 17px;
  margin-right: 17px; */
  /* padding: 10px 20px 93px 14px; */

  margin: 0;
  padding: 0;
  border-width: 0;

  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -1px;
  text-align: left;
  color: #9d9d9d;

  &:focus {
    outline: none;
  }
  &::placeholder {
    /* width: 307px;
  height: 24px; */
    font-family: "Noto Sans KR";
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: -1px;
    text-align: left;
    color: #9d9d9d;
  }
`;
