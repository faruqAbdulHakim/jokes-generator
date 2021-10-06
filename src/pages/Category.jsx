import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { useLocation } from 'react-router-dom';
import Jokes from '../components/Jokes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Category = () => {
  const location = useLocation();
  const [joke, setJoke] = useState();

  useEffect(() => {
    const { categoryInput } = location.state;
    fetch(`https://api.chucknorris.io/jokes/random?category=${categoryInput}`)
      .then((response) => response.json())
      .then((responseJson) => setJoke([responseJson]));
  }, [location]);

  return (
    <Container>
      <Navigation />
      <Jokes jokes={joke} query={`Category: ${location.state.categoryInput}`} />
    </Container>
  );
};

export default Category;
