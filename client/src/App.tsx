import * as React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RandomJoke from "./pages/RandomJoke";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Header />
        <Switch>
          <Route path="/random">
            <RandomJoke />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
