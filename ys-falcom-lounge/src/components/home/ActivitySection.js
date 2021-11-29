import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ActivitySection = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <CircleDiv>
        <CircleRouter>History</CircleRouter>
        <CircleRouter>Gallery</CircleRouter>
        <CircleRouter onClick={() => history.push('/tournament')}>Tournament</CircleRouter>
      </CircleDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  background: lightgreen;
  height: 400px;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleDiv = styled.div`
  width: 85%;
  padding: 24px 36px;
  display: flex;
  justify-content: space-between;
  background: lightcyan;
`;

const CircleRouter = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 3px solid #aaa;
  cursor: pointer;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  font-style: italic;
  line-height: 280px;
  color: #1a1a1a;
`;

export default ActivitySection;
