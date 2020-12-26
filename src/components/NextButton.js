import React from 'react';
import styled from 'styled-components';

export default function NextButton({ y, name }) {
  return <Name {...{ y }}>{name}</Name>;
}

const Name = styled.button`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 60px;

  border: 0;
  outline: 0;
  padding: 11px 100px 9px 91px;
  box-shadow: 0 4px 10px 0 rgba(191, 170, 114, 0.35);
  background-color: #f38f71;

  // Text
  // font-family: DMSans;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  display: ${({ y }) => (y > 100 ? 'block' : 'none')};
`;
