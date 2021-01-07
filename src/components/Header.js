import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { PoppyLogoPng, hamburgerIc } from '../resources/images';
import Burger from './Burger';
import Menu from './Menu';

export default function Header({ isAddress, background, setBackground }) {
  const [open, setOpen] = useState(!background);

  return (
    <TopHeader {...{ isAddress }}>
      <Empty>
        <Menu open={open} setOpen={setOpen} background={background} setBackground={setBackground} />
        <Burger open={open} setOpen={setOpen} background={background} setBackground={setBackground} />
      </Empty>
      <HeaderLogo src={PoppyLogoPng} />
      <Empty />
      {!open && <DarkBackground background={background} />}
    </TopHeader>
  );
}

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => (props.background === false ? 'rgb(255,255,255,0);' : 'rgb(0,0,0,0.45);')};
`;

const TopHeader = styled.div`
  width: 105px;
  height: 55px;

  position: sticky;
  top: 0;
  z-index: ${(props) => (props.isAddress === true ? '0' : '100')};
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

const Hamburger = styled.img`
  /* display: flex; */

  /* justify-content: flex-start;
  margin-left: 3px; */
`;

const HeaderLogo = styled.img`
  width: 105px;
  height: 44px;
`;

const Empty = styled.div`
  flex: 1;
`;
