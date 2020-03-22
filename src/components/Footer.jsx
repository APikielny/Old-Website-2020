import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const right = {
  textAlign: "right"
};

export class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div>
          <p id="name" class="container">
            &copy; 2020 Adam Pikielny
          </p>
          <a
            class="container"
            href="https://github.com/APikielny"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
