import React, { Component } from "react";
import "../styles/card-style.css";
import "../styles/home-card-style.css";

import adamRelit from "../img/adam_relit.jpg";

// const Card = (props) => {
export class TextCard extends Component {
  render() {
    return (
      <div className="card text-center shadow">
        <div className="card-body text-dark">
          <h4 className="card-title">{this.props.cardTitle}</h4>
        </div>
      </div>
    );
  }
}

export default TextCard;
