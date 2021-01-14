import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuRight, poppyProfileMenu } from "../resources/images";
import NavBar from "../components/NavBar";

export default function PetsitterMenu() {
  return (
    <>
      <NavBar titleName="돌보미 메뉴" />
      <Wrapper>
        <ProfileBox>
          <PoppyImg src={poppyProfileMenu} />
          <ProfileBoxHeader>
            돌보미 활동으로 이웃과 <br />
            이웃반려견을 도와요!
          </ProfileBoxHeader>
          <ProfileButtonBox>
            <ProfileButton>내 돌봄 프로필</ProfileButton>
          </ProfileButtonBox>
        </ProfileBox>
        <MenuRow style={{ marginTop: "23px" }}>
          <MenuContent>내게 온 신청</MenuContent>
          <MenuRightImg src={MenuRight} />
        </MenuRow>
        <MenuRow>
          <MenuContent>받은 후기</MenuContent>
          <MenuRightImg src={MenuRight} />
        </MenuRow>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div``;

const ProfileBox = styled.div`
  position: relative;

  margin-top: 32px;
  margin-left: 14px;
  margin-right: 14px;
  height: 155px;

  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #f9f9f9;
`;

const ProfileBoxHeader = styled.div`
  padding-top: 20px;
  margin-left: 14px;
  width: 202px;
  height: 56px;

  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -1px;
  text-align: left;
  color: black;
`;

const ProfileButton = styled.button`
  margin-top: 15px;

  width: 115px;
  height: 40px;
  margin: 15px 106.5px 3.9px 0;
  padding: 3px 0;
  border-radius: 45px;
  border: solid 1px #ff9777;

  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -1px;
  text-align: center;
  color: #ff9777;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
  }
`;
const ProfileButtonBox = styled.div`
  margin-left: 9px;
  width: 115px;
  height: 34px;

  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -1px;
  text-align: center;
  color: #ff9777;
`;
const PoppyImg = styled.img`
  position: absolute;
  top: 20px;
  right: 19.4px;
  width: 93.1px;
  height: 114.9px;
`;

const MenuRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  margin-right: 17px;
  margin-left: 17px;
  border-bottom: 1px solid #f2f2f2;
`;
const MenuContent = styled.div`
  padding-left: 13px;
  width: 245px;
  height: 21px;

  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;

const MenuRightImg = styled.img`
  position: absolute;
  top: 24px;
  right: 7px;
  width: 24px;
  height: 21px;
`;
