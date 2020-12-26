import React from 'react';
import styled from 'styled-components';
import { poppy_logoIc, hamburgerIc } from '../resources/images';

export default function Header({ isAddress }) {
  return (
    <TopHeader {...{ isAddress }}>
      <HamburgerButton>
        <Hamburger src={hamburgerIc} />
      </HamburgerButton>
      <HeaderLogo src={poppy_logoIc} />
    </TopHeader>
  );
}

const TopHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: ${(props) => (props.isAddress === true ? '0' : '100')};
  width: 100%;
  padding-top: 10px;
  background: #ffffff;

  display: flex;
`;

const HamburgerButton = styled.button`
  border: 0;
  outline: 0;
  background-color: #ffffff;

  display: block;
`;

const Hamburger = styled.img``;

const HeaderLogo = styled.img`
  margin: 0 auto;
`;
