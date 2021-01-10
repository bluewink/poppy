import React from "react";
import styled, { css } from "styled-components";

export default function PinkButton({ marginTop, content, wid, hgt }) {
  return (
    <ButtonContainer style={{ marginTop: marginTop }}>
      <NextButton style={{ width: wid, height: hgt }}>{content}</NextButton>
    </ButtonContainer>
  );
}

const NextButton = styled.button`
  text-decoration: none;
  outline: none;
  border: none;

  padding: 0 25px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  /* or 240% */

  color: #ffffff;

  background: #ff9777;
  box-shadow: 0px 4px 10px rgba(191, 170, 114, 0.35);
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -17px;
`;
