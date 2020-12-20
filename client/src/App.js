import React from "react";
import { MainPage } from "./components/MainPage";
import { DetailedQuotes } from "./components/DetailedQuotes";
import { BrowserRouter as Router, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/detailedquotes" component={DetailedQuotes} />
      </div>
    </Router>
  );
}
