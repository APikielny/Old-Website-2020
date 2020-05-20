import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Loader extends Component {
  render() {
    return <img class="loader" src={require("../img/avalanche.gif")}></img>;
  }
}

export default Loader;
