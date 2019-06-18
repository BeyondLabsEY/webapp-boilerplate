import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Wrapper.scss";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

class Wrapper extends Component {
  render() {
    return (
      <div className="d-flex flex-column wrapper">
        <div className="flex-grow-0 py-4 bg-dark">
          <Container>
            <Row>
              <Col>
                <Header />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="flex-grow-1 py-3">
          <Container>
            <Row>
              <Col>
                <Main />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="flex-grow-0 py-4 bg-light">
          <Container>
            <Row>
              <Col>
                <Footer />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Wrapper;