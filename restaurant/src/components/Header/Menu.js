import React from "react";
import About from "./About";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Menu(props) {
  const classes = props.classes;
  return (
    <>
      <h1 className={classes}>Home</h1>
      <Link to="/about">
        <About className={classes} />
      </Link>
      <Cart className={classes} />
    </>
  );
}

export default Menu;
