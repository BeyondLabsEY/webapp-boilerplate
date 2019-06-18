import React, { Component } from "react";

import "./Header.scss";
import Logo from "../../assets/img/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="sr-only">Boilerplate</h1>
        <div class="logo-area">
          <img className="logo" src={Logo} alt="Beyond Labs logo" />
        </div>
        <p className="welcome">Welcome to your boilerplate</p>
      </header>
    );
  }
}

export default Header;