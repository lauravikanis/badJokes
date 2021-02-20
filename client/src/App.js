import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Joke from "./pages/Joke";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/random">
          <Joke />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <a href="/storybook">To Storybook</a>
    </Router>
  );
}

export default App;
