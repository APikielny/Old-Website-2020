import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faCopyright } from "@fortawesome/free-regular-svg-icons";

const right = {
  textAlign: "right"
};

export class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div>
          <p>
            <a
              class="icon"
              href="https://github.com/APikielny/Personal-Site/raw/master/src/assets/AdamPikielnyResume.pdf"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFileAlt} />
            </a>
            <a
              class="icon"
              href="https://www.youtube.com/channel/UCCmakmLsFp9K8e7GBlEaMGw"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a class="icon" href="https://github.com/APikielny" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              class="icon"
              href="https://www.linkedin.com/in/adam-pikielny-30a606152/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              class="icon"
              href="https://www.instagram.com/apikielny/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              class="icon"
              href="https://www.facebook.com/profile.php?id=100005015536645"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faCopyright} />
            2020 Adam Pikielny. Built using React :)
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
