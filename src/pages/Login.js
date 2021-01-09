import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PasswordEye } from "../resources/images/index";
export default function Login() {
  const [passwordEyeFlag, setPasswordEyeFlag] = useState(false);
  const [emailInputFlag, setEmailInputFlag] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInputFlag, setPasswordInputFlag] = useState(false);

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
    if (event.target.value === "") setEmailInputFlag(false);
    else setEmailInputFlag(true);
    // if (event.target.value.includes("@")) {
    //   setEmailInputCorrection(true);
    // } else setEmailInputCorrection(false);
  };
  const handlePasswordInput = (event) => {
    if (event.target.value === "") setPasswordInputFlag(false);
    else setPasswordInputFlag(true);
    // passwordNumberCheck = event.target.value.search(/[0-9]/g);
    // passwordLetterCheck = event.target.value.search(/[A-Za-z]/g);
    // if (
    //   PW_TYPE.test(event.target.value) &&
    //   passwordNumberCheck !== -1 &&
    //   passwordLetterCheck !== -1
    // ) {
    //   setPasswordInputCorrection(true);
    // } else setPasswordInputCorrection(false);
  };

  return (
    <Wrapper>
      <LoginHeader>로그인 해주세요</LoginHeader>
      <InputRow
        onChange={handleEmailInput}
        inputCheck={emailInputFlag}
        style={{ marginTop: "46px" }}
      >
        <LoginInput type="text" placeholder="이메일 주소" />
      </InputRow>
      <InputRow
        onChange={handlePasswordInput}
        inputCheck={passwordInputFlag}
        style={{ marginTop: "31px" }}
      >
        <LoginInput
          type={passwordEyeFlag ? "text" : "password"}
          placeholder="비밀번호"
        />
        <PasswordEyeIcon
          src={PasswordEye}
          onClick={() => setPasswordEyeFlag(!passwordEyeFlag)}
        />
      </InputRow>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-left: 17px;
  margin-right: 17px;
`;
const LoginHeader = styled.div`
  margin-top: 32px;
  height: 52px;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: -1px;
  text-align: left;
  color: black;
`;

const LoginInput = styled.input`
  //padding-bottom 얼마인지 물어보기.
  padding-bottom: 13px;
  padding-left: 7.5px;
  border: none;

  height: 23px;

  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;

  :focus {
    outline: none;
  }
  ::placeholder {
    font-family: "Noto Sans KR";
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: -1px;
    text-align: left;
    color: #d1d1d1;
  }
`;

const InputRow = styled.div`
  display: flex;
  position: relative;
  transition: 0.4s ease-in-out;
  border-bottom: 1px solid #d1d1d1;

  ${(props) =>
    props.inputCheck &&
    css`
      transition: 0.4s ease-in-out;
      border-bottom: 1px solid #505050;
    `}
`;

const PasswordEyeIcon = styled.img`
  position: absolute;
  right: 0px;
  width: 24px;
  height: 24px;
`;
