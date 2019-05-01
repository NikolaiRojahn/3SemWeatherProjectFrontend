import React, { Component } from "react";

function Login() {
  return (
    <div>
      <h1>JEG LAVER LOGIN!</h1>
      <form id="login">
        <label>
          Username:
          <br />
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
