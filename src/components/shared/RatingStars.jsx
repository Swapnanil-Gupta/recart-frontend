import React from "react";
import ReactStars from "react-rating-stars-component";

function RatingStars({ size, edit, value, onChange }) {
  return (
    <ReactStars
      count={5}
      size={size}
      isHalf={true}
      edit={edit ?? true}
      color="#EDF2F7"
      activeColor="#319795"
      value={value}
      onChange={onChange}
    />
  );
}

export default RatingStars;
