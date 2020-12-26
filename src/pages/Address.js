import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import { TextUnderLine, LocationIc, LocationBackground, address_poppy } from '../resources/images';
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
            <AddressInput type="text" value={addressText} disabled />

            <AddressButton onClick={openModal}>주소검색</AddressButton>
          </AddressBox>
          <ExampleTitle>
            도로명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Example>예)무학로33,도산대로 8길23</Example>
            <br></br>
            동주소 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Example>예)논현동11-1</Example>
            <br></br>
            건물명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Example>예)역삼동푸르지오,텐즈힐</Example>
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

const Wrapper = styled.div``;

const Title = styled.div`
  margin: 14px 16px;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -1px;

  color: #131313;
`;

const AddressInput = styled.input`
  margin: 18px 6px 0px 17px;

  width: 62%;
  padding: 10px 9px 10px 26px;
  border-radius: 5px;

  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 5px;

  background-color: white;

  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -1px;
  text-align: left;
  color: #505050;
`;

const AddressBox = styled.div`
  display: flex;

  justify-content: flex-start;
  align-content: center;
  align-items: flex-end;
`;

const AddressButton = styled.button`
  padding: 10px 15px;

  background: #f2f2f2;

  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 5px;

  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.5px;
  text-align: center;
  color: #2c2c2c;
`;

const ExampleTitle = styled.div`
  margin: 9px 16.1px;

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

  outline: none;
  border: none;

  padding: 0 25px;

  font-family: DMSans;
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
