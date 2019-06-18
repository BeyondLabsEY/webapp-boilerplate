import React from "react";
import { render } from "react-dom";
import 'bootstrap';

import "./assets/favicon/favicon";
import './assets/scss/custom.scss';
import './assets/scss/base.scss';

import Wrapper from "./components/Wrapper/Wrapper.jsx";

const rootElement = document.getElementById("root");
rootElement ? render(<Wrapper />, rootElement) : false;