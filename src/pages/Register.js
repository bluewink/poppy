import React from "react";
import styled from "styled-components";
export default function Register() {
  return (
    <Wrapper>
      <RegisterHeader>
        회원님의
        <br />
        정보를 입력해주세요.
      </RegisterHeader>
      <RegisterForm>
        <RegisterInput type="text" placeholder="이름" />
        <RequiredMessage>필수 입력 항목입니다.</RequiredMessage>
        <RegisterInput type="email" placeholder="이메일 주소" />
        <RequiredMessage>필수 입력 항목입니다.</RequiredMessage>
        <RegisterInput type="text" placeholder="인증코드" />
        <RequiredMessage>필수 입력 항목입니다.</RequiredMessage>
        <RegisterInput type="password" placeholder="비밀번호" />
        <RegisterInput type="password" placeholder="비밀번호 확인" />
      </RegisterForm>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-left: 17px;
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
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid;
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
`;
