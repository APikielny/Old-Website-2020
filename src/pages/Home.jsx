import React, { Component } from "react";
import { Menu } from "../components/Menu";
import { Slideshow } from "../components/Slideshow";
import { Footer } from "../components/Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <Slideshow></Slideshow>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
