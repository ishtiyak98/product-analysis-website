import React from "react";
import "./Home.css";
import coverImg from "../../assets/cover_img.jpg";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews] = useReviews();
  let navigate =useNavigate();
  return (
    <div className="container py-5">
      <div className="main-cover">
        <div className="row gy-4 d-flex align-items-center main-cover-row">
          <div className="col-lg-6">
            <div>
              <h1 className="main-title text-danger fw-bold">GPU REVIEW</h1>
              <h1 className="cover-title fw-bold">Your next GPU</h1>
              <h1 className="cover-title text-danger fw-bold">Your best GPU</h1>
              <p className="fs-5 text-secondary py-2">
                We have the best GPU products with strong customer community. Customer satisfaction is our First Priority. Buy our products and join the great community to get a best customer experience.
              </p>
              <div className="btn btn-danger">Live Demo</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img className="img-fluid" src={coverImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center mb-5 text-success fw-bold">Customer Reviews ({reviews.slice(0,3).length})</h2>
        <div className='row gx-4 gy-5'>
            {
                reviews.slice(0,3).map(review=> <ReviewCard key={review.id} review={review}></ReviewCard>)
            }
        </div>
        <div className="text-center my-4">
          <button onClick={()=> navigate("/reviews")} className="btn btn-success mt-3">See All Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
