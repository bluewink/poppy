import React from "react";
import styled from "styled-components";
import { backIc, backBt } from "../../resources/images";
export default function NavBar({ backTo, titleName }) {
  const handleBackButton = () => [window.history.back()];
  return (
    <Navbar>
      <Empty>
        <Back onClick={handleBackButton}>
          <img src={backIc} width="38px" height="38px" />
        </Back>
      </Empty>
      <Title>{titleName}</Title>

      <Empty />
    </Navbar>
  );
}

const Title = styled.div`
  height: 24px;

  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.3px;
  text-align: center;
  /* or 111% */

  /* display: flex;
  align-items: center; */

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
  z-index: ${(props) => (props.isAddress === true ? "0" : "99")};
  width: 100%;
  padding-top: 10px;
  background: #ffffff;

  display: flex;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  /* justify-content: center; */
`;

const Empty = styled.div`
  flex: 1;
`;
