import React from "react";
import ImgVisa from "../../assets/Icon payment-visa.png";
import ImgMastercard from "../../assets/Icon simple-mastercard.png";
import ImgAmericanExpress from "../../assets/Icon simple-americanexpress.png";
import Imgdiscover from "../../assets/Icon awesome-cc-discover.png";
import ImgQuality from "../../assets/Screenshot (55)-1.png";
import ImgPlagiarism from "../../assets/Screenshot (56)-1.png";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";


import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div className='FooterContainer1'>
        <p className='Logo'>ESSAY LOGO</p>
        <div>
          <img src={ImgVisa} />
          <img src={ImgMastercard} />
          <img src={ImgAmericanExpress} />
          <img src={Imgdiscover} />
        </div>
      </div>
      <div className='FooterContainer2'>
        <img src={ImgQuality} />
        <img src={ImgPlagiarism} />
      </div>
      <div className ='FooterContainer3'>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <Link to="/Contact" className='FooterLink'>
            {" "}
            Contact Us
          </Link>
      </div>
    </div>
  );
}
