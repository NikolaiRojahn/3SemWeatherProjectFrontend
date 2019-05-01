import React, { Component } from "react";
import svg from "./EuropeMap.svg";

function Home() {
  return (
    <div>
      <div>
        <h2>Map of europe</h2>
      </div>
      <div id="europeMap">
        <img src={svg} alt="Europe Map" />;
      </div>
      <div>
        <h2>5 day forecast</h2>
      </div>
      <div id="events" />
      <p>Show events</p>
    </div>
  );
}

export default Home;
