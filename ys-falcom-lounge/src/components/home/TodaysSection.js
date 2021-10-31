import React from 'react';
import styled from 'styled-components';
import Roos from '../../lib/images/home/Art_roo.jpg';

const TodaysSection = (props) => {
  return (
    <Wrapper>
      <TodaysBg>
        <TodayLeft>
          <img src={Roos} alt="today's-play" />
        </TodayLeft>
        <TodayRight>
          <TodayTitle>Today's PICK</TodayTitle>
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
  height: 410px;
  background: #f0f0f0;
  padding: 28px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodaysBg = styled.div`
  width: 80%;
  background: rgba(255, 255, 255, 0.9);
  height: 95%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 14px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const TodayLeft = styled.div`
  img {
    width: 442.61px;
    height: 389.5px;
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

const TodayTitle = styled.p`
  width: 100%;
  min-width: 390px;
  padding: 16px 0;
  background: lightgoldenrodyellow;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 48px;
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
