/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const MainEntry = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <MainHeader>
        <MainTitle>Welcome to Ys-Lounge!</MainTitle>
        <BtnGroup>
          <MoveBtn onClick={() => history.push('/home')}>라운지로 가기</MoveBtn>
          <MoveBtn>
            <a href='https://play-ys.com/' target='_blank'>
              이스 공식 홈페이지
            </a>
          </MoveBtn>
        </BtnGroup>
      </MainHeader>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MainTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const MainHeader = styled.div`
  background: rgba(255, 255, 255, 0.5);
  padding: 8px 0 36px;
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoveBtn = styled.button`
  font-size: 16px;
  background: #000;
  color: #fff;
  width: 300px;
  height: 40px;
  box-shadow: inset 000px 0px 0px 0px #364fc7;
  -webkit-transition: all 0.6s cubic-bezier(0.9, 0.24, 0.4, 1);
  transition: all 0.6s cubic-bezier(0.9, 0.24, 0.4, 1);

  &:first-child:before {
    content: '';
    position: absolute;
    left: 0%;
    opacity: 0;
    top: 0;
    z-index: -1;
    -webkit-transition: height 0.4s cubic-bezier(0.9, 1, 0.32, 1), opacity 0.1s ease;
    transition: height 0.4s cubic-bezier(0.9, 1, 0.32, 1), opacity 0.1s ease;
  }

  &:first-child:hover::before {
    opacity: 1;
    height: 100%;
  }

  &:first-child:hover {
    box-shadow: inset 00px 100px 0px 0px #d42d2dd3;
  }

  &:first-child {
    margin-bottom: 16px;
  }
`;

export default MainEntry;
