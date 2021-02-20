import { useState } from "react";
import styled from "styled-components";

const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Joke = () => {
  const [randomJoke, setRandomJoke] = useState(null);

  return <JokeContainer>{randomJoke}</JokeContainer>;
};
export default Joke;
