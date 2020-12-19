import React from 'react';
import styled from 'styled-components';

import { img1, img2 } from '../resources/images';

export default function Detail() {
  return (
    <Wrapper>
      <Header></Header>
      <Thumbnail src={img1} />
      <ProfileBox>
        <ProfileThumbnail src={img2} />
        <ProfileTextBox>
          <ProfileTitle>안심하고 맡겨주세요:)</ProfileTitle>
          <ProfileAddress>서울시 마포구 상수동</ProfileAddress>
        </ProfileTextBox>
      </ProfileBox>
      <IntroduceBox>
        <IntroduceTitle>이웃 소개</IntroduceTitle>
        <IntroduceText>
          안녕하세요 이웃집 뽀삐 돌봄 이웃 홍*동 입니다. 저는 지금 사랑스러운 저의 반려견인 뽀삐(푸들, 4살)와 살고
          있습니다. 남자아이고, 중성화 했어요. 저희 뽀삐는 순한 성격이라 웬만한 친구들과 사이좋게 지내요. 성격이 안 맞는
          친구를 만나면 관심을 주지 않아요. 뽀삐와 시간을 보내면서 저는 반려견을 키우면서 책임감에 대한 ...{' '}
          <MoreButton>더보기</MoreButton>
        </IntroduceText>
      </IntroduceBox>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Header = styled.div`
  width: 100%;
  height: 60px;

  background-color: #f38f71;
`;

const Thumbnail = styled.img`
  width: 100%;

  content: object-fit;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-top: 15px;
`;

const ProfileThumbnail = styled.img`
  margin-left: 20px;
  padding: 5px;
  border-radius: 50px;
`;

const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-content: flex-end;
`;

const ProfileTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  letter-spacing: -1px;
`;

const ProfileAddress = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -1px;
`;

const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 22px 25px;
`;

const IntroduceTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;

  letter-spacing: -1px;

  color: #505050;
`;

const IntroduceText = styled.div`
  margin-top: 8px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  letter-spacing: -1px;

  color: #9d9d9d;
`;

const MoreButton = styled.button`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;

  letter-spacing: -1px;

  color: #4a4a4a;

  border: 0;
  outline: 0;
`;
