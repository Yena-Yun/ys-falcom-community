import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageData from '../lib/gallery.json';
import Background from '../components/Background';

const PostDetail = ({ history, location, match }) => {
  const [data, setData] = useState({});
  // const [series, setSeries] = useState([]);

  const { id, series } = match.params;
  console.log(id);
  console.log(series);

  // if (!detail) return <div>존재하지 않는 게시물입니다.</div>;

  // const getPostById = (id) => {
  //   console.log(id);

  //   for (let i = 0; i < imageData.length; i++) {
  //     const array = imageData[i];
  //     console.log(array);
  //   }
  //   // if (array.length === 1) return array[0];
  //   // return array;
  // };

  useEffect(() => {
    const detail = imageData[series];
    console.log(detail);

    const filteredData = detail.filter((a) => String(a.id) === id);
    console.log(filteredData);

    setData(...filteredData);
    console.log(data);

    console.log(data.id);
    console.log(data.name);
    console.log(data.url);
  }, [id]);

  return (
    <Background>
      <div>
        {data ? (
          <>
            <div>
              <label>{data.name}</label>
            </div>
            <div>
              <img src={data.url} alt='detail' />
            </div>
          </>
        ) : (
          '해당 게시글을 찾을 수 없습니다.'
        )}
        <button onClick={() => history.goBack()}>목록으로 돌아가기</button>
      </div>
    </Background>
  );
};

const Wrapper = styled.div``;

export default PostDetail;
