import React from "react";
import About from "./About";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Menu(props) {
  const classes = props.classes;
  return (
    <>
      <Link to="/">
        <h1 className={classes}>Home</h1>
      </Link>
      <Link to="/about">
        <h1 className={classes}>About</h1>
      </Link>
      <Link to="/cart">
        <h1 className={classes}>Cart</h1>
      </Link>
    </>
  );
}

export default Menu;
