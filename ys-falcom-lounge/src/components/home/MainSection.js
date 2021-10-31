import React from 'react';
import styled from 'styled-components';
import MainBg from '../../lib/images/home/ys9-adol-main.jpg';

const MainSection = (props) => {
  return (
    <Wrapper>
      <MainTextDiv>
        <Title>34-year Anniversary!</Title>
        <Desc>
          Ys is an action role-playing game series developed by Nihon Falcom. The first series was released in <strong>1987</strong>, and
          the latest one, <em>Monstrum Nox</em>, released in <strong>2019</strong>. We are happily waiting for Adol's next adventure!
        </Desc>
      </MainTextDiv>
      <MainBgDiv>
        <img src={MainBg} alt='main-background' />
      </MainBgDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 2;
  width: 100vw;
  height: 500px;
  display: flex;
  background: #1a1a1a;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 40px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;

const MainTextDiv = styled.div`
  flex: 0.92;
  min-width: 390px;
  padding: 0 40px;
  padding-top: 80px;
  color: #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const Title = styled.div`
  width: 85%;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 36px;
`;

const Desc = styled.div`
  width: 85%;
  font-size: 20px;
  line-height: 1.7;
`;

const MainBgDiv = styled.div`
  flex: 1.08;

  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  overflow: hidden;
  height: 100%;

  img {
    height: 480px;
    min-width: 854px;
  }
`;

export default MainSection;
