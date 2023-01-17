import React from "react";
import "../Common.css";

function Restaurant(props) {
  const res = props.res;
  return (
    <div key={res.id} className="card-body">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${
          res?.data?.cloudinaryImageId
            ? res?.data?.cloudinaryImageId
            : res?.data?.data?.cloudinaryImageId
        }`}
        className="image"
      />

      <h1 className="title">
        {res.data.name ? res.data.name : res.data.data.name}
      </h1>
      <p className="title">
        Total Ratings :
        {res.data.totalRatings
          ? res.data.totalRatings
          : res.data.data.totalRatings}
      </p>

      <p className="title">
        Rating :
        {res.data.avgRating ? res.data.avgRating : res.data.data.avgRating}
      </p>
    </div>
  );
}

export default Restaurant;
