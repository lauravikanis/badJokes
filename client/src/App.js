import React from "react";
import Page from "./pages/Page";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Page />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
