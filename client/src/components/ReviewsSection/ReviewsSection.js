import React from "react";
import "./ReviewsSection.css";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
export default function ReviewsSection() {
  return (
    <div className="ReviewsSectionContainer">
      <div className="ReviewsRectangle">
        <div className="ReviewsHeading">
          <p>REVIEWS</p>
        </div>
      </div>
      <div className='Reviews1Container'>
        <CustomerReviews></CustomerReviews>
      </div>
    </div>
  );
}
