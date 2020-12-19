import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import Detail from './pages/Detail';

export default function App() {
  return (
    <MobileSize>
      <Detail />
    </MobileSize>
  );
}

const MobileSize = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  max-width: 27rem;
  height: fit-content;
  min-height: 100vh;
  margin: 0px auto;
  position: relative;
  z-index: 100;
`;
