import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Joke from "../components/Joke/Joke";

const PageContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`;

const Page = () => {
  return (
    <PageContainer>
      <Header />
      <Card>
        <h2>Click for random joke</h2>
      </Card>
      <Joke />
      <Card>
        <h2>Click to pick a type of joke</h2>
      </Card>
    </PageContainer>
  );
};

export default Page;
