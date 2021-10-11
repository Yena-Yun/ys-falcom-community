import React from 'react';
import styled from 'styled-components';
import ys_logo from '../images/header_logo.png';
import { useHistory } from 'react-router-dom';
// import Burger from './Burger';

const Header = (props) => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <LogoImage src={ys_logo} />
        <NavMenu>
          <NavLink>Walkthrough</NavLink>
          <NavLink onClick={() => history.push('/tournament')}>Bias Tournament</NavLink>
        </NavMenu>
      </Wrapper>
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

const NavLink = styled.div`
  color: #fff;
  cursor: pointer;
`;

// header를 fixed로 설정했을 때 header 하단에 나오는 콘텐츠와 헤더 위치가 겹치는 것 방지
// const Spacer = styled.div`
//   height: 1rem;
// `;

export default Header;
