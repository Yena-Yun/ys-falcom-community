import React from 'react';
import styled from 'styled-components';
import TitleText from '../TitleText';
import Roos from '../../images/Art_roo.jpg';

const TodaysSection = (props) => {
  return (
    <Wrapper>
      <TodaysBg>
        <TodayLeft>
          <img src={Roos} alt="today's-play" />
        </TodayLeft>
        <TodayRight>
          <TitleText>Today's PICK</TitleText>
          <TodayBtnGroup>
            <TodayBtn>Fortune Cookie</TodayBtn>
            <TodayBtn>Ladder Climb</TodayBtn>
          </TodayBtnGroup>
        </TodayRight>
      </TodaysBg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 380px;
  background: #f0f0f0;
  padding: 24px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodaysBg = styled.div`
  width: 90%;
  background: rgba(255, 255, 255, 0.9);
  height: 95%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 14px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const TodayLeft = styled.div`
  img {
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 10px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
`;

const TodayRight = styled.div`
  width: 100%;
  min-width: 50%;
  padding: 60px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: lightslategrey; */
`;

const TodayBtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background: lightcoral; */
`;

const TodayBtn = styled.button`
  width: 250px;
  padding: 16px 0;
  font-size: 24px;
  background: #e4d447;
  margin-right: 24px;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  &:last-child {
    margin-right: 0;
  }
`;

export default TodaysSection;