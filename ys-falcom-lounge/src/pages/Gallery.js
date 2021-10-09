import React, { useState } from 'react';
import styled from 'styled-components';
import Background from '../components/Background';
import Select from 'react-select';

const Gallery = (props) => {
  const [selected, setSelected] = useState('Ys VIII: Lacrimosa of Dana');
  const [keyword, setKeyword] = useState('Lacrimosa');

  const selectList = [
    'Ys Origin',
    'Ys I & II Chronicles+',
    'Ys VI: The Ark of Napishtim',
    'Ys: Memories of Celceta',
    'Ys VIII: Lacrimosa of Dana',
    'Ys IX: Monstrum Nox',
  ];

  const handleSelect = (e) => {
    setSelected(e.target.value);
    switch (selected) {
      case 'Ys Origin':
        setKeyword('Origin');
        break;
      case 'Ys I & II Chronicles+':
        setKeyword('Chronicles');
        break;
      case 'Ys VI: The Ark of Napishtim':
        setKeyword('Napishtim');
        break;
      case 'Ys: Memories of Celceta':
        setKeyword('Celceta');
        break;
      case 'Ys VIII: Lacrimosa of Dana':
        setKeyword('Lacrimosa');
        break;
      case 'Ys IX: Monstrum Nox':
        setKeyword('Monstrum');
        break;
      default:
        return null;
    }
  };

  return (
    <Background>
      <div>이스 Gallery</div>
      <FilterDiv>
        <select onChange={handleSelect} value={selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </FilterDiv>
      <ImageDisplay>
        {(() => {
          switch (keyword) {
            case 'Origin':
              return <Image />;
            case 'Chronicles':
              return <Image />;
            case 'Napishtim':
              return <Image />;
            case 'Celceta':
              return <Image />;
            case 'Lacrimosa':
              return <Image />;
            case 'Monstrum':
              return <Image />;
            default:
              return null;
          }
        })()}
      </ImageDisplay>
    </Background>
  );
};

const FilterDiv = styled.div``;

const Filter = styled.select``;

const ImageDisplay = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
`;

const Image = styled.img`
  width: 400px;
  height: 300px;
  background: lightcoral;
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
