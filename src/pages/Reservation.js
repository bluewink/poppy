import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

export default function Reservation() {
  return (
    <Wrapper>
      <Header isAddress={false} background={background} setBackground={setBackground} />
    </Wrapper>
  );
}
