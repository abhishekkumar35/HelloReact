import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { RESTAURANT_MENU } from "../../Constant";
import { IMAGE_URL } from "../../Constant";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);

  if (!restaurant) {
    return <h1>Loading...</h1>;
  }

  return (
    <p>
      {resId}
      <h1>{restaurant?.name}</h1>
      <img src={IMAGE_URL + restaurant?.cloudinaryImageId} />
      {Object.values(restaurant?.menu?.items).map((item, index) => (
        <li key={index}>
          {item?.name} = Rs {item?.price.toString().slice(0, -2)}
        </li>
      ))}
    </p>
  );
};

export default RestaurantMenu;
