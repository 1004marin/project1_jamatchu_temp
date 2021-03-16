import "./App.css";
import Login from "./components/login";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Register from "./components/register";
import Complete from "./components/register_complete";
import Profile from "./components/profile";
import Write from "./components/write";
import Board from "./components/board";
import Test from "./components/test";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Nav />
        </div>
        <div className="page">
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/register_complete" exact component={Complete} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/board" exact component={Board} />
          <Route path="/board/write" exact component={Write} />
          <Route path="/test" exact component={Test} />
        </div>
      </div>
    </Router>
  );
}

export default App;
