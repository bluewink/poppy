import React from 'react';
import styled from 'styled-components';
import { backBtn, PoppyLogoPng } from '../../resources/images';
export default function NavBar({ backTo, titleName }) {
  return (
    <Navbar>
      <Empty>
        <Back>
          <img src={backBtn} width="24px" height="24px" />
        </Back>
      </Empty>
      <Title>돌봄 예약</Title>

      <Empty />
    </Navbar>
  );
}

const Title = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* or 111% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;

  color: #4d4d4d;
`;

const Back = styled.button`
  outline: none;
  border: none;
  background: white;

  margin-left: 13px;
`;

const Navbar = styled.div`
  width: 105px;
  height: 55px;

  position: sticky;
  top: 0;
  z-index: ${(props) => (props.isAddress === true ? '0' : '99')};
  width: 100%;
  padding-top: 10px;
  background: #ffffff;

  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

const HamburgerButton = styled.button`
  border: 0;
  outline: 0;
  background-color: #ffffff;
  flex: 1;
  margin-top: 4px;
  margin-left: 10px;
`;

const HeaderLogo = styled.img`
  width: 105px;
  height: 44px;
`;

const Empty = styled.div`
  flex: 1;
`;
