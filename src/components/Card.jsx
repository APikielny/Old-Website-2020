import React, { Component } from "react";
import "../styles/card-style.css";

import adamRelit from "../img/adam_relit.jpg";

// const Card = (props) => {
export class Card extends Component {
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
        <div className="card-body text-dark">
          <h4 className="card-title">{this.props.cardTitle}</h4>
          <p className="card-test text-secindary">Description</p>
          <a href="#" clasName="btn btn-outline-success">
            Link
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
