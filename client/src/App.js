import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RandomJoke from "./pages/RandomJoke";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/random">
          <RandomJoke />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
