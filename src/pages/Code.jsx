import React, { Component } from "react";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
// import { Card } from "../components/Card";
import Cards from "../components/Cards";

// import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export class Code extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Cards></Cards>
        {/* <CardColumns>
          <Card bg="dark">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src="holder.js/100px160" />
          </Card>
        </CardColumns> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Code;
