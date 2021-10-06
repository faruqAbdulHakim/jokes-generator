import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  cursor: pointer;
  background-color: orange;
  padding: 8px;
  border-radius: 10px;
  border: none;
  color: white;
  &:hover {
    background-color: #da8d00;
  }
  &:active {
    background-color: #724a00;
  }
`;

const Button = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
