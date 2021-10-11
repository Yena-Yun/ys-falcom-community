import React from 'react';
import styled from 'styled-components';

const ImgTitle = ({ showImgTitle, imgName }) => {
  return <>{showImgTitle ? <Wrapper>{imgName}</Wrapper> : null}</>;
};

const Wrapper = styled.div`
  min-width: 320px;
  background: rgba(25, 30, 84, 0.4);
  height: 30px;
  display: none;
  z-index: 1;
  position: absolute;
  top: 30px;
  left: 0;
`;

export default ImgTitle;
