import React, { Component } from "react";

import "./Wrapper.scss";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

class Wrapper extends Component {
  render() {
    return (
      <div className="d-flex flex-column wrapper">
        <div className="flex-grow-0 py-4 bg-dark">
          <div className="container">
            <div className="row">
              <div className="col">
                <Header />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 py-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <Main />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow-0 py-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;