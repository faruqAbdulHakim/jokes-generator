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
  width: 60px;
  height: 60px;
`;
const Query = styled.p`
  color: #b45309;
  font-weight: 600;
  margin: 16px 0 12px 0;
`;
const TextWrapper = styled.div`
  margin-top: 16px;
  font-weight: 600;
`;
const Text = styled.p`
  margin-bottom: 16px;
  text-align: center;
  font-style: italic;
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
          <Text key={index}>{`"${el.value}"`}</Text>
        ))}
      </TextWrapper>
      {children}
    </Container>
  );
};

export default Jokes;
