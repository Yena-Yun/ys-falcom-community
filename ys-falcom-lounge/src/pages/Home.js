import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import goddesses from '../images/ys-goddesses.jpg';
import roos from '../images/Art_roo.jpg';
import Background from '../components/Background';
import MainBg from '../images/ys9-adol-main.jpg';

const Home = (props) => {
  const history = useHistory();
  const [isHistory, setIsHistory] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  const [isTournament, setIsTournament] = useState(false);

  return (
    <Background>
      <MainSection>
        <MainTextDiv>
          <Title>34-year Anniversary!</Title>
          <Desc>
            Action role-playing game developed by Nihon Falcom. <br /> First one released in <span>1987</span>.
          </Desc>
        </MainTextDiv>

        <MainBgDiv>
          <img src={MainBg} alt='main-background' />
        </MainBgDiv>

        {/* <div>
          <button>Fortune Cookies</button>
          <button>Ladder Climb</button>
        </div> */}
      </MainSection>

      <RouterSection>
        <MenuCircle>History</MenuCircle>
        <MenuCircle>Gallery</MenuCircle>
        <MenuCircle>Tournament</MenuCircle>
      </RouterSection>

      <PlayerSection>
        <PlayerDiv>
          <p>Best Openings Ever</p>
          <Grid>
            <VideoDiv>{/* <video src='' className='chronicles-opening'></video> */}</VideoDiv>
            <TextDiv>Ys Origin Opening</TextDiv>
          </Grid>
          <Grid>
            <VideoDiv>{/* <video src='' className='origin-opening'></video> */}</VideoDiv>
            <TextDiv>Ys Origin Opening</TextDiv>
          </Grid>
        </PlayerDiv>
      </PlayerSection>

      {/* <MoveGroup>
        <MoveHistory onClick={() => history.push('/history')} onMouseOver={() => setIsHistory(true)} onMouseOut={() => setIsHistory(false)}>
          {isHistory ? <HoverBg>History</HoverBg> : <img src={goddesses} alt='move to history' />}
        </MoveHistory>
        <MoveGallery onClick={() => history.push('/gallery')} onMouseOver={() => setIsGallery(true)} onMouseOut={() => setIsGallery(false)}>
          {isGallery ? <HoverBg>Gallery</HoverBg> : <img src={roos} alt='move to gallery' />}
        </MoveGallery>
      </MoveGroup> */}
    </Background>
  );
};

const MainSection = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  /* background: #181818; */
`;

const MainTextDiv = styled.div`
  flex: 4;
  min-width: 400px;
  /* max-width: 600px; */
  height: 100%;
  padding: 16px 36px;
  background: #1a1a1a;
  color: #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* &::after {
    z-index: 10;
    background: linear-gradient(to right, #131313 20%, rgba(0, 0, 0, 0.5) 80%);
    height: 100%;
    width: 50px;
    content: '';
  } */
`;

const Title = styled.div`
  width: 70%;
  background: lightcoral;
  padding: 24px 32px;
  margin-top: 20px;
  font-size: 50px;
  font-weight: 700;
  text-align: left;
`;

const Desc = styled.div`
  width: 70%;
  padding: 24px 32px;

  font-size: 20px;
  background: lightsteelblue;
  text-align: left;

  span {
    font-style: italic;
    font-weight: 600;
  }
`;

const MainBgDiv = styled.div`
  /* flex: 1; */
  /* min-width: 100%; */
  display: flex;
  white-space: nowrap;
  overflow: hidden;

  /* box-shadow: 28px 28px 28px 28px #181818 inset; */
  img {
    height: 400px;
  }

  /* img::before {
    z-index: 1;
    background: linear-gradient(to right, #131313 90%, #131313 10%);
    height: 100%;
    width: 300px;
    content: '';
  } */
`;

const RouterSection = styled.div`
  width: 100vw;
  background: lightgreen;
  height: 700px;
  padding: 24px 36px;
  display: flex;
  justify-content: space-around;
`;

const MenuCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 3px solid #aaa;
`;

const MoveGroup = styled.div`
  width: 90%;
  min-height: 40vh;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const HoverBg = styled.div`
  width: 400px;
  height: 300px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  line-height: 300px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  z-index: 1;
`;

const MoveHistory = styled.div`
  width: 400px;
  margin-right: 5%;
  transition: all 300ms ease-in-out;

  img {
    width: 400px;
  }

  @media screen and (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 22px;
  }
`;

const MoveGallery = styled.div`
  width: 400px;
  cursor: pointer;

  img {
    width: 400px;
    height: 300px;
  }
`;

const PlayerSection = styled.div`
  width: 100vw;
  height: 700px;
  background: lightpink;
`;

const PlayerDiv = styled.div`
  background: lightgrey;
  padding: 24px;
`;

const Grid = styled.div`
  display: flex;
  padding: 24px 36px;
`;

const VideoDiv = styled.div`
  width: 500px;
  background: lightsalmon;
`;

const TextDiv = styled.div`
  width: 550px;

  p {
    font-size: 24px;
    text-align: left;
  }
`;

export default Home;
