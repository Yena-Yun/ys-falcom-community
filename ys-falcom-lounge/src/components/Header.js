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
        {/* <LogoImage src={ys_logo} /> */}
        {/* <p>YS Falcom Lounge</p> */}
      </Wrapper>
      <Spacer />
    </>
  );
};

const Wrapper = styled.div`
  /* position: sticky; */
  /* top: 0; */
  z-index: 1;
  width: 100vw;
  height: 150px;
  background: url('../images/ys2-background.jpg');
  /* background: #000; */
  background-size: cover;

  /* .logo {
    padding: 15px 30px;
    display: flex;
  } */
`;

// const LogoImage = styled.img`
//   display: block;
//   width: 120px;
//   border: none;
//   cursor: pointer;
// `;

// 헤더를 fixed로 설정하면 헤더 하단에 나오는 콘텐츠가 헤더의 위치가 겹치는 것 방지
const Spacer = styled.div`
  height: 3rem;
`;

export default Header;
