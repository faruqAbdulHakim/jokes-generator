import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  background-color: #b45309;
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #86400a;
  }
  &:active {
    background-color: #552806;
  }
`;

const Button = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
