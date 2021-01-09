import React from "react";
import styled from "styled-components";
import { CheckSign } from "../resources/images";
export default function Checkbox({ checked, onChange }) {
  return (
    <div>
      <Border onClick={() => onChange(!checked)}>
        <Indicator bg={checked ? CheckSign : null}></Indicator>
      </Border>
    </div>
  );
}
const Border = styled.div`
  width: 24px;
  height: 24px;
  border: solid 2px #f2f2f2;
  border-radius: 50%;
`;
const Indicator = styled.div`
  width: 24px;
  height: 24px;

  background-image: url(${(props) => props.bg});
  background-size: cover;
`;
