import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;
const Query = styled.p`
  color: orange;
  font-weight: bold;
  margin: 10px;
`;
const TextWrapper = styled.div`
  margin: 10px 20px;
  font-weight: bold;
`;
const Text = styled.p`
  margin-bottom: 20px;
  text-align: center;
`;

const Jokes = ({ children, jokes, query }) => {
  return (
    <Container>
      <Img
        src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
        alt="chuck-norris"
      />
      {query && <Query>{query}</Query>}
      <TextWrapper>
        {jokes?.map((el, index) => (
          <Text key={index}>{el.value}</Text>
        ))}
      </TextWrapper>
      {children}
    </Container>
  );
};

export default Jokes;
