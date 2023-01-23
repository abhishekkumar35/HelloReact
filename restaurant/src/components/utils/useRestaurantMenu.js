import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../../Constant";

export const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantMenuInfo(resId);
  }, []);

  async function getRestaurantMenuInfo(resId) {
    const url = RESTAURANT_MENU + resId;
    console.log(url);
    const restaurant = await fetch(url);
    const restaurantData = await restaurant.json();
    setRestaurant(restaurantData.data);
    console.log(restaurantData.data);
  }
  return restaurant;
};
