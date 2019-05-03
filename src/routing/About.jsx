import React, { Component } from "react";
//Styling
import "../css/index.css";
import "../css/grid.css";
import "../css/normalize.css";
//Components
import Footer from '../components/Footer';



function About() {
  return (
    <div>
    <section className="section-about">
      <div className="row">
      <h2>Made By Code Geeks</h2>
      </div>
    </section>
    <Footer />
    </div>
  );
}


export default About;