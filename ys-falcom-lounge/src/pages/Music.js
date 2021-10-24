/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Background from '../components/Background';
import OriginCover from '../images/albumcover/ys-origin-cover.png';
import Origin_Feena from '../music/Origin - Feena.mp4';

const Music = (props) => {
  const [origin, setOrigin] = useState(false);
  const [chronicles, setChronicles] = useState(false);
  const [napishtim, setNapishtim] = useState(false);
  const [celceta, setCelceta] = useState(false);
  const [lacrimosa, setLacrimosa] = useState(false);
  const [monstrum, setMonstrum] = useState(false);

  const [crawl, setCrawl] = useState([]);

  useEffect(() => {
    fetch('api/crawl')
      .then((res) => res.json())
      .then((data) => setCrawl(data));
  }, []);

  const setOffAll = () => {
    setOrigin(false);
    setChronicles(false);
    setNapishtim(false);
    setCelceta(false);
    setLacrimosa(false);
    setMonstrum(false);
  };

  const handleTabClick = (e) => {
    let text = e.target.textContent;

    if (text === 'Origin') {
      setOffAll();
      setOrigin(true);
    } else if (text === 'Chronicles+') {
      setOffAll();
      setChronicles(true);
    } else if (text === 'Napishtim') {
      setOffAll();
      setNapishtim(true);
    } else if (text === 'Celceta') {
      setOffAll();
      setCelceta(true);
    } else if (text === 'Lacrimosa') {
      setOffAll();
      setLacrimosa(true);
    } else if (text === 'Monstrum') {
      setOffAll();
      setMonstrum(true);
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
          {crawl.map((music) => {
            console.log(music);

            return (
              <MusicItem>
                <caption>{music.title}</caption>
                <a href={music.video} />
              </MusicItem>
            );
          })}
        </MusicList>
        <SeriesCover>{origin ? <img src={OriginCover} alt='origin-album-cover' /> : null}</SeriesCover>
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
  width: 90%;
  min-height: 400px;
  background: lightgreen;
  padding: 16px;
`;

const MusicList = styled.div`
  flex: 1;
  background: lightseagreen;
  margin: 16px;
`;

const MusicItem = styled.div`
  min-width: 150px;
  height: 100px;
  padding: 12px;
  background: lightcoral;

  caption {
    font-size: 18px;
    margin: 4px 24px 8px;
  }
`;

const SeriesCover = styled.div`
  flex: 1;
  width: 150px;
  background: lightblue;

  img {
    width: 100%;
  }
`;

export default Music;
