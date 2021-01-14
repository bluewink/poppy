import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import Landing from './pages/Landing.js';
import Search from './pages/Search.js';
import Address from './pages/Address';
import Confirm from './pages/Confirm';
import Done from './pages/Done';
import Detail from './pages/Detail';
import { BrowserRouter, Route } from 'react-router-dom';
import DaumAPI from './components/DaumAPI.js';
import Term from './pages/Term';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterDone from './pages/RegisterDone';
import PetsitterMenu from './pages/PetsitterMenu';
import EmptyOffer from './pages/EmptyOffer';
import RequestHistory from './pages/RequestHistory';
import RequestHistoryDetail from './pages/RequestHistoryDetail';
import FirstTerm from './pages/FirstTerm';
export default function App() {
  return (
    <BrowserRouter>
      <MobileSize>
        <Route path={['/landingpage', '/']} exact component={Landing} />
        <Route path="/takeoffer" exact component={Search} />
        <Route path="/address" exact component={Address} />
        <Route path="/confirm" exact component={Confirm} />
        <Route path="/survey" exact component={Done} />
        <Route path="/takeofferdetail" exact component={Detail} />
        <Route path="/daum-address" exact component={DaumAPI} />
        <Route path="/join" exact component={Term} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/registerdone" exact component={RegisterDone} />
        <Route path="/petsittermenu" exact component={PetsitterMenu} />
        <Route path="/emptyoffer" exact component={EmptyOffer} />
        <Route path="/requesthistory" exact component={RequestHistory} />
        <Route path="/requesthistorydetail" exact component={RequestHistoryDetail} />
        <Route path="/firstterm" exact component={FirstTerm} />
      </MobileSize>
    </BrowserRouter>
  );
}

const White = styled.div``;

const MobileSize = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 27rem;
  /* max-width: 375px; */
  height: fit-content;
  min-height: 100vh;
  margin: 0px auto;
  position: relative;
  z-index: 99;
  border: 0.1px solid gray;
`;
