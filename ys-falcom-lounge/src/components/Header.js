import React from 'react';
import styled from 'styled-components';
import ys_logo from '../images/header_logo.png';
import ys_bg from '../images/ys2-background.jpg';
import { Link } from 'react-router-dom';
// import Burger from './Burger';

const Header = (props) => {
  return (
    <>
      <Wrapper>
        <LogoImage src={ys_logo} />
        <NavMenu>
          <Nav>Walkthrough</Nav>
          <Nav>Bias Tournament</Nav>
        </NavMenu>
      </Wrapper>
      <Spacer />
    </>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 11vh;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 35px;
  padding: 20px 0 0 24px;
`;

const NavMenu = styled.nav`
  width: 70vw;
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
`;

const Nav = styled.div`
  color: #fff;
`;

// 헤더를 fixed로 설정하면 헤더 하단에 나오는 콘텐츠가 헤더의 위치가 겹치는 것 방지
const Spacer = styled.div`
  height: 1.5rem;
`;

export default Header;
