import React, { useState } from 'react';
import styled from 'styled-components';
import Background from '../components/Background';
import Origin_Feena from '../music/Ys Origin - Music_ Feena.mp4';

const Music = (props) => {
  const [active, setActive] = useState(false);
  const [origin, setOrigin] = useState(false);
  const [chronicles, setChronicles] = useState(false);
  const [napishtim, setNapishtim] = useState(false);
  const [celceta, setCelceta] = useState(false);
  const [lacrimosa, setLacrimosa] = useState(false);
  const [monstrum, setMonstrum] = useState(false);

  const handleTabClick = (e) => {
    let text = e.target.textContent;

    setActive(true);

    if (text === 'Origin') {
      setOrigin(true);
    } else if (text === 'Chronicles+') {
      setChronicles(true);
    } else if (text === 'Napishtim') {
      setChronicles(true);
    } else if (text === 'Celceta') {
      setChronicles(true);
    } else if (text === 'Lacrimosa') {
      setChronicles(true);
    } else if (text === 'Monstrum') {
      setChronicles(true);
    }
  };

  return (
    <Background>
      <HeaderGroup>
        <Title>Falcom Record</Title>
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
        <MusicList>
          {origin ? (
            <MusicItem>
              <caption>Feena</caption>
              <audio controls src={Origin_Feena} />
            </MusicItem>
          ) : null}
        </MusicList>
        <SeriesCover>{origin ? <img src='' alt='' /> : null}</SeriesCover>
      </Container>
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
  margin: 16px 0 10px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
`;

const TabContainer = styled.div`
  width: 100%;
  min-height: 50px;
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-around;
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
  display: flex;
`;

const MusicList = styled.div`
  flex: 1;
  width: 95%;
  min-height: 400px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;

const MusicItem = styled.div`
  min-width: 130px;
  height: 100px;
  padding: 12px;

  caption {
    font-size: 18px;
    margin: 4px 24px 8px;
  }
`;

const SeriesCover = styled.div`
  flex: 1;
`;

export default Music;
