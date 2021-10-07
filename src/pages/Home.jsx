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
  min-width: 0;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 11px 16px;
  margin-right: 16px;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const SelectField = styled.select`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 11px 16px;
  margin-right: 16px;
  cursor: pointer;
  background-color: white;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  & option {
    font-weight: 600;
  }
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
            placeholder="Search jokes by text"
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
            <option hidden>Search jokes by category</option>
            {jokeCategories.map((val, index) => {
              val = val[0].toUpperCase() + val.slice(1);
              return (
                <option key={index} value={val}>
                  {val}
                </option>
              );
            })}
          </SelectField>
          <Button>Search!</Button>
        </FormField>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
