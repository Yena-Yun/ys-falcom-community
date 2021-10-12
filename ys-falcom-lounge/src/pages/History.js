import React, { useState } from 'react';
import styled from 'styled-components';
import MaterialTable from 'material-table';
import Background from '../components/Background';
import commonData from '../lib/historyCommon.json';
import logoData from '../lib/historyLogo.json';

const History = (props) => {
  let [data, setData] = useState(logoData);

  console.log(logoData);
  console.log(logoData.common);
  console.log(logoData.logo);
  // const logoUrl = logoData.logo.map((item, id) => item.url);
  // console.log(logoUrl);
  // console.log(typeof logoUrl);

  const columns = [
    {
      title: 'Logo',
      field: 'logoImage',
      type: 'image',
      render: (data) => <img src={data.url} style={{ width: 50 }} alt='ys-series-logo' />,
    },
    {
      title: 'Title',
      field: 'gameTitle',
    },
    {
      title: 'Description',
      field: 'gameDetail',
    },
    {
      title: 'Year',
      field: 'releasedYear',
      type: 'numeric',
    },
  ];

  return (
    <Background>
      <HeaderGroup>
        <Title>History</Title>
      </HeaderGroup>
      <Line />
      <Container>
        <FilterBtns>
          <ChronoFilter>Chronologial Order</ChronoFilter>
          <ReleasedFilter>Released Order</ReleasedFilter>
        </FilterBtns>
        <TableDiv>
          <MaterialTable
            title='게임 진행상 연대기 순'
            columns={columns}
            data={logoData}
            options={{
              headerStyle: {
                textAlign: 'center',
              },
              paging: false,
              search: false,
              showEmptyDataSourceMessage: true,
            }}
          />
        </TableDiv>
      </Container>
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

const Container = styled.div`
  width: 95%;
  display: flex;
`;

const FilterBtns = styled.div`
  flex: 1;
  min-height: 60vh;
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ChronoFilter = styled.button`
  width: 150px;
  height: 50px;
  padding: 0 16px;
  font-size: 16px;
  text-align: center;
  background: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const ReleasedFilter = styled.button`
  width: 150px;
  height: 50px;
  padding: 0 16px;
  font-size: 16px;
  text-align: center;
  background: #fff;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const TableDiv = styled.div`
  padding: 24px;
  flex: 2;
  background: lightpink;
`;

export default History;
