import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import styled from 'styled-components';
import { SwapOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import ys_logo from '../lib/images/header/header_logo.png';
import { useHistory } from 'react-router-dom';
import Feena from '../lib/music/Origin - Feena.mp4';
import DriftingVillage from '../lib/music/Lacrimosa - Drifting Village.mp3';
// import Burger from './Burger';

const Header = (props) => {
  const history = useHistory();
  const [sources, setSources] = useState([Feena, DriftingVillage]);
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
      <LogoImage src={ys_logo} alt='logo' onClick={() => history.push('/home')} />

      <HowlerPlayer>
        <ReactHowler playing={playing} src={sources[currentSrcIndex]} />
        <Button className='full' onClick={handleSwap}>
          <SwapOutlined />
        </Button>
        <Button onClick={handlePlay}>
          <CaretRightOutlined />
        </Button>
        <Button onClick={handlePause}>
          <PauseOutlined />
        </Button>
        {/* <p>{sources[currentSrcIndex][0] + '/mp4'}</p> */}
      </HowlerPlayer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 200;
  width: 100vw;
  height: 11vh;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 125px;
  height: 50px;
  cursor: pointer;
  padding: 4px;
  box-sizing: border-box;
  margin-left: 60px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    border: 1px solid #9c9c9c;
  }
`;

const HowlerPlayer = styled.div`
  display: flex;
  margin-right: 60px;
`;

const Button = styled.button`
  width: 70px;
  padding: 8px 0;
  border-radius: 5px;
  border: 1px solid #113a0c;
  background-color: transparent;
  color: #69ba5e;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  margin-right: 10px;
  transition: background-color 0.15s ease-in-out, border 0.15s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #58a34d;
    border: 1px solid #58a34d;
  }

  &:last-child {
    margin-right: 0;
  }
`;

// header를 fixed로 설정했을 때 header 하단에 나오는 콘텐츠와 헤더 위치가 겹치는 것 방지
// const Spacer = styled.div`
//   height: 1rem;
// `;

export default Header;
