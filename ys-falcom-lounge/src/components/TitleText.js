import React from 'react';
import styled from 'styled-components';

const TitleText = ({ children }) => {
  return <TextDiv>{children}</TextDiv>;
};

const TextDiv = styled.p`
  width: 100%;
  min-width: 390px;
  padding: 16px 0;
  background: lightgoldenrodyellow;
  font-size: 36px;
  /* font-style: italic; */
  font-weight: 600;
  margin-bottom: 48px;
`;

export default TitleText;
