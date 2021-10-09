import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import goddesses from '../images/ys-goddesses.jpg';
import roos from '../images/Art_roo.jpg';

const Home = (props) => {
  const history = useHistory();

  return (
    <Wrapper>
      <Header />
      <HomeBg>
        <HomeTitle>34-year Anniversary!</HomeTitle>
        <HomeDesc>
          Action role-playing game developed by Nihon Falcom. <br /> The first one released in <span>1987</span>.
        </HomeDesc>

        <MoveGroup>
          <MoveHistory onClick={() => history.push('/history')}>
            <img src={goddesses} alt='move to history' />
          </MoveHistory>
          <MoveGallery onClick={() => history.push('/gallery')}>
            <img src={roos} alt='move to gallery' />
          </MoveGallery>
        </MoveGroup>
      </HomeBg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);
`;

const HomeBg = styled.div`
  width: 90%;
  min-height: 95%;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const HomeDesc = styled.div`
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

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const MoveHistory = styled.div`
  width: 400px;
  margin-right: 5vw;
  cursor: pointer;

  img {
    width: 400px;
  }

  @media screen and (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 24px;
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
