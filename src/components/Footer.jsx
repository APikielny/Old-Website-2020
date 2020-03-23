import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

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
          <p>Built using React :)</p>
          <a
            class="container"
            href="https://github.com/APikielny"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            class="container"
            href="https://www.linkedin.com/in/adam-pikielny-30a606152/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            class="container"
            href="https://www.instagram.com/apikielny/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            class="container"
            href="https://www.instagram.com/apikielny/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
