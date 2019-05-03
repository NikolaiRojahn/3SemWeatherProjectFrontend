import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
//Styling
import "./css/index.css";
import "./css/grid.css";
// Routes
import About from "./routing/About.jsx";
import Home from "./routing/Home.jsx";
import Login from "./routing/Login.jsx";
import Profile from "./routing/Profile.jsx";




class App extends Component {

  render(){


  return (
    <div>
      <nav className="sticky">
      <div className="row">
        <ul className="main-nav">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/login">Sign In</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      </nav>
      {/* Switch will only render exact matches and routes not. Routes can't be used with nested routes */}
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        </Switch>
      </div>
  );
}
}



export default App;
