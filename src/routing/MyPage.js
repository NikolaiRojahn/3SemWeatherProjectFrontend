import React, { Component } from "react";

function MyPage() {
  return (
    <div>
      <div id="info">
        <h2>Profile</h2>
        <p>First name</p>
        <p>Last name</p>
        <p>Country</p>
        <p>City</p>
        <p>Email</p>
        <p>Weather metrics:</p>
        <p>Fahrenheit</p>
        <p>Celsius</p>
      </div>
      <div id="favourites">
        <h2>Favourite cities</h2>
        <ul>
          <li>Copenhagen</li>
          <li>Berlin</li>
          <li>Stuttgart</li>
          <li>London</li>
        </ul>
        <form>
          <label>
            <input type="text" name="addCity" />
          </label>
          <input type="submit" value="Add city?" />
        </form>
      </div>
    </div>
  );
}

export default MyPage;
