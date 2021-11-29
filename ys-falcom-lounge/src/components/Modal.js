import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const titleOptions = [
  { value: 'Origin', label: 'Origin' },
  { value: 'Chronicles', label: 'Chronicles' },
  { value: 'Lacrimosa', label: 'Lacrimosa' },
];

const roundOptions = [
  { value: 'Round of 8', label: 'Round of 8' },
  { value: 'Round of 16', label: 'Round of 16' },
];

const Modal = ({ setIsModal }) => {
  return (
    <Wrapper>
      <ModalBox>
        <Title>Who is your ultimate bias?</Title>
        <SelectBox>
          <Text>Choose the title of series.</Text>
          <Select
            options={titleOptions}
            onChange={() => {
              console.log('뭔가 선택');
            }}
          />
          <Text>Choose the number of round.</Text>
          <Select
            options={roundOptions}
            onChange={() => {
              console.log('뭔가 선택');
            }}
          />
          <Text>The 32 random characters would compete each other.</Text>
        </SelectBox>
        <Button onClick={() => setIsModal(false)}>Start!</Button>
      </ModalBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 600px;
  height: 410px;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  font-style: italic;
  padding: 20px;
  padding-top: 28px;
`;

const SelectBox = styled.div`
  width: 70%;
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  background: #e9e9e9;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #494949;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;

const Button = styled.button`
  width: 50%;
  height: 40px;
  font-size: 1rem;
  color: #fff;
  background: #58a34d;
  border-radius: 4px;
  transition: all 300ms ease-in-out;

  &:hover {
    background: #69ba5e;
  }
`;

export default Modal;
