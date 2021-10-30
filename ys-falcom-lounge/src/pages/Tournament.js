import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from '../components/Tab';

const Tournament = (props) => {
  const [active, setActive] = useState(false);
  const [showOrigin, setShowOrigin] = useState(false);
  const [showChronicles, setShowChronicles] = useState(false);

  // var myPix = new Array("images/lion. jpg", "images/tiger. jpg", "images/bear. jpg");
  // var randomNum = Math. floor(Math. random() * myPix. length);
  // document.getElementById("myPicture").src = myPix[randomNum];

  const handleTabClick = (e) => {
    let text = e.target.textContent;

    setActive(true);

    if (text === 'Origin') {
      setShowOrigin(true);
    } else if (text === 'Chronicles+') {
      setShowChronicles(true);
    }
  };

  return (
    <>
      <HeaderGroup>
        <Title>Bias Tournament</Title>
      </HeaderGroup>
      <TabContainer>
        <TabList onClick={handleTabClick}>
          <TabDiv>Origin</TabDiv>
          <TabDiv>Chronicles+</TabDiv>
          <TabDiv>Napishtim</TabDiv>
          <TabDiv>Celceta</TabDiv>
          <TabDiv>Lacrimosa</TabDiv>
          <TabDiv>Monstrum</TabDiv>
        </TabList>
      </TabContainer>
      <Container>
        <TabContent>
          <CharacterCard>
            {showOrigin ? '유고' : null}
            {showChronicles ? '아돌' : null}
          </CharacterCard>
          <CharacterCard>
            {showOrigin ? '토르' : null}
            {showChronicles ? '피나' : null}
          </CharacterCard>
        </TabContent>
        {/* <TabContent>
          <p>이스 크로니클스 캐릭터</p>
        </TabContent>
        <TabContent>
          <p>이스 나피쉬팀 캐릭터</p>
        </TabContent>
        <TabContent>
          <p>이스 셀세타 캐릭터</p>
        </TabContent>
        <TabContent>
          <p>이스 라크리모사 캐릭터</p>
        </TabContent>
        <TabContent>
          <p>이스 몬스트룸 캐릭터</p>
        </TabContent> */}
      </Container>
    </>
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

const TabContainer = styled.div`
  width: 100%;
  min-height: 50px;
`;

const TabList = styled.ul`
  border-bottom: 1px solid #ccc;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const TabDiv = styled.li`
  display: block;
  padding: 10px 20px 10px 20px;
  float: left;
  margin-right: -1px;
  margin-bottom: -1px;
  color: grey;
  text-decoration: none;
  cursor: pointer;
`;

const Container = styled.div`
  width: 95%;
`;

const TabContent = styled.div`
  width: 100%;
  padding: 18px;
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  background: lightgoldenrodyellow;
`;

const CharacterCard = styled.div`
  min-width: 200px;
  max-height: 400px;
  background: lightgreen;
`;

export default Tournament;
