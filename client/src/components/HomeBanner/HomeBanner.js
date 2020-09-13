import React from "react";
import "./HomeBanner.css";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function HomeBanner() {
  return (
    <div className="HomeBanner">
      <div className="IntroText">
        <p className="Intro">
          LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED.
        </p>

        <p className="Sub-Intro">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </p>
        <div className="ButtonBox">
          <Link to="/order">
            <button className="IntroOrderButton">ORDER NOW</button>
          </Link>
        </div>
      </div>
      <div className="Reviews">
        <CustomerReviews></CustomerReviews>
      </div>
    </div>
  );
}
