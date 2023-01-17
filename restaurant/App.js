import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header/Header";
import Restaurants from "./src/components/Body/RestaurantList";

const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <Header />
      <Restaurants />
    </>
  );
};

root.render(<App />);
