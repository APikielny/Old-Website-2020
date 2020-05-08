import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const right = {
  textAlign: "right",
};

export class Menu extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Adam Pikielny</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="justify-content-end mr-auto" defaultActiveKey="/code">
          <Nav.Link eventKey="code" href="/code">
            Code
          </Nav.Link>
          <Nav.Link href="/videos">Videos</Nav.Link>
          <Nav.Link href="/photos">Photos</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
