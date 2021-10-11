import React from 'react';
import styled from 'styled-components';
import Background from '../components/Background';

const Tournament = (props) => {
  // var myPix = new Array("images/lion. jpg", "images/tiger. jpg", "images/bear. jpg");
  // var randomNum = Math. floor(Math. random() * myPix. length);
  // document.getElementById("myPicture").src = myPix[randomNum];

  return (
    <Background>
      <HeaderGroup>
        <Title>Bias Tournament</Title>
      </HeaderGroup>
      <Line />
      <Container></Container>
    </Background>
  );
};

const HeaderGroup = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  margin: 20px 0 16px;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
`;

const Line = styled.div`
  width: 95%;
  border-bottom: 2px solid lightgray;
`;

const Container = styled.div`
  width: 95%;
`;

export default Tournament;
