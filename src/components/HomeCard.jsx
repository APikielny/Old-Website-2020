import React, { Component } from "react";
import "../styles/card-style.css";
import "../styles/home-card-style.css";

import adamRelit from "../img/adam_relit.jpg";

// const Card = (props) => {
export class HomeCard extends Component {
  render() {
    return (
      <div className="card text-center shadow">
        <div className="overflow">
          <img
            src={this.props.imgsrc}
            alt="adam relit"
            className="card-img-top"
          />
        </div>
      </div>
    );
  }
}

export default HomeCard;
