import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const slideStyle = {
  padding: "100px",
  margin: "100px"
};

export class Slideshow extends Component {
  render() {
    return (
      <Carousel style={slideStyle}>
        <Carousel.Item>
          <img
            src="https://github.com/APikielny/Personal-Site/blob/master/src/components/A.jpg?raw=true"
            alt="image isn't working"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
