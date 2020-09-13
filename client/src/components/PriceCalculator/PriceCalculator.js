import React, { useState, useEffect } from "react";
import "./PriceCalculator.css";
import "popper.js";
import "jquery";

import Axios from "axios";
require("dotenv").config();
const PriceCalculator = ({ info }) => {
  const [Checks, setChecks] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [ready, setready] = useState(2);

  useEffect(() => {
    const request = () => {
      const data = {
        academic_level: info.AcademicLevelId,
        deadline_date: info.deadline,
        pages: info.NoOfPages,
      };
      const fetchdata = async () => Axios.post("/order/CalculatePrice", data);
      const result = fetchdata();
      result.then((res) => {
        console.log(res.data["result"]);
        info.setPrice(res.data["result"]);
        info.setStep(2);
        console.log(info);
      });
    };
    if (ready === 1) {
      request();
    }
  }, [ready]);

  const AcademicLevelIdHandle = () => {
    if (info.AcademicLevel === "High School") {
      info.setAcademicLevelId(1);
    } else if (info.AcademicLevel === "undergraduate") {
      info.setAcademicLevelId(2);
    } else if (info.AcademicLevel === "Master") {
      info.setAcademicLevelId(3);
    } else if (info.AcademicLevel === "Doctoral") {
      info.setAcademicLevelId(4);
    }

    info.setdeadline(info.Date.split("/") + " " + info.Time);
    console.log(info.deadline);
  };

  const checking = () => {
    // console.log("this is email: " + info.Email);
    let tempArr = [];
    for (let i = 0; i < 7; i++) {
      tempArr[i] = Checks[i];
    }
    if (info.Email !== "") {
      tempArr[0] = 1;
    }
    if (info.Phone !== "") {
      tempArr[1] = 1;
    }
    if (info.DocumentType !== "Select Document Type") {
      tempArr[2] = 1;
    }
    if (info.AcademicLevel !== "Select Academic Level") {
      tempArr[3] = 1;
    }
    if (info.Date !== "") {
      tempArr[4] = 1;
    }
    if (info.Time !== "") {
      tempArr[5] = 1;
    }
    if (info.Pages !== "Select Number of Pages") {
      tempArr[6] = 1;
    }
    setChecks(tempArr);
    if (tempArr.indexOf(0) === -1) {
      console.log("lllll");

      AcademicLevelIdHandle();
      console.log("yessssssss");
      setready(1);
    }
  };

  const dataHandler = async () => {
    await checking();
  };

  const PagesList = () => {
    const pages = [];
    for (let i = 0; i < 100; i++) {
      pages[i] = i + 1;
    }

    const listItems = pages.map((page) => {
      return (
        <a
          class="dropdown-item"
          onClick={() => {
            info.setPages(page + "page ~" + page * 300 + "words");
            info.setNoOfPages(page);
          }}
        >
          {page + "page ~" + page * 300 + "words"}
        </a>
      );
    });
    return listItems;
  };

  return (
    <div className="PriceCalculator">
      <div>
        <div className="alerting">
          <p className="labels">Email</p>
          <p
            className="alerts"
            style={Checks[0] === 0 ? { display: "" } : { display: "none" }}
          >
            Please Enter your email
          </p>
        </div>
        <input
          placeholder="Enter Your Email"
          className="Inputs"
          type="email"
          onChange={(event) => info.setEmail(event.target.value)}
        />
      </div>
      <div>
        <div className="alerting">
          <p className="labels">Phone</p>
          <p
            className="alerts"
            style={Checks[1] === 0 ? { display: "" } : { display: "none" }}
          >
            Please Enter your Phone number
          </p>
        </div>

        <input
          placeholder="Enter Your Phone Number"
          className="Inputs"
          type="phone"
          onChange={(event) => info.setPhone(event.target.value)}
        />
      </div>
      <div>
        <div className="alerting">
          <p className="labels">Select Document type</p>
          <p
            className="alerts"
            style={Checks[2] === 0 ? { display: "" } : { display: "none" }}
          >
            Please Enter Document type
          </p>
        </div>

        <div class="dropdown">
          <button
            class=" Inputs dropdownStyle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <p style={{ textAlign: "left" }}>{info.DocumentType}</p>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a
              class="dropdown-item"
              onClick={() => info.setDocumentType("Admission Essay")}
            >
              Admission Essay
            </a>
            <a
              class="dropdown-item"
              onClick={() => info.setDocumentType("Analytical Essay")}
            >
              Analytical Essay
            </a>
            <a
              class="dropdown-item"
              onClick={() => info.setDocumentType("Application Essay")}
            >
              Application Letter
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="alerting">
          <p className="labels">Academic Level</p>
          <p
            className="alerts"
            style={Checks[3] === 0 ? { display: "" } : { display: "none" }}
          >
            Please Enter Academic Level
          </p>
        </div>

        <div class="dropdown">
          <button
            class="Inputs dropdownStyle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p style={{ textAlign: "left" }}>{info.AcademicLevel}</p>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a
              class="dropdown-item"
              onClick={() => info.setAcademicLevel("High School")}
            >
              High School
            </a>
            <a
              class="dropdown-item"
              onClick={() => info.setAcademicLevel("undergraduate")}
            >
              College-undergraduate
            </a>
            <a
              class="dropdown-item"
              onClick={() => info.setAcademicLevel("Master")}
            >
              Master
            </a>
            <a
              class="dropdown-item"
              onClick={() => info.setAcademicLevel("Doctoral")}
            >
              Doctoral
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="alerting">
          <p className="labels">Deadline Date</p>
          <p
            className="alerts"
            style={Checks[4] === 0 ? { display: "" } : { display: "none" }}
          >
            Please Enter Deadline Date
          </p>
        </div>

        <input
          className="Inputs"
          type="date"
          onChange={(event) => info.setDate(event.target.value)}
        />
      </div>

      <div>
        <div className="alerting">
          <p className="labels">Deadline Time</p>
          <p
            className="alerts"
            style={Checks[5] === 0 ? { display: "" } : { display: "none" }}
          >
            Please Enter Deadline Time
          </p>
        </div>

        <input
          className="Inputs"
          type="time"
          onChange={(event) => info.setTime(event.target.value)}
        />
      </div>

      <div>
        <div className="alerting">
          <p className="labels">Number of pages</p>
          <p
            className="alerts"
            style={Checks[6] === 0 ? { display: "" } : { display: "none" }}
          >
            Please Enter Number of pages
          </p>
        </div>

        {/* <input placeholder="1 page ~ 300 words" className="Inputs" />/ */}
        <div class="dropdown">
          <button
            class="Inputs dropdownStyle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p style={{ textAlign: "left" }}>{info.Pages}</p>
          </button>
          <div
            class="dropdown-menu pagesdropdown"
            aria-labelledby="dropdownMenu1"
          >
            {PagesList()}
          </div>
        </div>
      </div>

      <div>
        <button
          className="CalculateButton"
          onClick={() => {
            dataHandler();
          }}
        >
          CALCULATE PRICE
        </button>
      </div>
    </div>
  );
};

export default PriceCalculator;
