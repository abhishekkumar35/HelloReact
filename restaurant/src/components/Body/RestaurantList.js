import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import Search from "../Header/Search";
import "../Common.css";
import { getRestaurants } from "../utils/helper";
import { restaurantData } from "../RestaurantData";
import { filterData } from "../utils/helper";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const setFilteredData = (restaurants, inputTxt) => {
    setfilteredRestaurants(filterData(restaurants, inputTxt));
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRestaurants();
      setRestaurants(result?.data?.cards[2]?.data?.data?.cards);
      setfilteredRestaurants(result?.data?.cards[2]?.data?.data?.cards);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(filteredRestaurants);
  }, [filteredRestaurants]);
  if (restaurants.length === 0) {
    return (
      <>
        <Search restaurants={restaurants} setFilteredData={setFilteredData} />
        <Shimmer />
      </>
    );
  } else {
    return (
      <>
        <Search restaurants={restaurants} setFilteredData={setFilteredData} />
        <Card>
          {filteredRestaurants.map((res) => {
            return (
              <>
                {console.log(res.data.id)}
                <Link to={"/restaurant/" + res.data.id} key={res.data.id}>
                  <Restaurant res={res} />
                </Link>
              </>
            );
          })}
        </Card>
      </>
    );
  }
}

export default RestaurantList;
