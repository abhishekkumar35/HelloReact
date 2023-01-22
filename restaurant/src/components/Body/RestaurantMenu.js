import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menuData, setMenuData] = useState({});
  const getRestaurantMenu = async () => {
    const restaurantMenuDataPromise = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=17.4271377&lng=78.32612209999999&menuId=${id}`
    );
    if (!restaurantMenuDataPromise.ok) {
      throw new Error("Failed to fetch restaurant menu.");
    }
    const jsonMenuData = await restaurantMenuDataPromise.json();
    setMenuData(jsonMenuData.data.menu);
    console.log(jsonMenuData.data);
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return (
    <p>
      {id} :
      {Object.values(menuData).map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </p>
  );
};

export default RestaurantMenu;
