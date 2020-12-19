import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import { TextUnderLine, LocationIc, LocationBackground } from '../resources/images';
import DaumAPI from '../components/DaumAPI';

export default function Address() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressText, setAddressText] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      <Background src={LocationBackground} />
      <>
        <UnderLineImageView src={TextUnderLine} />
        <Title>
          현 지역이
          <br />
          어디인가요?
        </Title>
      </>
      <>
        <LocationImageView src={LocationIc} />
        <AddressLabel>{addressText}</AddressLabel>
        <UnderLineView />
        <AddressButton onClick={openModal}>검색</AddressButton>
      </>
      <>
        <ExampleTitle>
          도로명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Example>예)무학로33,도산대로 8길23</Example>
          <br></br>
          동주소 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Example>예)논현동11-1</Example>
          <br></br>
          건물명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Example>예)역삼동푸르지오,텐즈힐</Example>
        </ExampleTitle>
      </>
      <NextButton>확인</NextButton>
      <DaumAPI isOpen={isModalOpen} close={closeModal} {...{ setAddressText }} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.div`
  position: absolute;
  left: 20px;
  top: 110px;

  z-index: 0;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -1px;

  color: #131313;
`;

const UnderLineImageView = styled.img`
  position: absolute;
  left: -29px;
  top: 160px;

  z-index: 0;
`;

const LocationImageView = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 12px;
  top: 208px;
`;

const AddressLabel = styled.div`
  position: absolute;
  left: 38px;
  top: 210px;

  font-family: DMSans;
  font-size: 18px;
  font-weight: bold;
`;

const UnderLineView = styled.div`
  position: absolute;
  width: 233px;
  height: 0px;
  left: 17px;
  top: 238px;

  border: 1px solid #aaaaaa;
`;

const AddressButton = styled.button`
  position: absolute;
  width: 60px;
  height: 28px;
  left: 256px;
  top: 209px;

  background: #ffffff;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 10px;
  outline: 0;

  z-index: 0;
`;

const ExampleTitle = styled.div`
  position: absolute;
  left: 17px;
  top: 260px;

  font-family: NotoSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -1px;
  text-align: left;
  color: #868686;
`;

const Example = styled.span`
  color: #c1c1c1;
`;

const Background = styled.img`
  width: 100%;
`;

const NextButton = styled.button`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 60px;

  border: 0;
  padding: 11px 100px 9px 91px;
  box-shadow: 0 4px 10px 0 rgba(191, 170, 114, 0.35);
  background-color: #f38f71;

  // Text
  font-family: DMSans;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
