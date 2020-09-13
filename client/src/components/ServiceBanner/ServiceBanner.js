import React from "react";
import "./ServiceBanner.css";
import design1 from "../../assets/SemiCircle.png";
import design2 from "../../assets/Union 2.png";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function ServiceBanner() {
  return (
    <div className="ServiceBannerContainer">
      <img src={design2} className="design2"></img>
      <img src={design1} className="design1"></img>

      <p className="ServiceBannerHeading">PROFESSIONAL WRITING SERVICE</p>
      <p className="ServiceBannerDescription">
        coupled with a <strong> 50% OFF </strong> for students of Every Academic
        Level
      </p>
      <Link to="/order">
        <button className="ServiceOrderButton">GET STARTED</button>
      </Link>
    </div>
  );
}
