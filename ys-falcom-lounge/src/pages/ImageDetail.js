import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageData from '../lib/gallery.json';
import Background from '../components/Background';

const ImageDetail = ({ history, location, match }) => {
  const [data, setData] = useState({});
  const { id, selected } = match.params;
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const detail = imageData[selected];

    if (!detail) return <div>존재하지 않는 게시물입니다.</div>;

    const filteredData = detail.filter((a) => String(a.id) === id);

    setData(...filteredData);
  }, [id]);

  return (
    <Background>
      <Grid>
        {data ? (
          <>
            <ImageContainer>
              <Title>{data.name}</Title>
              <ImageDiv>
                <img src={data.url} alt='detail' />
              </ImageDiv>
            </ImageContainer>
          </>
        ) : (
          '해당 게시글을 찾을 수 없습니다.'
        )}

        <button onClick={() => history.goBack()}>목록으로 돌아가기</button>

        <CommentContainer>
          <CommentInput placeholder='댓글을 입력하세요...' autoFocus />
          <CommentList>
            <Comment></Comment>
          </CommentList>
        </CommentContainer>
      </Grid>
    </Background>
  );
};

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  background: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  height: 40px;
  padding: 4px 0;
  background: lightcyan;
`;

const ImageDiv = styled.div`
  width: 400px;
  height: 400px;
  background: lightyellow;

  img {
    width: 350px;
  }
`;

const CommentContainer = styled.div`
  width: 500px;
  min-height: 500px;
  overflow-y: scroll;
  padding: 24px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 8px 14px;
  border-radius: 4px;
  border: 1px solid lightgrey;
  margin: 0 24px;
  margin-bottom: 12px;
`;

const CommentList = styled.div`
  width: 400px;
  min-height: 450px;
  background: lightsteelblue;
  padding: 12px;
`;

const Comment = styled.div`
  padding: 8px 16px;
  width: 100%;
  border-radius: 4px;
  height: 40px;
`;

export default ImageDetail;
