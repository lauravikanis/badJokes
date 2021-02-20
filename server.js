const express = require("express");
const path = require("path");
const { getJokeData } = require("./lib/database");

const app = express();
const port = process.env.PORT || 3001;

app.get("/api/randomJoke", async (request, response) => {
  const { query } = request.params;
  try {
    const jokeValue = await getJokeData(query);
    if (!jokeValue) {
      response.status(404).send("Could not find any Data");
      return;
    }
    response.send(jokeValue);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal error occured");
  }
});

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
