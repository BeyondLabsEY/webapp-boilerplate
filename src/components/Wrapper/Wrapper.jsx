import React, { Component } from "react";

import "./Wrapper.scss";

class Wrapper extends Component {
  render() {
    return (
      <div className="d-flex flex-column wrapper">
        <div className="flex-grow-0 pt-5 pb-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>This is the header</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 py-2">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>This is the main content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow-0 py-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>This is the footer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper;