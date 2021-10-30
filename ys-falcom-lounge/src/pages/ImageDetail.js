import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageData from '../lib/gallery.json';

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
    <>
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

        <GoBackBtn onClick={() => history.goBack()}>뒤로 가기</GoBackBtn>

        <CommentContainer>
          <CommentInput placeholder='댓글을 입력하세요...' autoFocus />
          <CommentList>
            <Comment></Comment>
          </CommentList>
        </CommentContainer>
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 450px;
  padding: 24px;
  background: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 4px 0;
  background: lightcyan;
`;

const ImageDiv = styled.div`
  width: 100%;
  padding: 24px 0;
  background: lightyellow;

  img {
    width: 350px;
  }
`;

const GoBackBtn = styled.button`
  position: absolute;
  top: 20px;
  left: -90px;
  background: lightgreen;
  width: 100px;
  padding: 8px 0;
  font-size: 18px;
  font-weight: 500;
`;

const CommentContainer = styled.div`
  width: 90%;
  min-height: 400px;
  overflow-y: scroll;
  padding: 24px;
  background: lightsteelblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 90%;
  font-size: 18px;
  padding: 8px 14px;
  border-radius: 4px;
  border: 1px solid lightgrey;
  margin-bottom: 12px;
`;

const CommentList = styled.div`
  width: 90%;
  min-height: 450px;
  background: #fff;
  padding: 12px;
`;

const Comment = styled.div`
  padding: 8px 16px;
  width: 100%;
  border-radius: 4px;
  height: 40px;
`;

export default ImageDetail;
