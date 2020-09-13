import React from "react";
import TrustPilotImg from "../../assets/Group 157.png";
import SiteJabberImg from "../../assets/sitejabber_logo.png";
// import Reviewsbg from "../../assets/backgrounddbg.png";/
import "./CustomerReviews.css";

export default function CustomerReviews() {
  return (
    <div className="Reviews">
      <div className="TrustPilotReview">
        <img src={TrustPilotImg}></img>
        <div className="ReviewsContainer">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <p className="Customer">Customer Name</p>
        <p className="date">08/08/2020</p>
      </div>
      <div className="SiteJabberReview">
        <img src={SiteJabberImg} className="SiteJabberLogo"></img>
        <div className="ReviewsContainer">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <p className="Customer">Customer Name</p>
        <p className="date">08/08/2020</p>
      </div>
    </div>
  );
}
