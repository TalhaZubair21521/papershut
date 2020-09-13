import React, { useState, useEffect } from "react";
import "./ServicesSection.css";
import Axios from "axios";
require("dotenv").config();

export default function ServicesSection() {
  const [Services, setServices] = useState([]);

  useEffect(() => {
    const request = () => {
      const fetchdata = async () => Axios.get("/service/getServices");
      const result = fetchdata();
      result.then((res) => {
        console.log(res.data);
      });
    };
    request();
  }, []);

  return (
    <div>
      <div className="ServicesBox">
        <div className="Rectangle">
          <div className="ServicesHeading">
            <p>OUR SERVICES </p>
          </div>
        </div>
        <div className="ServicesContainer">
          <div className="column">
            <p>Home</p>
            <p>Our Writers</p>
            <p>Order</p>
            <p>Pricing</p>
            <p>About Us</p>
            <p>Why Us</p>
            <p>Blog</p>
            <p>Testmonials</p>
            <p>Writing Tools</p>
            <p>Case Converter</p>
            <p>GPA Calculator</p>
            <p>Word to Minutes</p>
            <p>Word Counter</p>
            <p>Words to Pages</p>
            <p>Essay Topic Generator</p>
            <p>Essay Examples</p>
            <p>Literary Essays</p>
            <p>Essay Topic Generator</p>
          </div>
          <div className="column">
            <p>Essay Examples</p>
            <p>Literary Essays</p>
            <p>Ms Thesis</p>
            <p>Nursery Essay</p>
            <p>Death Essay</p>
            <p>Literary Essay</p>
            <p>Science Essay</p>
            <p>Kids Essay</p>
            <p>Movie Essay</p>
            <p>English Coursework</p>
            <p>Education Papers</p>
            <p>University Essay</p>
            <p>Buy Presentation</p>
            <p>Legit Writing Service</p>
            <p>Essay Writer</p>
            <p>Essay Writing Service</p>
            <p>Turabian Style Paper</p>
            <p>Graduate Paper</p>
          </div>
          <div className="column">
            <p>Research Paper Topics</p>
            <p>College Term Paper</p>
            <p>Buy Speeches</p>
            <p>Papers For Money</p>
            <p>Papers For Sale</p>
            <p>Essay Help Online</p>
            <p>College Essay Help</p>
            <p>Do My Homework</p>
            <p>Opinion Essay</p>
            <p>Romeo and Juliet Essay</p>
            <p>Evaluation Essay</p>
            <p>Technology Essay</p>
            <p>Business Essay</p>
            <p>Dream Essay</p>
            <p>Dissertation Topics</p>
            <p>High School Essay</p>
            <p>MBA Essay</p>
            <p>Management Essay</p>
          </div>
          <div className="column">
            <p>Masters Essay</p>
            <p>English Papers</p>
            <p>Buy Report</p>
            <p>Essay Experts</p>
            <p>Dissertation Writing Services</p>
            <p>Descriptive Essays</p>
            <p>Reflective Essay</p>
            <p>Pay for Essay</p>
            <p>Cheap Essay</p>
            <p>Custom Essay</p>
            <p>Order Essay</p>
            <p>Do my Essay</p>
            <p>Buy Essay</p>
            <p>Essay Help</p>
            <p>Cheap Research Papers</p>
            <p>Custom Essays</p>
            <p>Dissertation Writers</p>
            <p>Paper Writing Service</p>
          </div>
          <div className="column">
            <p>Comparative Essay</p>
            <p>How to Write a Term Paper</p>
            <p>Graduate Essay</p>
            <p>Buy Term Paper</p>
            <p>Essay Topics</p>
            <p>Narrative Essays</p>
            <p>Speech Topics</p>
            <p>Buy Dissertation</p>
            <p>College Research Paper</p>
            <p>Term Paper</p>
            <p>Book Report</p>
            <p>College Essay</p>
            <p>Research Paper Help</p>
            <p>Buy Thesis</p>
            <p>Free Essay Writer</p>
            <p>Write my Paper</p>
            <p>Do my Paper</p>
          </div>
        </div>
      </div>
    </div>
  );
}
