import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

const PageContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`;

const Page = () => (
  <PageContainer>
    <Header />
    <Card>
      <h2>Click for random joke</h2>
    </Card>
    <Card>
      <h2>Click to pick a type of joke</h2>
    </Card>
  </PageContainer>
);

export default Page;
