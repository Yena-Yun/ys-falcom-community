/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OriginCover from '../lib/images/albumcover/ys-origin-cover.png';
import Origin_Feena from '../lib/music/Origin - Feena.mp4';
import Water_Prison from '../lib/music/Origin - Water Prison.mp4';
import Beyond_the_Beginning from '../lib/music/Origin - Beyond the Beginning(opening).mp4';
import Over_Drive from '../lib/music/Origin - Over Drive.mp4';

const Music = (props) => {
  const [origin, setOrigin] = useState(false);
  const [chronicles, setChronicles] = useState(false);
  const [napishtim, setNapishtim] = useState(false);
  const [celceta, setCelceta] = useState(false);
  const [lacrimosa, setLacrimosa] = useState(false);
  const [monstrum, setMonstrum] = useState(false);

  const [crawl, setCrawl] = useState([]);

  // useEffect(() => {}, []);

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
    <>
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
          {/* <button
            type='button'
            className='form-btn'
            onClick={() => {
              fetch('api/data').then(async (res) => {
                try {
                  const data = await res.json();
                  console.log('response data?', data);
                } catch (error) {
                  console.log('Error happend here!');
                  console.log(error);
                }
              });
            }}
          >
            search
          </button> */}

          <MusicItem>
            <span>Feena</span>
            <audio controls src={Origin_Feena} />
          </MusicItem>
          <MusicItem>
            <span>Water Prison</span>
            <audio controls src={Water_Prison} />
          </MusicItem>
          <MusicItem>
            <span>Beyond the Beginning</span>
            <audio controls src={Beyond_the_Beginning} />
          </MusicItem>
          <MusicItem>
            <span>Overdrive</span>
            <audio controls src={Over_Drive} />
          </MusicItem>
        </MusicList>
        <SeriesCover>
          <img src={OriginCover} alt='origin-album-cover' />
        </SeriesCover>
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
  background: #90c4ee;
  padding: 16px;
  border-radius: 16px;
`;

const MusicList = styled.div`
  flex: 1;
  margin: 16px;
`;

const MusicItem = styled.div`
  max-width: 400px;
  height: 100px;
  padding: 6px 8px 4px;
  margin-bottom: 6px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);

  span {
    display: block;
    width: 200px;
    font-size: 18px;
    padding: 4px 24px 6px;
    text-align: left;
  }
`;

const SeriesCover = styled.div`
  flex: 1;
  width: 400px;
  height: 420px;
  margin: 16px;
  margin-left: 0;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);

  img {
    width: 400px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
      rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
`;

export default Music;
