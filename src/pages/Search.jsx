import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Jokes from '../components/Jokes';
import Navigation from '../components/Navigation';
import ContentWrapper from '../components/ContentWrapper';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Search = () => {
  const location = useLocation();

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const { textInput } = location.state;
    fetch(`https://api.chucknorris.io/jokes/search?query=${textInput}`)
      .then((response) => response.json())
      .then((responseJson) => setJokes(responseJson.result));
  }, [location]);

  return (
    <Container>
      <Navigation />
      <ContentWrapper>
        <Jokes
          jokes={jokes}
          query={`Search Text: ${location.state.textInput}`}
        />
      </ContentWrapper>
    </Container>
  );
};

export default Search;
