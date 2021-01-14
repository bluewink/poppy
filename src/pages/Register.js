import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Timer from "../components/Timer";
import { PasswordEye } from "../resources/images/index";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
export default function Register({ location }) {
  const [nameInputFlag, setNameInputFlag] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInputFlag, setEmailInputFlag] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailInputCorrection, setEmailInputCorrection] = useState(false);
  const [codeInputFlag, setCodeInputFlag] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [passwordInputFlag, setPasswordInputFlag] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputCorrection, setPasswordInputCorrection] = useState(false);
  const [passwordConfirmInputFlag, setPasswordConfirmInputFlag] = useState(
    false
  );
  const [passwordconfirmInput, setPasswordconfirmInput] = useState("");
  const [passwordEyeFlag, setPasswordEyeFlag] = useState(false);
  const [passwordConfirmEyeFlag, setPasswordConfirmEyeFlag] = useState(false);
  const [submitCodeTime, setSubmitCodeTime] = useState(600);
  const [timerTrigger, setTimerTrigger] = useState(false);
  const [codePassFlag, setCodePassFlag] = useState(0);

  const PW_TYPE = /^[A-Za-z0-9+]{8,16}$/;

  const marketingChecked = location.state.marketing;

  const handleNameInput = (event) => {
    setNameInput(event.target.value);

    if (event.target.value === "") setNameInputFlag(false);
    else setNameInputFlag(true);
  };

  const handleEmailInput = (event) => {
    setEmailInput(event.target.value);
    if (event.target.value === "") setEmailInputFlag(false);
    else setEmailInputFlag(true);
    if (event.target.value.includes("@")) {
      setEmailInputCorrection(true);
    } else setEmailInputCorrection(false);
  };

  const handleCodeInput = (event) => {
    setCodeInput(event.target.value);
    if (event.target.value === "") setCodeInputFlag(false);
    else setCodeInputFlag(true);
  };

  var passwordNumberCheck;
  var passwordLetterCheck;

  const handlePasswordInput = (event) => {
    setPasswordInput(event.target.value);
    if (event.target.value === "") setPasswordInputFlag(false);
    else setPasswordInputFlag(true);
    passwordNumberCheck = event.target.value.search(/[0-9]/g);
    passwordLetterCheck = event.target.value.search(/[A-Za-z]/g);
    if (
      PW_TYPE.test(event.target.value) &&
      passwordNumberCheck !== -1 &&
      passwordLetterCheck !== -1
    ) {
      setPasswordInputCorrection(true);
    } else setPasswordInputCorrection(false);
  };

  const handlePasswordConfirmInput = (event) => {
    setPasswordconfirmInput(event.target.value);
    if (event.target.value === "") setPasswordConfirmInputFlag(false);
    else setPasswordConfirmInputFlag(true);
  };

  const handleSendCodeButton = (event) => {
    event.preventDefault();

    setTimerTrigger(!timerTrigger);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      method: "POST",
      url:
        "register/" +
        nameInput +
        "/" +
        emailInput +
        "/" +
        passwordInput +
        "/" +
        codePassFlag,
    };

    await axios(dataToSend).then((res) => {
      console.log("회원가입 성공!");
    });
  };

  return (
    <>
      <NavBar backTo titleName="회원가입" />
      <Wrapper>
        <RegisterHeader>
          회원님의
          <br />
          정보를 입력해주세요.
        </RegisterHeader>
        <RegisterForm>
          <InputRow onChange={handleNameInput} inputCheck={nameInputFlag}>
            <RegisterInput type="text" placeholder="이름" />
          </InputRow>
          <RequiredMessage inputCheck={nameInputFlag}>
            필수 입력 항목입니다.
          </RequiredMessage>
          <InputRow
            onChange={handleEmailInput}
            inputCheck={emailInputFlag}
            style={{ marginTop: "17px" }}
          >
            <RegisterInput type="text" placeholder="이메일 주소" />
            <SendCodeButton onClick={handleSendCodeButton}>
              인증코드 전송
            </SendCodeButton>
          </InputRow>
          <RequiredMessage>
            {emailInputFlag ? null : "필수 입력 항목입니다."}
            {!emailInputFlag || emailInputCorrection
              ? null
              : "이메일 형태로 입력해 주세요."}
          </RequiredMessage>
          <InputRow
            onChange={handleCodeInput}
            inputCheck={codeInputFlag}
            style={{ marginTop: "17px" }}
          >
            <RegisterInput type="text" placeholder="인증코드" />
            <CodeTimer>
              <Timer
                mm="3"
                ss="0"
                timerTrigger={timerTrigger}
                {...{ setTimerTrigger }}
              />
            </CodeTimer>
          </InputRow>
          <RequiredMessage inputCheck={codeInputFlag}>
            필수 입력 항목입니다.
          </RequiredMessage>
          <InputRow
            onChange={handlePasswordInput}
            inputCheck={passwordInputFlag}
            style={{ marginTop: "51px" }}
          >
            <RegisterInput
              type={passwordEyeFlag ? "text" : "password"}
              placeholder="비밀번호"
            />
            <PasswordEyeIcon
              src={PasswordEye}
              onClick={() => setPasswordEyeFlag(!passwordEyeFlag)}
            />
          </InputRow>
          <RequiredMessage>
            {passwordInputCorrection
              ? null
              : "영문/숫자 8-16자 조합으로 입력해주세요."}
          </RequiredMessage>
          <InputRow
            onChange={handlePasswordConfirmInput}
            inputCheck={passwordConfirmInputFlag}
            style={{ marginTop: "17px" }}
          >
            <RegisterInput
              type={passwordConfirmEyeFlag ? "text" : "password"}
              placeholder="비밀번호 확인"
            />
            <PasswordEyeIcon
              src={PasswordEye}
              onClick={() => setPasswordConfirmEyeFlag(!passwordConfirmEyeFlag)}
            />
          </InputRow>
        </RegisterForm>
        <ButtonContainer>
          <Link to="/registerdone">
            <NextButton type="submit" onSubmit={handleRegisterSubmit}>
              회원가입
            </NextButton>
          </Link>
        </ButtonContainer>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin-left: 17px;
  margin-right: 17px;
`;

const RegisterHeader = styled.div`
  margin-top: 32px;
  height: 61px;

  font-family: "Noto Sans KR";
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: -1px;
  text-align: left;
`;
const RegisterForm = styled.form`
  margin-top: 58px;
  display: flex;
  flex-direction: column;
`;
const RegisterInput = styled.input`
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

const RequiredMessage = styled.div`
  margin-top: 5px;
  margin-left: 7.5px;
  height: 15px;
  font-family: "Noto Sans KR";
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -1px;
  text-align: left;

  color: #ff9777;

  ${(props) =>
    props.inputCheck &&
    css`
      color: #ffffff;
    `}
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

const SendCodeButton = styled.button`
  position: absolute;
  right: 0px;
  width: 90px;
  height: 26px;
  border: none;
  border-radius: 15px;
  background-color: #ff9777;

  font-family: "Noto Sans KR";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -1px;
  text-align: center;
  color: #ffffff;
  :focus {
    outline: none;
  }
`;

const CodeTimer = styled.div`
  padding-top: 4px;
  position: absolute;
  right: 0px;
  height: 15px;

  font-family: "Noto Sans KR";
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: -1px;
  text-align: right;
  color: #787878;
`;
const PasswordEyeIcon = styled.img`
  position: absolute;
  right: 0px;
  width: 24px;
  height: 24px;
`;

// 68px
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -17px;
`;

const NextButton = styled.button`
  text-decoration: none;
  margin-top: 68px;

  width: 124px;
  height: 46px;

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
