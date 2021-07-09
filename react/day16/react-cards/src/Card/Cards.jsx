import React, { Component } from "react";
import Card from "./CardUI";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
export default class Cards extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card imgsrc={card1} title="DSA and Problem Solving" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={card2} title="Frontend Web Development" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={card3} title="Backend Web Development" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
