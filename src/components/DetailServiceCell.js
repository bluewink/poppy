import React, { useState } from 'react';
import styled from 'styled-components';
import { detailIc1, detailIc2, detailIc3, detailIc4, detailIc5, detailIc6 } from '../resources/images';

export default function DetailServiceCell({ idx }) {
  const [imgName, setImgName] = useState();

  switch (idx) {
    case 1:
      setImgName(detailIc1);
    case 2:
      setImgName(detailIc2);
    case 3:
      setImgName(detailIc3);
    case 4:
      setImgName(detailIc4);
    case 5:
      setImgName(detailIc5);
    case 6:
      setImgName(detailIc6);
  }

  return (
    <Wrapper>
      <Icon src={imgName} />
      <Title>{imgName}</Title>
      <SubTitle></SubTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Icon = styled.img``;
const Title = styled.div``;

const SubTitle = styled.div``;
