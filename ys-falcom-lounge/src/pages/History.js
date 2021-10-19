import React, { useState } from 'react';
import styled from 'styled-components';
import MaterialTable from 'material-table';
import Background from '../components/Background';
import commonData from '../lib/historyCommon.json';
import logoData from '../lib/historyLogo.json';
import { forwardRef } from 'react';
import { ArrowDownward } from '@material-ui/icons';

const History = (props) => {
  const columns = [
    {
      title: 'Logo',
      field: 'url',
      type: 'image',
      render: (data) => <img src={data.url} style={{ width: '100px' }} alt='ys-series-logo' />,
    },
    {
      title: 'Title',
      field: 'name',
    },
    {
      title: 'Description',
      field: 'desc',
      cellStyle: {
        width: 350,
        minWidth: 350,
      },
    },
    {
      title: 'Year',
      field: 'year',
      type: 'numeric',
    },
  ];

  const tableIcons = {
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  };

  const style = {
    width: '100%',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '30px',
    fontWeight: '600',
    paddingTop: '30px',
  };

  return (
    <Background>
      <HeaderGroup>
        <Title>History</Title>
      </HeaderGroup>
      <Line />
      <Container>
        <TableDiv>
          <MaterialTable
            icons={tableIcons}
            components={{
              Toolbar: (props) => <div style={style}>6 Masterpieces of Ys Series</div>,
            }}
            title={<Header>6 Masterpieces of Ys Series</Header>}
            columns={columns}
            data={logoData}
            options={{
              headerStyle: {
                margin: 0,
                textAlign: 'center',
              },
              cellStyle: {
                width: 50,
                minWidth: 50,
                textAlign: 'center',
              },
              paging: false,
              search: false,
              tableLayout: 'auto',
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

const Header = styled.div`
  width: 50vw;
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  background: lightyellow;
`;

const TableDiv = styled.div`
  padding: 18px;
  flex: 2;
  background: lightpink;
`;

export default History;
