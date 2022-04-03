import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const { name, text, ratings } = review;
  return (
    <div className="col-lg-4 ">
      <div className="p-3 card-design">
        <h5 className="text-center">Name : {name}</h5>
        <p className="text-center">{text}</p>
        <p className="text-center">Ratings : {ratings}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
