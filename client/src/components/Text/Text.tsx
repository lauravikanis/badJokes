import * as React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  font-family: "Yanone Kaffeesatz", sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const Card = () => {
  return (
    <TextContainer>
      <h1>This is A Headline</h1>
      <h2>This is A Headline</h2>
      <h3>This is A Headline</h3>
      <h4>This is A Headline</h4>
      <h5>This is A Headline</h5>
      <h6>This is A Headline</h6>
    </TextContainer>
  );
};

export default Card;
