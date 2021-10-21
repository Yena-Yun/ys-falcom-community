import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import goddesses from '../images/ys-goddesses.jpg';
import roos from '../images/Art_roo.jpg';
import Background from '../components/Background';

const Home = (props) => {
  const history = useHistory();
  const [isHistory, setIsHistory] = useState(false);
  const [isGallery, setIsGallery] = useState(false);

  return (
    <Background>
      <Title>34-year Anniversary!</Title>
      <Desc>
        Action role-playing game developed by Nihon Falcom. <br /> First one released in <span>1987</span>.
      </Desc>

      <MoveGroup>
        <MoveHistory onClick={() => history.push('/history')} onMouseOver={() => setIsHistory(true)} onMouseOut={() => setIsHistory(false)}>
          {isHistory ? <HoverBg>History</HoverBg> : <img src={goddesses} alt='move to history' />}
        </MoveHistory>
        <MoveGallery onClick={() => history.push('/gallery')} onMouseOver={() => setIsGallery(true)} onMouseOut={() => setIsGallery(false)}>
          {isGallery ? <HoverBg>Gallery</HoverBg> : <img src={roos} alt='move to gallery' />}
        </MoveGallery>
      </MoveGroup>
    </Background>
  );
};

const Title = styled.div`
  margin-top: 20px;
  font-size: 50px;
  font-weight: 700;
`;

const Desc = styled.div`
  width: 700px;
  padding: 16px;
  font-size: 20px;

  span {
    font-style: italic;
    font-weight: 600;
  }
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
  background: rgba(25, 30, 84, 0.4);
  color: rgba(0, 0, 0, 0.8);
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

export default Home;
