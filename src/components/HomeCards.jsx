import React, { Component } from "react";
import HomeCard from "./HomeCard";
import TextCard from "./TextCard";
import { render } from "@testing-library/react";
import adamRelit from "../img/adam_relit.jpg";
import boids from "../img/boidsStaring.jpg";

class HomeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <HomeCard
              imgsrc={adamRelit}
              cardTitle="Portrait Image Relighting"
            ></HomeCard>
          </div>
          <div className="col-md-4">
            <TextCard imgsrc={boids} cardTitle="Hey! I'm Adam..."></TextCard>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCards;
