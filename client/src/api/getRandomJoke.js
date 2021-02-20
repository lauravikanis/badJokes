export const getJokes = async () => {
  const response = await fetch(`/api/randomJoke`);
  const data = await response.json();

  const randomJokeData = data;

  return randomJokeData;
};
