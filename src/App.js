import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Landing from "./pages/Landing.js";
import Search from "./pages/Search.js";
import Address from "./pages/Address";
import Confirm from "./pages/Confirm";
import Done from "./pages/Done";
import Detail from "./pages/Detail";
import {BrowserRouter, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <MobileSize>
        <div>Poppy</div>
        <Header />
        <Search />
        <Route path={["/landingpage", "/"]} exact component ={Landing} />
        <Route path="/takeoffer" exact component={Search} />
        <Route path="/address" exact component={Address} />
        <Route path="/confirm" exact component={Confirm} />
        <Route path="/survey" exact component={Done} />
        <Route path="/takeofferdetail" exact component={Detail} />
      </MobileSize>
    </BrowserRouter>
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
