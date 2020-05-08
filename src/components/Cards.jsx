import React, { Component } from "react";
import Card from "./Card";
import { render } from "@testing-library/react";
import adamRelit from "../img/adam_relit.jpg";
import boids from "../img/boidsStaring.jpg";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card
              imgsrc={adamRelit}
              cardTitle="Portrait Image Relighting"
            ></Card>
          </div>
          <div className="col-md-4">
            <Card imgsrc={boids} cardTitle="The Admiral"></Card>
          </div>
          <div className="col-md-4">
            <Card cardTitle="Crossword"></Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
