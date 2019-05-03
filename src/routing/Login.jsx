import React, { Component } from "react";
//Styling
import "../css/index.css";
import "../css/grid.css";
import "../css/normalize.css";
//Components
import Footer from '../components/Footer';

function UserName() {
  return (
    <label htmlFor="user-name">
      <p>Login</p>
      <input type="text" name="user-name" className="input-text-login" />
    </label>
  );
}

function Password() {
  return (
    <label htmlFor="password">
      <p>Password</p>
      <input type="text" name="password" className="input-text-login" />
    </label>
  );
}

class Login extends Component {
  render() {
    return (
      <div>
      <section className="section-sign-in">
        <div className="row">
        <h2>Sign In</h2>
          <form id="login">
            <div className="login-center">
              <div className="col span-1-of-3">
                <UserName />
              </div>
              <div className="col span-1-of-3">
                <Password />
              </div>
              <div className="col span-1-of-3">
                <input type="submit" value="Login" className="btn-login btn" />
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
      </div>
    );
  }
}

export default Login;
