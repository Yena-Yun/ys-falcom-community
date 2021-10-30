import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  return (
    <Wrapper>
      {/* <FooterText> */}
      <LeftColumn>
        <p>© 2021 Cheryl Yun. All rights reserved.</p>
      </LeftColumn>
      <RightColumn>
        <Button>Terms</Button>
        <Button>Privacy</Button>
      </RightColumn>
      {/* </FooterText> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #1a1a1a;
  width: 100vw;
  height: 8vh;
  padding: 8px 0;
  display: flex;
  margin-bottom: -28px;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #000;
`;

const FooterText = styled.div``;

const LeftColumn = styled.div`
  /* flex: 2; */
  font-size: 16px;
  color: #e9e9e9;
  padding: 0 36px;
`;

const RightColumn = styled.div`
  /* flex: 1; */
  width: 200px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 16px;
  color: #e9e9e9;
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
