import { useState } from "react";
import styled from "styled-components";
import { getRandomJoke } from "../api/getRandomJoke";

const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Joke = () => {
  const [randomJoke, setRandomJoke] = useState(null);

  async function handleClick() {
    const randomJokeResponse = await getRandomJoke();
    setRandomJoke(randomJokeResponse);
  }

  return (
    <JokeContainer>
      <button onClick={() => handleClick()}>Get Random Joke</button>
      {randomJoke && <p>{randomJoke.joke}</p>}
    </JokeContainer>
  );
};
export default Joke;
