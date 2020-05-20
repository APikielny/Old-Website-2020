import React, { Component } from "react";
import { Menu } from "../components/Menu";
import { Loader } from "../components/Loader";
import { Slideshow } from "../components/Slideshow";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import HomeCards from "../components/HomeCards";

export class Home extends Component {
  state = { loading: true };
  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    // if (this.state.loading) {
    //   return <Loader></Loader>;
    // }
    return (
      <div>
        {/* <Menu></Menu> */}
        {/* <img src={require("../img/bryce.jpg")}></img> */}
        <Header></Header>
        <p>Here I have some text for testing. Lorem ipsum blah blah blah.</p>
        <HomeCards></HomeCards>

        {/* <Slideshow></Slideshow> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
