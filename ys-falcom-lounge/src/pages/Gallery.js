/* eslint-disable */
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Background from '../components/Background';
import { useDispatch } from 'react-redux';
import { addFilter } from '../redux/modules/filter';
import { setFilteredImage } from '../redux/modules/post';
import Select from 'react-select';
import imageData from '../image.json';

const Gallery = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');
  // const [nameArr, setNameArr] = useState([]);
  // const [urlArr, setUrlArr] = useState([]);
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

  // React.useEffect(() => {
  //   let list_arr = [];

  //   switch (category) {
  //     // case 'All':
  //     //   imageData.forEach((val) => {
  //     //     list_arr.push(val.url);
  //     //   });
  //     //   setArr(list_arr);

  //     //   break;
  //     case 'Lacrimosa':
  //       imageData.lacrimosa.forEach((val) => {
  //         list_arr.push(val.url);
  //       });
  //       setArr(list_arr);
  //       break;
  //     case 'Monstrum':
  //       imageData.monstrum.forEach((val) => {
  //         list_arr.push(val.url);
  //       });
  //       setArr(list_arr);
  //       break;
  //   }
  // }, []);

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

  // console.log(selected);
  // console.log(typeof selected);

  useEffect(() => {
    if (selected === 'lacrimosa') {
      //   dispatch(setFilteredImage(selected));

      setFilteredImage(imageData.lacrimosa);
      // console.log(image);

      // let copy = [...filteredImage];
      // copy.push(image);
      // setFilteredImage([...filteredImage, image]);

      // imageData.lacrimosa.forEach((image) => {
      //   console.log(image.name);
      //   console.log(image.url);
      // });
      // default:
      //   return imageData;
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
        {filteredImage.map((image) => {
          console.log(image);
          console.log(image.id);
          return <ImageDiv key={image.id} src={image.url} alt={image.name} />;
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

const ImageList = styled.div``;

const ImageDiv = styled.img``;

const Filter = styled.select`
  width: 400px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 0 8px;
`;

const ImageDisplay = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 300px;
`;

// const LeftColumn = styled.div`
//   flex: 1;
//   background: yellow;
// `;

// const RightColumn = styled.div`
//   flex: 1;
//   background: lime;
// `;

export default Gallery;
