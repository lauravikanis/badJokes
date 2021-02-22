import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomJoke } from "../api/getRandomJoke";
import Button from "../components/Button/Button";

const JokeContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  margin-left: 20%;
  margin-right: 20%;
  color: var(--tertiary-color);
  text-align: center;
`;

const RandomJoke = () => {
  const [randomJoke, setRandomJoke] = useState(null);

  async function handleClick() {
    const randomJokeResponse = await getRandomJoke();
    setRandomJoke(randomJokeResponse);
    return { randomJokeResponse };
  }

  useEffect(() => {
    async function JokeFetch() {
      const JokeResponse = await getRandomJoke();
      setRandomJoke(JokeResponse);
    }
    JokeFetch();
  }, []);

  return (
    <JokeContainer>
      {randomJoke && <p>{randomJoke.joke}</p>}
      {randomJoke && (
        <>
          <p>{randomJoke.setup}</p>

          <p>{randomJoke.delivery}</p>
        </>
      )}

      <Button onClick={() => handleClick()}>
        <h2>Refresh Joke</h2>
      </Button>
    </JokeContainer>
  );
};
export default RandomJoke;
