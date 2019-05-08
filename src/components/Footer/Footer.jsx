import React, { Component } from "react";

import "./Footer.scss";
import LogoBeyondLabs from "../../assets/img/logo-beyondlabs.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <img className="logo" src={LogoBeyondLabs} alt="Beyond Labs logo" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>Created by BeyondLabsEY</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;