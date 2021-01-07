import React from 'react';
import styled from 'styled-components';
import { StyledBurger } from './Burger.styled';
import { hamburgerIc } from '../../resources/images';

const Hamburger = styled.img`
  /* display: flex; */

  /* justify-content: flex-start;
  margin-left: 3px; */
`;

const Burger = ({ open, setOpen, handleBurger }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => {
        setOpen(!open);
        console.log(open);
      }}
    >
      <Hamburger src={hamburgerIc} />
    </StyledBurger>
  );
};

export default Burger;
