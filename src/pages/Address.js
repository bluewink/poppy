import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import { TextUnderLine, LocationBackground, address_poppy, LocationIcon } from '../resources/images';
import DaumAPI from '../components/DaumAPI';

export default function Address() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressText, setAddressText] = useState('');
  const [nextBool, setNextBool] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      {!isModalOpen && (
        <>
          <Header isAddress={true} />
          <Title>
            현 지역이
            <br />
            어디인가요?
          </Title>

          <AddressBox>
            <LocationIc src={LocationIcon} />
            <AddressInput type="text" value={addressText} disabled></AddressInput>

            <AddressButton onClick={openModal}>주소검색</AddressButton>
          </AddressBox>
          <ExampleTitle>
            도로명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Example>예) 무학로33,도산대로 8길23</Example>
            <br></br>
            동주소 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Example>예) 논현동11-1</Example>
            <br></br>
            건물명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Example>예) 역삼동푸르지오,텐즈힐</Example>
          </ExampleTitle>
          <NextBox>
            <Link
              to={{
                pathname: '/takeoffer',
                state: {
                  address: addressText,
                },
              }}
            >
              {nextBool && <NextButton>확인</NextButton>}
            </Link>
          </NextBox>
          <PoppyImage src={address_poppy} />
        </>
      )}

      <DaumAPI isOpen={isModalOpen} close={closeModal} {...{ setAddressText, setNextBool }} />
    </Wrapper>
  );
}

const LocationIc = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: flex-start;
  appearance: none;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  position: absolute;
  left: 6px;
  top: 10px;
  bottom: 10px;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  margin: 14px 16px 0 16px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31.5px;
  /* or 131% */

  letter-spacing: -1px;

  color: #2c2c2c;
`;

const AddressInput = styled.input`
  padding: 11px 9px 12px 26px;
  width: 245px;
  height: 40px;

  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 5px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */
  background-color: #ffffff;
  color: #505050;
`;

const AddressBox = styled.div`
  margin: 32px 30px 0 17px;

  display: flex;
  position: relative;
  justify-content: flex-start;
  align-content: center;
  align-items: stretch;
`;

const AddressButton = styled.button`
  margin: 0 0 0 5px;

  // padding: 12px 13px 13px 13px;

  width: 78px;
  height: 40px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: -0.5px;

  color: #2c2c2c;

  background: #f2f2f2;
  /* light gray */

  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 5px;
`;

const ExampleTitle = styled.div`
  margin: 9px 16.5px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const Example = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  /* or 183% */

  letter-spacing: -1px;

  /* 진연중간회색 */

  color: #bebebe;
`;

const PoppyImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const NextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextButton = styled.button`
  margin: 23px auto;
  text-decoration: none;

  width: 96px;
  outline: none;
  border: none;

  padding: 0 25px;

  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  border-radius: 5px;
  box-shadow: 0 4px 10px 0 rgba(191, 170, 114, 0.35);
  background-color: #ff9777;
`;
