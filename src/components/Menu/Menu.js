import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledMenu } from './Menu.styled';

import { logo_ham, login, next, settingIc } from '../../resources/images';

const Menu = ({ open, setOpen, background, setBackground }) => {
  const handleLink = () => {
    setOpen(!open);
    setBackground(!background);
  };

  return (
    <StyledMenu open={open}>
      <TopView>
        <img
          src={logo_ham}
          width="105px;"
          onClick={() => {
            setOpen(!open);
            setBackground(!background);
            console.log('눌림');
          }}
        />

        <LoginBox>
          <LoginWrapper>
            <ProfileImg src={login} width="42px" height="42px" />
            <Link to="/login" style={{ textDecoration: 'none' }} onClick={handleLink}>
              <LoginLabel>로그인 해주세요.</LoginLabel>
            </Link>
          </LoginWrapper>
          <NextImg src={next} width="6px" height="12px" />
        </LoginBox>
        <LineView />
        <MenuWrapper>
          <Link to="/" style={{ textDecoration: 'none' }} onClick={handleLink}>
            <MenuBox>
              <MenuLabel>이웃집뽀삐 소개</MenuLabel>
              <NextImg src={next} width="6px" height="12px" />
            </MenuBox>
          </Link>
        </MenuWrapper>
      </TopView>
      <BottomView>
        <SettingBox>
          <Setting>
            <img src={settingIc} width="23px" height="23px" />
            <SettingLabel>이용약관</SettingLabel>
          </Setting>
        </SettingBox>
      </BottomView>
    </StyledMenu>
  );
};
export default Menu;

const NextImg = styled.img`
  margin-top: 2px;
`;

const MenuWrapper = styled.div`
  margin: 28px 0 0 16px;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  outline: none;
  border: none;
  text-decoration: none;
`;

const MenuLabel = styled.div`
  outline: none;
  border: none;
  text-decoration: none;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  /* or 137% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;
`;

const LineView = styled.div`
  margin: 17px -30px 0 -8px;
  border: 1px solid #e5e5e5;
`;

const BottomView = styled.div`
  margin-left: 22px;
`;

const SettingBox = styled.div`
  margin-bottom: 43px;
`;

const Setting = styled.div`
  display: flex;
  align-items: center;
`;

const SettingLabel = styled.div`
  margin-left: 9px;
  outline: none;
  border: none;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* or 153% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;
`;

const TopView = styled.div`
  margin: 41px 30px 17px 8px;
`;

const ProfileImg = styled.img`
  width: 42px;

  margin-left: 13px;
`;
const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 23px;
`;

const LoginWrapper = styled.div`
  // width: 190px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const LoginLabel = styled.div`
  margin-left: 11px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  /* or 139% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  /* 찐회색 */

  color: #505050;
`;
