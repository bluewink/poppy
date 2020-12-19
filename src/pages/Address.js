import React, { Fragment } from 'react';
import styled from 'styled-components';
import { TextUnderLine, LocationIc, LocationBackground } from '../resources/images';

export default function Address() {
  return (
    <Wrapper>
      <Background src={LocationBackground} />
      <Fragment>
        <Title>
          현 지역이
          <br />
          어디인가요?
        </Title>
        <UnderLineImageView src={TextUnderLine} />
      </Fragment>
      <Fragment>
        <LocationImageView src={LocationIc} />
        <UnderLineView />
        <AddressButton>검색</AddressButton>
      </Fragment>
      <NextButton>확인</NextButton>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.div`
  position: absolute;
  left: 20px;
  top: 110px;

  z-index: 1;

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

  z-index: 1;
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
