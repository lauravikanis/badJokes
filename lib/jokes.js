const fetch = require("node-fetch");

async function getJokes() {
  const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist&type=single`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    json: true,
  });
  const data = await response.json();

  return data;
}

exports.getJokeData = getJokes;
