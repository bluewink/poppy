import React, { Fragment } from 'react';
import styled from 'styled-components';
import { TextUnderLine } from '../resources/images';

export default function Address() {
  return (
    <Wrapper>
      <Fragment>
        <Title>
          현 지역이
          <br />
          어디인가요?
        </Title>
        <UnderLineImage src={TextUnderLine} />
      </Fragment>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.div`
  position: absolute;
  left: 4.27%;
  right: 7.47%;
  top: 12.19%;
  bottom: 79.31%;

  z-index: 1;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -1px;

  color: #131313;
`;

const UnderLineImage = styled.img`
  position: absolute;
  left: -7.73%;
  right: 73.87%;
  top: 17.98%;
  bottom: 78.93%;

  z-index: 0;
`;
