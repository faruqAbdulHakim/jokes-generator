import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  cursor: pointer;
  background-color: #b65305;
  padding: 8px;
  border-radius: 4px;
  border: none;
  color: white;
  &:hover {
    background-color: #7c3906;
  }
  &:active {
    background-color: #492000;
  }
`;

const Button = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
