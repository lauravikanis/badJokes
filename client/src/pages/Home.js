import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";

const PageContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <PageContainer>
      <Card to="/random">
        <h2>Random Joke</h2>
      </Card>
      <Card to="/filter">
        <h2>Click to pick a type of joke</h2>
      </Card>
    </PageContainer>
  );
};

export default Home;
