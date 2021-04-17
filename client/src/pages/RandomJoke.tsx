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
  margin-left: 20%;
  margin-right: 20%;
  color: var(--tertiary-color);
  text-align: center;
`;

const RandomJoke: any = () => {
  const [randomJoke, setRandomJoke] = useState(null);

  const handleClick: () => void = async () => {
    const randomJokeResponse = await getRandomJoke();
    setRandomJoke(randomJokeResponse);
  };

  useEffect(() => {
    async function JokeFetch() {
      const JokeResponse = await getRandomJoke();
      setRandomJoke(JokeResponse);
    }
    JokeFetch();
  }, []);

  return (
    <JokeContainer>
      {randomJoke}
      <Button onClick={() => handleClick()}>
        <h2>Refresh Joke</h2>
      </Button>
    </JokeContainer>
  );
};
export default RandomJoke;
