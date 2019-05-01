import React, { Component } from "react";
import "./App.css";
import About from "./routing/About.js";
import Home from "./routing/Home.js";
import Login from "./routing/Login.js";
import MyPage from "./routing/MyPage.js";

import { HashRouter as Router, Route, NavLink } from "react-router-dom";

function TopBar() {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/mypage">My Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <form>
              <label>
                <input type="text" name="searchByCity" />
              </label>
              <input type="submit" value="Search" />
            </form>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default TopBar;
