import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import styled from 'styled-components';
import ys_logo from '../lib/images/header/header_logo.png';
import { useHistory } from 'react-router-dom';
import Feena from '../lib/music/Origin - Feena.mp4';
import OverDrive from '../lib/music/Origin - Over Drive.mp4';
// import Burger from './Burger';

const Header = (props) => {
  const history = useHistory();
  const [sources, setSources] = useState([Feena, OverDrive]);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleSwap = () => {
    // Just switch back and forth between 0 and 1
    const nextIndex = currentSrcIndex === 0 ? 1 : 0;
    setCurrentSrcIndex(nextIndex);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <Wrapper>
      <LogoImage src={ys_logo} onClick={() => history.push('/home')} />

      <HowlerPlayer>
        <ReactHowler playing={playing} src={sources[currentSrcIndex]} />
        <Button className='full' onClick={handleSwap}>
          Swap Source
        </Button>
        <br />
        <Button onClick={handlePlay}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>
        <p>{sources[currentSrcIndex][0] + '/mp4'}</p>
      </HowlerPlayer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100vw;
  height: 10vh;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 35px;
  padding: 20px 0 0 24px;
  cursor: pointer;
`;

const HowlerPlayer = styled.div`
  width: 400px;
`;

const Button = styled.button`
  padding: 10px 23px;
  border-radius: 5px;
  border: 2px solid #69ba5e;
  background-color: transparent;
  color: #69ba5e;
  font-size: 1.375em;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: background-color 0.15s ease-in-out, border 0.15s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #58a34d;
    border: 2px solid #58a34d;
  }
`;

// header를 fixed로 설정했을 때 header 하단에 나오는 콘텐츠와 헤더 위치가 겹치는 것 방지
// const Spacer = styled.div`
//   height: 1rem;
// `;

export default Header;
