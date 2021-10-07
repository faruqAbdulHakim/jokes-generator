import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { useLocation } from 'react-router-dom';
import Jokes from '../components/Jokes';
import ContentWrapper from '../components/ContentWrapper';
import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Category = () => {
  const location = useLocation();
  const [joke, setJoke] = useState();
  const { categoryInput } = location.state;

  useEffect(() => {
    const { categoryInput } = location.state;
    fetch(
      `https://api.chucknorris.io/jokes/random?category=${categoryInput.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((responseJson) => setJoke([responseJson]));
  }, [location]);

  const anotherJokeHandler = () => {
    fetch(
      `https://api.chucknorris.io/jokes/random?category=${categoryInput.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((responseJson) => setJoke([responseJson]));
  };

  return (
    <Container>
      <Navigation />
      <ContentWrapper>
        <Jokes jokes={joke} query={`Category: ${categoryInput}`}>
          <Button onClick={anotherJokeHandler}>Another!</Button>
        </Jokes>
      </ContentWrapper>
    </Container>
  );
};

export default Category;
