import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Background = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <HomeBg>{children}</HomeBg>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  padding: 48px 0;
  background: rgba(255, 255, 255, 0.3);
`;

const HomeBg = styled.div`
  width: 70vw;
  min-width: 600px;
  min-height: 65vh;
  margin: auto;
  margin-bottom: 32px;
  padding: 32px 32px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Background;
