import React from "react";
import styled from "styled-components";
import { HeaderLogoPng } from "../resources/images";

export default function Header() {
  return (
    <div>
      <TopHeader>
        <HeaderLogo src={HeaderLogoPng} />
      </TopHeader>
    </div>
  );
}

const TopHeader = styled.div`
  position: absolute;
  /* width: 375px; */
  width: 100%;
  height: 128px;
  left: 0px;
  top: -47px;
  background: #f38f71;
  box-shadow: 0px 4px 10px rgba(191, 170, 114, 0.35);
`;

const HeaderLogo = styled.img`
  position: absolute;
  width: 114px;
  height: 32px;
  left: 38%;
  top: 75px;
`;
