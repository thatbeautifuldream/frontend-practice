import React from "react";
import "./card-style.css";

function CardUI(props) {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="card-1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam saepe
          rerum esse, laborum quae minus qui alias quo assumenda illum.
        </p>
        <a href="#" className="btn btn-outline-success">
          Find More Here
        </a>
      </div>
    </div>
  );
}

export default CardUI;
