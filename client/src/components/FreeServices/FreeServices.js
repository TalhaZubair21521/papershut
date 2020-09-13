import React from "react";
import "./FreeServicesSection.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function FreeServices() {
  return (
    <div className="FreeServicesSection">
      <div className="Rectangle FreeServiceRectangle">
        <div className="FreeServicesHeading">
          <p>FREE SERVICES</p>
        </div>
      </div>
      <div className="FreeServicesContainer">
        <div>
          <div className="FreeService">
            <p className="FreeServiceInfo">24/7 ONLINE SUPPORT & LIVE CHAT</p>
            <div className="PriceContainer">
              <p className="Price">$4.35</p>
              <p className="Free">FREE</p>
            </div>
          </div>
          <div className="FreeService">
            <p className="FreeServiceInfo">DIRECT WRITER COMMUNICATION</p>
            <div className="PriceContainer">
              <p className="Price">$4.35</p>
              <p className="Free">FREE</p>
            </div>
          </div>
          <div className="FreeService">
            <p className="FreeServiceInfo">
              APA/MLA/CHICAGO/APSA/ AMA/ACS/IEEE FORMATTING
            </p>
            <div className="PriceContainer">
              <p className="Price">$4.35</p>
              <p className="Free">FREE</p>
            </div>
          </div>
        </div>
        <div>
          <div className="FreeService">
            <p className="FreeServiceInfo">UNLIMITED SOURCES</p>
            <div className="PriceContainer">
              <p className="Price">$4.35</p>
              <p className="Free">FREE</p>
            </div>
          </div>
          <div className="FreeService">
            <p className="FreeServiceInfo">TITLE PAGE & BIBLIOGRAPHY</p>
            <div className="PriceContainer">
              <p className="Price">$4.35</p>
              <p className="Free">FREE</p>
            </div>
          </div>
          <div className="FreeService">
            <p className="FreeServiceInfo">14-DAY REVISION PERIOD</p>
            <div className="PriceContainer">
              <p className="Price">$4.35</p>
              <p className="Free">FREE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="SavingInfo">
        <p className="YouSave">YOU SAVE:</p>
        <p className="SaveAmount">$37.90</p>
      </div>
      <div>
        <Link to="/order">
          <button className="AddFreebiesButton">
            ADD FREEBIES TO MY ORDER
          </button>
        </Link>
      </div>
    </div>
  );
}
