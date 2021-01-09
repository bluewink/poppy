import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";
import { TermDetail } from "../resources/images";

export default function Term() {
  const [allChecked, setAllChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
  const [privateChecked, setPrivateChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  useEffect(() => {
    if (allChecked) {
      setLocationChecked(true);
      setPrivateChecked(true);
      setMarketingChecked(true);
    }
  }, [allChecked]);
  useEffect(() => {
    if (!marketingChecked || !locationChecked || !privateChecked)
      setAllChecked(false);
  }, [marketingChecked, locationChecked, privateChecked]);

  return (
    <Wrapper>
      <TermHeader>
        안녕하세요!
        <br />
        이용약관에 동의해주세요.
      </TermHeader>
      <TermCheckContainer>
        <CheckAllRow>
          <Checkbox
            checked={allChecked}
            onChange={(value) => setAllChecked(value)}
          ></Checkbox>
          <CheckTitle>약관 전체동의</CheckTitle>
        </CheckAllRow>
        <TermCheckBox>
          <CheckRow style={{ paddingTop: "16px" }}>
            <Checkbox
              checked={locationChecked}
              onChange={(value) => setLocationChecked(value)}
            ></Checkbox>
            <CheckTitle>(필수) 위치기반 서비스 이용약관 동의</CheckTitle>
            <TermDetailIcon src={TermDetail} />
          </CheckRow>
          <CheckRow style={{ paddingTop: "22px" }}>
            <Checkbox
              checked={privateChecked}
              onChange={(value) => setPrivateChecked(value)}
            ></Checkbox>
            <CheckTitle>(필수) 개인정보 처리방침 동의</CheckTitle>
            <TermDetailIcon src={TermDetail} />
          </CheckRow>
          <CheckRow style={{ paddingTop: "20px", paddingBottom: "27px" }}>
            <Checkbox
              checked={marketingChecked}
              onChange={(value) => setMarketingChecked(value)}
            ></Checkbox>
            <CheckTitle>(선택) 이벤트 및 마케팅 정보 수신 동의</CheckTitle>
            <TermDetailIcon src={TermDetail} />
          </CheckRow>
        </TermCheckBox>
      </TermCheckContainer>
      <ButtonContainer>
        {locationChecked && privateChecked ? (
          <Link to="/register">
            <NextButton>확인</NextButton>
          </Link>
        ) : (
          <NextButton>확인</NextButton>
        )}
      </ButtonContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-left: 16px;
`;
const TermHeader = styled.div`
  /* width: 314px; */
  height: 61px;
  margin-top: 32px;

  font-family: "Noto Sans KR";
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: -1px;
  text-align: left;
`;
const TermCheckContainer = styled.div`
  margin-top: 65px;
  height: 192px;
`;
const CheckAllRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  height: 25px;

  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: -1px;
  text-align: left;
`;
const TermCheckBox = styled.div`
  margin-top: 10px;
  margin-right: 16px;
  height: 157px;

  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(129, 129, 129, 0.18);
  background-color: #fafafa;
`;
const CheckRow = styled.div`
  margin-left: 14px;
  position: relative;
  display: flex;
  align-items: center;
  height: 24px;

  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;
const TermDetailIcon = styled.img`
  position: absolute;
  width: 8px;
  height: 12px;
  right: 20.8px;
`;
const CheckTitle = styled.span`
  margin-left: 10px;
`;

const NextButton = styled.button`
  text-decoration: none;

  width: 87px;
  height: 46px;
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

const ButtonContainer = styled.div`
  margin-left: -16px;
  margin-top: 219px;
  display: flex;
  justify-content: center;
`;
