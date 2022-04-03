import React from "react";
import "./Home.css";
import coverImg from "../../assets/cover_img.jpg";

const Home = () => {
  return (
    <div className="px-5 py-5">
      <div className="main-cover">
        <div className="row gy-4 d-flex align-items-center">
          <div className="col-lg-6">
            <div>
              <h1 className="cover-title fw-bold">Your next GPU</h1>
              <h1 className="cover-title text-danger fw-bold">Your best GPU</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus fuga illum facere itaque commodi! Quia accusamus amet
                voluptate quidem in?
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
    </div>
  );
};

export default Home;
