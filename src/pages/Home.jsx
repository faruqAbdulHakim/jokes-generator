import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Jokes from '../components/Jokes';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import ContentWrapper from '../components/ContentWrapper';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const FormField = styled.form`
  display: flex;
`;
const InputField = styled.input`
  flex: 1;
  border: 0.5px solid gray;
  outline: none;
  padding: 5px 10px;
  margin-right: 10px;
`;
const SelectField = styled.select`
  flex: 1;
  border: 0.5px solid gray;
  margin-right: 10px;
`;

const Home = () => {
  const history = useHistory();

  const [joke, setJoke] = useState();
  const [jokeCategories, setJokeCategories] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((responseJson) => setJoke([responseJson]));
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => response.json())
      .then((responseJson) => setJokeCategories(responseJson));
  }, []);

  const anotherJokeHandler = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((responseJson) => setJoke([responseJson]));
  };

  const searchByTextInputHandler = (event) => {
    event.preventDefault();
    history.push({ pathname: '/search', state: { textInput } });
  };

  const searchByCategoryHandler = (event) => {
    event.preventDefault();
    history.push({ pathname: '/category', state: { categoryInput } });
  };

  return (
    <Container>
      <Navigation />
      <ContentWrapper>
        <FormField onSubmit={searchByTextInputHandler}>
          <InputField
            placeholder="Input by text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <Button>Search!</Button>
        </FormField>

        <Jokes jokes={joke}>
          <Button onClick={anotherJokeHandler}>Another!</Button>
        </Jokes>

        <FormField onSubmit={searchByCategoryHandler}>
          <SelectField
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
          >
            <option hidden>Choose</option>
            {jokeCategories.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </SelectField>
          <Button>Search!</Button>
        </FormField>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
