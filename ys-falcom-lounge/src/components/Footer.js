import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  return (
    <Wrapper>
      <LeftColumn>
        <p>© 2021 Cheryl Yun - All rights reserved.</p>
      </LeftColumn>
      <RightColumn>
        <RightBtn>Terms</RightBtn>
        <RightBtn>Privacy</RightBtn>
      </RightColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #1a1a1a;
  width: 100vw;
  height: 6vh;
  padding: 8px 0;
  display: flex;
  margin-bottom: -28px;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #000;
`;

const LeftColumn = styled.div`
  font-size: 14px;
  color: #d3d3d3;
  padding: 0 36px;
`;

const RightColumn = styled.div`
  /* flex: 1; */
  width: 200px;
  display: flex;
  justify-content: center;
`;

const RightBtn = styled.button`
  font-size: 14px;
  color: #d3d3d3;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;

export default Footer;
