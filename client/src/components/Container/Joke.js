import styled from "styled-components/macro";
import PropTypes from "prop-types";

const JokeContainer = styled.div`
  display: flex;
  font-family: "Yanone Kaffeesatz", sans-serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Joke = ({ Joke }) => {
  return (
    <JokeContainer>
      <p>{Joke.joke}</p>
    </JokeContainer>
  );
};

export default Joke;

Joke.propTypes = {
  Joke: PropTypes.object,
};
