import React from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Container = styled.div`
  background-color: #fffbeb;
  padding: 14px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
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
  color: #b45309;
  cursor: pointer;
  position: absolute;
  left: 20px;
  &:hover {
    opacity: 80%;
  }
  &:active {
    opacity: 50%;
  }
`;
const Logo = styled.h1`
  text-align: center;
  color: #b45309;
  font-family: 'Rye', cursive;
  font-size: 24px;
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
