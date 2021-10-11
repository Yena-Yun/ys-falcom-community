/* eslint-disable */
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Background from '../components/Background';
import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import imageData from '../gallery.json';

const Gallery = (props) => {
  const [selected, setSelected] = useState('');
  const [filteredImage, setFilteredImage] = useState([]);

  const selectList = [
    'Select Series',
    'All',
    'Ys Origin',
    'Ys I & II Chronicles',
    'Ys VI: The Ark of Napishtim',
    'Ys: Memories of Celceta',
    'Ys VIII: Lacrimosa of Dana',
    'Ys IX: Monstrum Nox',
  ];

  const handleSelect = (e) => {
    let select = e.target.value;
    console.log(select);

    if (select === 'All') setSelected('all');
    else if (select === 'Ys Origin') setSelected('origin');
    else if (select === 'Ys I & II Chronicles') setSelected('chronicles');
    else if (select === 'Ys VI: The Ark of Napishtim') setSelected('napishtim');
    else if (select === 'Ys: Memories of Celceta') setSelected('celceta');
    else if (select === 'Ys VIII: Lacrimosa of Dana') setSelected('lacrimosa');
    else if (select === 'Ys IX: Monstrum Nox') setSelected('monstrum');
  };

  useEffect(() => {
    if (selected === 'lacrimosa') {
      setFilteredImage(imageData.lacrimosa);
    } else if (selected === 'chronicles') {
      setFilteredImage(imageData.chronicles);
    } else if (selected === 'monstrum') {
      setFilteredImage(imageData.monstrum);
    }
  }, [selected]);

  return (
    <Background>
      <HeaderGroup>
        <Title>Gallery</Title>
        <Filter onChange={handleSelect} value={selected}>
          {selectList.map((item, idx) => {
            return (
              <option value={item} key={idx}>
                {item}
              </option>
            );
          })}
        </Filter>
      </HeaderGroup>
      <Line />
      <ImageList>
        {filteredImage.map((image, idx) => {
          return (
            <ImageFrame>
              <ImageTitle>{image.name}</ImageTitle>
              <ImageDiv key={idx} src={image.url} alt={image.name} />
              <LikeBtn>
                <LikeOutlined />0
              </LikeBtn>
            </ImageFrame>
          );
        })}
      </ImageList>
    </Background>
  );
};

const HeaderGroup = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  margin: 20px 0 16px;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
`;

const Line = styled.div`
  width: 95%;
  border-bottom: 2px solid lightgray;
`;

const ImageList = styled.div`
  width: 95%;
`;

const ImageFrame = styled.div`
  width: 320px;
  margin: 18px;
  padding: 0 0 35px;
  background: #0c0e25;
  float: left;
  overflow: hidden;
`;

const ImageTitle = styled.p`
  font-size: 20px;
  color: #fff;
`;

const ImageDiv = styled.img`
  max-width: 300px;
  min-width: 300px;
`;

const LikeBtn = styled.button`
  color: #fff;
  font-size: 18px;
  width: 45px;
  padding: 6px 3px 4px;
  display: flex;
  justify-content: space-around;
  position: relative;
  bottom: -20px;
  right: -265px;

  &:hover {
    color: #fff;
    background: rgba(172, 179, 255, 0.3);
    cursor: pointer;
  }
`;

const Filter = styled.select`
  width: 400px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 0 8px;
`;

export default Gallery;
