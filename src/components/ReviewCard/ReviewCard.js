import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const { name, text, ratings, image } = review;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="p-3 card-design">
        <div className="d-flex justify-content-center my-3">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <h4 className="text-center text-success">{name}</h4>
        <p className="text-center review-text">"{text}"</p>
        <p className="text-center fw-bold">Ratings : {ratings}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
