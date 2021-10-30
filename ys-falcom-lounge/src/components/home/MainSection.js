import React from 'react';
import styled from 'styled-components';
import MainBg from '../../lib/images/home/ys9-adol-main.jpg';

const MainSection = (props) => {
  return (
    <Wrapper>
      <MainTextDiv>
        <Title>34-year Anniversary</Title>
        <Desc>
          Action role-playing game developed by Nihon Falcom. <br /> First one released in <span>1987</span>.
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
  height: 450px;
  display: flex;
  background: #1a1a1a;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 40px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;

const MainTextDiv = styled.div`
  flex: 1;
  min-width: 400px;
  /* max-width: 600px; */
  height: 100%;
  padding: 16px 36px;
  /* background: #1a1a1a; */
  color: #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* &::after {
    z-index: 10;
    background: linear-gradient(to right, #131313 20%, rgba(0, 0, 0, 0.5) 80%);
    height: 100%;
    width: 50px;
    content: '';
  } */
`;

const Title = styled.div`
  width: 70%;
  /* background: lightcoral; */
  padding: 24px 32px;
  margin-top: 20px;
  font-size: 50px;
  font-weight: 700;
  text-align: left;
`;

const Desc = styled.div`
  width: 70%;
  padding: 24px 32px;

  font-size: 20px;
  /* background: lightsteelblue; */
  text-align: left;

  span {
    font-style: italic;
    font-weight: 600;
  }
`;

const MainBgDiv = styled.div`
  flex: 1.1;
  /* min-width: 100%; */
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  overflow: hidden;
  height: 100%;

  /* box-shadow: 28px 28px 28px 28px #181818 inset; */
  img {
    height: 400px;
  }

  /* img::before {
    z-index: 1;
    background: linear-gradient(to right, #131313 90%, #131313 10%);
    height: 100%;
    width: 300px;
    content: '';
  } */
`;

export default MainSection;
