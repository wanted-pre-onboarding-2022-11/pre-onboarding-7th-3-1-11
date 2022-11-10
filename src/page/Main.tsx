import React from "react";
import styled from "styled-components";
import SearchBar from "@/components/SearchBar";
import DropDown from "@/components/DropDown";
import Title from "@/components/Title";

const Main = () => {
  return (
    <Layout>
      <Title />
      <SearchBar />
      <DropDown />
    </Layout>
  );
};

export default Main;

const Layout = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.skyblue};
`;
