import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <div>
      <TopHeader>
        <img src={"../resources/images/poppy.png"} />
      </TopHeader>
    </div>
  );
}

const TopHeader = styled.div`
  position: absolute;
  width: 375px;
  height: 128px;
  left: 0px;
  top: -47px;
  background: #f38f71;
  box-shadow: 0px 4px 10px rgba(191, 170, 114, 0.35);
`;
