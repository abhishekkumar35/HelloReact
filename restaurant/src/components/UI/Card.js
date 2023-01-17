import React from "react";
import "../Common.css";

function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;
