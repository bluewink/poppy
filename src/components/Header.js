import React from "react";
import styled from "styled-components";
import { poppy_logoIc, hamburgerIc } from "../resources/images";

export default function Header({ isAddress }) {
  return (
    <TopHeader {...{ isAddress }}>
      <Empty>
        <HamburgerButton>
          <Hamburger src={hamburgerIc} />
        </HamburgerButton>
      </Empty>
      <HeaderLogo src={poppy_logoIc} />
      <Empty />
    </TopHeader>
  );
}

const TopHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: ${(props) => (props.isAddress === true ? "0" : "100")};
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
`;

const Hamburger = styled.img`
  /* display: flex; */

  /* justify-content: flex-start;
  margin-left: 3px; */
`;

const HeaderLogo = styled.img``;

const Empty = styled.div`
  flex: 1;
`;
