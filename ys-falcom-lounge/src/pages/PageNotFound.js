import React from 'react';
import styled from 'styled-components';
import WhiteCat from '../images/etc/whitecat.png';
import { useHistory } from 'react-router-dom';

const PageNotFound = (props) => {
  const history = useHistory();

  return (
    <Wrapper>
      <ErrorText>
        <p>404 Page Not Found !</p>
        <span onClick={() => history.goBack()}>🏃‍♀️Go back to the Previous Page</span>
      </ErrorText>
      <ErrorImg>
        <ErrorCat src={WhiteCat} alt='error' />
      </ErrorImg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 93%;
  height: 90vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 40px;
  padding-left: 80px;
  padding-right: 50px;
`;

const ErrorText = styled.div`
  background: lightgoldenrodyellow;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2.5;

  p {
    font-size: 40px;
    font-style: italic;
  }

  span {
    cursor: pointer;
    font-size: 24px;
  }

  span:hover {
    text-decoration: underline;
  }
`;

const ErrorImg = styled.div`
  width: 500px;
  flex: 3.5;
`;

const ErrorCat = styled.img`
  width: 700px;
`;

export default PageNotFound;
