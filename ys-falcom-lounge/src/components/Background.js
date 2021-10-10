import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Background = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <HomeBg>{children}</HomeBg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
`;

const HomeBg = styled.div`
  width: 70%;
  min-height: 95%;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Background;
