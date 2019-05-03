import React, { Component } from "react";
import europeMap from "../svg/europeMap.svg";
//Styling
import "../css/index.css";
import "../css/grid.css";
import "../css/normalize.css";
//Components
import Footer from '../components/Footer';

function EuropeMap() {
  return (
    <div id="europeMap" className="col span-2-of-3 box">
      <img src={europeMap} alt="Europe Map" />
    </div>
  );
}

function SearchByCity() {
  return (
  <div className="col span-1-of-3">
  <div>
    <h2>Weather Forecast</h2>
  </div>
    <form className="search-by-city">
      <label htmlFor="searchByCity">
        <input type="text" name="searchByCity" className="input-text"/>
      </label>
      <input type="submit" value="Search" className="btn" />
    </form>
  </div>
  );
}



function Home() {
  return (
    <div>
   <section className="section-map">
    <div className="row">
        <EuropeMap />
        <SearchByCity />
     </div>
    </section>
  <Footer />
  </div>
  );
}

export default Home;
