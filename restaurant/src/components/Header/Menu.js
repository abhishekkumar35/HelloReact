import React from "react";

function Menu(props) {
  const classes = props.classes;
  return (
    <>
      <p className={classes}>Home</p>
      <p className={classes}>About</p>
      <p className={classes}>Contact</p>
    </>
  );
}

export default Menu;
