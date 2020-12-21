import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Landing from "./pages/Landing.js";
import Search from "./pages/Search.js";
export default function App() {
  return (
    <MobileSize>
      <div>Poppy</div>
      <Header />
      <Search />
      {/* <Landing /> */}

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
