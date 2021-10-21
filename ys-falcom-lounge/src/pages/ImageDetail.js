import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageData from '../lib/gallery.json';
import Background from '../components/Background';

const ImageDetail = ({ history, location, match }) => {
  const [data, setData] = useState({});
  const { id, series } = match.params;

  useEffect(() => {
    const detail = imageData[series];
    if (!detail) return <div>존재하지 않는 게시물입니다.</div>;

    const filteredData = detail.filter((a) => String(a.id) === id);

    setData(...filteredData);
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

export default ImageDetail;
