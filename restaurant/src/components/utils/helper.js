import { RESTAURANT_LIST } from "../../Constant";

export const filterData = (restaurants, searchTxt) => {
  const filteredData = restaurants.filter((res) =>
    (res.data.name
      ? res.data.name.toLowerCase()
      : res.data.data.name.toLowerCase()
    ).includes(searchTxt.toLowerCase())
  );
  return filteredData;
};

export async function getRestaurants() {
  try {
    const response = await fetch(RESTAURANT_LIST);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
}
