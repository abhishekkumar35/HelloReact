import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

import Card from "../UI/Card";
import Search from "../Header/Search";
import "../common.css";
import { restaurantData } from "../RestaurantData";

const filterData = (restaurants, searchTxt) => {
  const filteredData = restaurants.filter((res) =>
    (res.data.name
      ? res.data.name.toLowerCase()
      : res.data.data.name.toLowerCase()
    ).includes(searchTxt.toLowerCase())
  );
  return filteredData;
};

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const setFilteredData = (restaurants, inputTxt) => {
    setfilteredRestaurants(filterData(restaurants, inputTxt));
  };

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4256415&lng=78.3277828&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setfilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    console.log(filteredRestaurants);
  }, [filteredRestaurants]);

  return (
    <>
      <Search restaurants={restaurants} setFilteredData={setFilteredData} />
      <Card>
        {filteredRestaurants.map((res) => {
          return (
            <>
              <Restaurant key={res.id} res={res} />
            </>
          );
        })}
      </Card>
    </>
  );
}

export default Restaurants;
