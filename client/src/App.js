import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MainPage} />
      </div>
    </Router>
  );
}

export default App;
