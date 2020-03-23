import React, { Component } from "react";
import { Menu } from "../components/Menu";
import { Slideshow } from "../components/Slideshow";
import { Footer } from "../components/Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <p>Here I have some text for testing. Lorem ipsum blah blah blah.</p>
        {/* <Slideshow></Slideshow> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
