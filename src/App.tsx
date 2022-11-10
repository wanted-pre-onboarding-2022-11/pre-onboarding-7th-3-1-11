import React from "react";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <AppContainer>
      <SearchForm></SearchForm>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 150px;
`;

export default App;
