import * as React from "react";
import styled from "styled-components/macro";

export const JokeContainer = styled.div`
  display: flex;
  font-family: "Yanone Kaffeesatz", sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Joke: React.ReactNode = (joke: any) => {
  return <JokeContainer>{joke.joke}</JokeContainer>;
};

export default Joke;
