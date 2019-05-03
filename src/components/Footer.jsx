import React, { Component } from "react";
//Styling
import "../css/index.css";
import "../css/grid.css";

export default function Footer(){
    return(
      <footer>
        <div className="row">
          <div className="col span-1-of-2">
          <ul className="footer-nav">
            <li><a href="http://localhost:3000/about">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">iOS App</a></li>
            <li><a href="#">Android App</a></li>
          </ul>
        </div>
  
        <div className="col span-1of-2">
          <ul class="social-links">
            <li><a href="#"><ion-icon name="logo-facebook" class="logo-facebook"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-twitter" class="logo-twitter"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-googleplus" class="logo-googleplus"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-instagram" class="logo-instagram"></ion-icon></a></li>
          </ul>
        </div>
      </div>
        <div class="row">
          <p>Copyright &copy; 2019 by Code Geeks, Inc. All rights reserved.</p>
        </div>
      </footer>
  
    )
  }

  