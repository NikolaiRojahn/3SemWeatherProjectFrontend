import React, { Component } from "react";
//Styling
import "../css/index.css";
import "../css/grid.css";
import "../css/normalize.css";
//Components
import Footer from '../components/Footer';

function ProfilAttributes() {
  return (
    <div className="profile" id="info">
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
  );
}

function Favourites() {
  return (
    <div id="favourites">
      <h2>Favourite cities</h2>
      <ul className="fav-cities">
        <li>Copenhagen</li>
        <li>Berlin</li>
        <li>Stuttgart</li>
        <li>London</li>
      </ul>
    </div>
  );
}

class Profile extends Component {
  
  render() {
    return (
      <div>
      <section className="section-profile">
        <div>
          <ProfilAttributes />
          <Favourites />
          <form>
            <label>
              <input type="text" name="addCity" />
            </label>
            <input type="submit" value="Add city?" className="btn" />
          </form>
        </div>
      </section>
      <Footer />
      </div>
    );
  }
}

export default Profile;
