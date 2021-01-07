import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

export default function Reservation() {
  return (
    <Wrapper>
      <NavBar backTo="/take" titleName="돌봄 예약" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
