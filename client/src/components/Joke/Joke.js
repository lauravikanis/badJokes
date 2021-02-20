import { useState } from "react";
import styled from "styled-components";
import { getJokes } from "../../api/getRandomJoke";

const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Joke = () => {
  const [randomJoke, setRandomJoke] = useState(null);

  return (
    <JokeContainer>{randomJoke && <p>{randomJoke.joke}</p>}</JokeContainer>
  );
};
export default Joke;
