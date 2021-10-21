/* eslint-disable */
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Background from '../components/Background';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import imageData from '../lib/gallery.json';
import { Link } from 'react-router-dom';

const Gallery = (props) => {
  const [selected, setSelected] = useState('');
  const [filteredImage, setFilteredImage] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

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
    const select = e.target.value;
    // console.log(select);

    if (select === 'All') setSelected('all');
    else if (select === 'Ys Origin') setSelected('origin');
    else if (select === 'Ys I & II Chronicles') setSelected('chronicles');
    else if (select === 'Ys VI: The Ark of Napishtim') setSelected('napishtim');
    else if (select === 'Ys: Memories of Celceta') setSelected('celceta');
    else if (select === 'Ys VIII: Lacrimosa of Dana') setSelected('lacrimosa');
    else if (select === 'Ys IX: Monstrum Nox') setSelected('monstrum');
  };

  const handleLiked = (element) => {
    console.log(element);
    // let idx = filteredImage.findIndex((a) => a.id === id);
    // console.log(idx);
    // setIsLiked(!isLiked);
    // selectPicture(id);
  };

  useEffect(() => {
    // 처음 Gallery에 들어오면 이스8 이미지 보이도록
    // setFilteredImage(imageData.lacrimosa);

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
          const { id, name, url } = image;

          return (
            <ImageFrame key={idx}>
              <ImageTitle>{name}</ImageTitle>
              <Link to={`/gallery/${selected}/${id}`}>
                <ImageDiv src={url} alt={name} />
              </Link>
              <LikeBtn
                onClick={(e) => {
                  setIsLiked(!isLiked);
                  handleLiked(e.target);
                }}
              >
                {isLiked ? <HeartOutlined pointerEvents='none' /> : <HeartFilled pointerEvents='none' />}
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

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const ImageFrame = styled.div`
  width: 320px;
  margin: 18px;
  padding: 0 0 24px;
  background: #3d4170;
  border-radius: 4px;
  float: left;
  overflow: hidden;
`;

const ImageTitle = styled.p`
  font-size: 20px;
  font-style: italic;
  text-align: center;
  background: #fff;
  margin: 18px 24px;
  padding: 4px 0;
  opacity: 0.5;
`;

const ImageDiv = styled.img`
  max-width: 300px;
  min-width: 300px;
  cursor: pointer;
`;

const LikeBtn = styled.button`
  color: #fff;
  font-size: 18px;
  width: 45px;
  padding: 6px 3px 4px;
  display: flex;
  justify-content: space-around;
  position: relative;
  bottom: -10px;
  right: -260px;

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
