import React from "react";
import styled, { css } from "styled-components";

import NavBar from "../components/NavBar";

export default function FirstTerm() {

    const text = `이벤트 및 마케팅 정보 수신동의

    1. 광고성 정보의 이용목적

    이웃집뽀삐가 제공하는 이용자 맞춤형 서비스 및 상품 추천, 각종 경품 행사, 이벤트 등의 광고성 정보를 전자우편이나 서신우편, 문자(SMS 또는 카카오 알림톡), 푸시, 전화 등을 통해 이용자에게 제공합니다.

    이웃집뽀삐는 거부하실 수 있으며 동의 이후에라도 고객의 의사에 따라 동의를 철회할 수 있습니다. 동의를 거부하시더라도 이웃집뽀삐가 제공하는 서비스의 이용에 제한이 되지 않습니다. 단, 할인, 이벤트 및 이용자 맞춤형 상품 추천 등의 마케팅 정보 안내 서비스가 제한됩니다.

    2. 미동의 시 불이익 사항

    개인정보보호법 제22조 제5항에 의해 선택정보 사항에 대해서는 동의 거부하시더라도 서비스 이용에 제한되지 않습니다. 단, 할인, 이벤트 및 이용자 맞춤형 상품 추천 등의 마케팅 정보 안내 서비스가 제한됩니다.

    3. 서비스 정보 수신 동의 철회

    이웃집뽀삐에서 제공하는 마케팅 정보를 원하지 않을 경우 ‘내 정보 > 개인 정보 수정’에서 철회를 요청할 수 있습니다. 또한 향후 마케팅 활용에 새롭게 동의하고자 하는 경우에는 ‘내 정보  > 개인 정보 수정’에서 동의하실 수 있습니다.
    
    시행일자 : 2021.01.13
    `;


  return (
    <div>
      <NavBar titleName="이용약관" />
      <Wrapper>
        <TermContent>
        {text.split('\n').map((item, i) => <p key={i}>{item}</p>)}
  
        </TermContent>

      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin-left: 24px;
  margin-right: 24px;
`;
const TermContent = styled.div`
  /* width: 327px;
  height: 100px; */
  /* margin: 30px 24px 52px; */
  margin-top: 30px;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
  white-space:pre-line;
`;
