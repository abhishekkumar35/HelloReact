import React from "react";
import About from "./About";
import Cart from "./Cart";

function Menu(props) {
  const classes = props.classes;
  return (
    <>
      <h1 className={classes}>Home</h1>
      <About className={classes} />
      <Cart className={classes} />
    </>
  );
}

export default Menu;
