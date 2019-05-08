import React, { Component } from "react";

import "./Main.scss";

class Header extends Component {
  render() {
    return (
      <main>
        <h3 className="sr-only">Main content</h3>
        <div className="description">
          <p>To get started, edit any file you want and save it to reaload this page.</p>
        </div>
      </main>
    );
  }
}

export default Header;