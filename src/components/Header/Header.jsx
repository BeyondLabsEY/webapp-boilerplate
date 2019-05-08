import React, { Component, Fragment } from "react";

import "./Header.scss";
import Logo from "../../assets/img/logo-ey.png";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="logo-area">
          <img className="logo" src={Logo} alt="EY logo" />
        </div>
        <header>
          <h1 className="sr-only">EY Boilerplate</h1>
          <h2 className="subheader">Welcome to your boilerplate</h2>
        </header>
      </Fragment>
    );
  }
}

export default Header;