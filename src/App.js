import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";

export default function App() {
  return (
    <MobileSize>
      <div>Poppy</div>
      <Header />
    </MobileSize>
  );
}

const MobileSize = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  max-width: 36rem;
  height: fit-content;
  min-height: 100vh;
  margin: 0px auto;
  position: relative;
  z-index: 100;
`;
