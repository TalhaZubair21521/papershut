import React from "react";
import "./Navbar.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as Scroll from "react-scroll";
var scroll = Scroll.animateScroll;
function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">ESSAY LOGO</div>
      <div className="linksBox">
        <p className="links">
          <Link to="/" className="links">
            Home
          </Link>
        </p>
        <p className="links">
          <Link to="/" className="links" onClick={() => scroll.scrollTo(2550)}>
            Services
          </Link>
        </p>
        <p className="links">
          <Link to="/pricing" className="links">
            {" "}
            Prices
          </Link>
        </p>
        <p className="links">
          <Link to="/" className="links" onClick={() => scroll.scrollTo(3500)}>
            <a></a> Reviews
          </Link>
        </p>
        <p className="links">
          <Link to="/" className="links" onClick={() => scroll.scrollTo(6800)}>
            {" "}
            FAQ
          </Link>
        </p>
        <p className="links">
          <Link to="/Contact" className="links">
            {" "}
            Contact Us
          </Link>
        </p>
        <div>
          <Link to="/order">
            <button className="OrderButton">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
