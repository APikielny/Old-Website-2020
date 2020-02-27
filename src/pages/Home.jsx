import React, { Component } from "react";
import { Menu } from "../components/Menu";
import { Slideshow } from "../components/Slideshow";

export class Home extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <Slideshow></Slideshow>
      </div>
    );
  }
}

export default Home;
