import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { poppyProfileMenu } from "../resources/images";

export default function EmptyOffer() {
  return (
    <>
      <NavBar titleName="들어온 신청" />
      <Wrapper>
        <Header>들어온 내역이 없어요.</Header>
        <PoppyImgBox>
          <PoppyImg src={poppyProfileMenu} />
        </PoppyImgBox>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  margin-top: 159px;

  width: 189px;
  height: 34.6px;

  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: -1px;
  text-align: center;
  color: #9d9d9d;
`;
const PoppyImgBox = styled.div`
  margin-top: 73.9px;
`;

const PoppyImg = styled.img`
  width: 153px;
  height: 189px;
  margin: 73.9px 104.2px 0 117.8px;
`;
