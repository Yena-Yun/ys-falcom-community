import React from 'react';
import styled from 'styled-components';
// import TitleText from '../TitleText';
import originOpening from '../../lib/video/origin-opening.mp4';
import YS2Opening from '../../lib/video/ys2-opening.mp4';

const PlayerSection = (props) => {
  return (
    <Wrapper>
      <PlayerDiv>
        <Title>The Best Openings Ever!</Title>
        <Grid>
          <TextDiv>
            <TextTitle>Origin Opening</TextTitle>
          </TextDiv>
          <VideoDiv>
            <video src={originOpening} className='origin-opening' controls></video>
          </VideoDiv>
        </Grid>
        <Grid>
          <TextDiv>
            <TextTitle>Chronicles - Ys2 Opening</TextTitle>
          </TextDiv>
          <VideoDiv>
            <video src={YS2Opening} className='YS2-opening' controls></video>
          </VideoDiv>
        </Grid>
      </PlayerDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 700px;
  background: lightpink;
`;

const PlayerDiv = styled.div`
  background: #1a1a1a;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  min-width: 390px;
  padding: 16px 0;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 48px;
  color: #fff;
  text-align: left;
`;

const Grid = styled.div`
  width: 90%;
  display: flex;
  padding: 24px 36px;
  background: #000;
`;

const TextDiv = styled.div`
  flex: 1;
  /* width: 550px; */
  margin: 24px;
  min-width: 400px;
  height: 355.55px;
  background: rgb(173, 216, 230);
`;

const TextTitle = styled.p`
  font-size: 24px;
  text-align: left;
`;

const VideoDiv = styled.div`
  flex: 1;
  margin: 24px;

  /* width: 90%; */
  /* background: lightsalmon; */
  height: 337.5px;

  video {
    width: 600px;
    /* height: 100%; */
  }
`;

export default PlayerSection;
