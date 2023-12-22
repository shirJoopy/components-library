import React from 'react';
import styled from 'styled-components';
import logoImg from '../../../public/Images/header-logo-joopy@2x.png';

const HeaderWrapper = styled.div`
  height: auto;
  border: 0 none;
  position: relative;
  background-color: #fff;
  &::before {
    content: "";
    z-index: 1;
    background-color: #fff;
    display: block;
    width: 100%;
    height: 24px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &::after {
    content: "";
    background-color: transparent;
    z-index: 0;
    display: block;
    width: 100%;
    border-radius: 100%;
    height: 12px;
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, .3);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

const ImgCont = styled.a`
  margin: 0 auto;
  width: 260px;
  display: block;
  opacity: .98;
`;

const LogoImg = styled.img`
  display: block;
  max-width: 100%;
`;

const Header: React.FC = () => (
  <HeaderWrapper className="header login">
    <Container className="container">
      <h1 className="login-logo" style={{ padding: '40px 0 28px ', margin: 0 }}>
        <ImgCont href="http://www.joopy.com" target="_blank" title="Joopy">
          <LogoImg src={logoImg} alt="Joopy" />
        </ImgCont>
      </h1>
    </Container>
  </HeaderWrapper>
);

export default Header;
