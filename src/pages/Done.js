import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import { survey_poppy } from "../resources/images";

export default function Confirm() {
  const [background, setBackground] = useState(false);
  return (
    <>
      <Wrapper>
        <Header
          isAddress={false}
          background={background}
          setBackground={setBackground}
        />
        <PageTitle>
          예약이 <br />
          완료되었습니다!
        </PageTitle>
        <SubLabel1>
          돌보미가
          <br /> <Bold>예약 내용을 확인한 뒤에</Bold>
          <br />
        </SubLabel1>
        <SubLabel2>
          예약자분께 직접
          <br />
          연락을 드릴거예요.
        </SubLabel2>
        <PoppyImage src={survey_poppy} />
        <NextBox>
          <Link
            to={{
              pathname: "/takeoffer",
              state: { address: "서울시 마포구 백범로 35" },
            }}
          >
            <NextButton>홈으로</NextButton>
          </Link>
        </NextBox>
      </Wrapper>
      {background && (
        <DarkBackground
          onClick={() => {
            setBackground(false);
          }}
        />
      )}
    </>
  );
}

const DarkBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.45);
`;
const Wrapper = styled.div`
  height: 100%;
`;

const PageTitle = styled.div`
  margin: 3px 10px 0 16px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31.5px;

  letter-spacing: -1px;

  color: #131313;
`;

const SubLabel1 = styled.div`
  margin: 21px 100px 0 16px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: 0.15px;

  color: #393939;
`;

const SubLabel2 = styled.div`
  margin: 10px 100px 0 16px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: 0.15px;

  color: #393939;
`;

const Bold = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  /* or 141% */

  letter-spacing: 0.15px;

  color: #393939;
`;

const PoppyImage = styled.img`
  position: absolute;
  bottom: 100px;
  right: 16px;
`;

const NextBox = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.button`
  margin: 10px auto;
  text-decoration: none;

  width: 148px;

  outline: none;
  border: none;

  padding: 0 25px;

  font-family: Noto Sans KR;
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
