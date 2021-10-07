import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  width: 100vw;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentWrapper;
