import React from 'react';
import styled from 'styled-components';

const Tab = (props) => {
  const handleTabClick = () => {};

  return (
    <TabContainer>
      <TabList onClick={handleTabClick}>
        <TabDiv></TabDiv>
        <TabDiv></TabDiv>
        <TabDiv></TabDiv>
      </TabList>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  width: 100%;
  min-height: 50px;
`;

const TabList = styled.ul`
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

export default Tab;
