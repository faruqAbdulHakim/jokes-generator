import React from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Container = styled.div`
  background-color: #fefbea;
  padding: 7px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
`;
const Wrapper = styled.div`
  max-width: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
const BackButton = styled.div`
  color: orange;
  cursor: pointer;
  position: absolute;
  left: 20px;
  &:hover {
    opacity: 50%;
  }
`;
const Logo = styled.h1`
  text-align: center;
  color: orange;
  font-family: 'Stardos Stencil', cursive;
  @media only screen and (max-width: 640px) {
    font-size: 20px;
  }
`;

const Navigation = () => {
  const location = useLocation();
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <Container>
      <Wrapper>
        {location.pathname !== '/' && (
          <BackButton onClick={goBackHandler}>
            <AiOutlineArrowLeft size={24} />
          </BackButton>
        )}
        <Logo>CHUCK NORRIS</Logo>
      </Wrapper>
    </Container>
  );
};

export default Navigation;
