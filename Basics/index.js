import React from "react";
import ReactDOM from "react-dom";

const para = React.createElement("p", {}, "Joke");
const heading = React.createElement("h1", { className: "bold_red" }, [
  "hello",
  para,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
