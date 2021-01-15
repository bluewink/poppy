import React from "react";
import styled from "styled-components";
import { loadingPoppy } from "../resources/images";

export default function Loading() {
  return (
    <Wrapper>
      <PoppyImg src={loadingPoppy} />
      <Message>loading...</Message>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
const PoppyImg = styled.img`
  width: 146px;
  height: 58px;
`;
const Message = styled.div`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  /* or 139% */

  text-align: center;
  letter-spacing: -1px;

  /* 주황 */

  color: #ff9777;
`;
