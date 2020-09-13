import React, { useEffect, useState } from "react";
import "./Details.css";
import Axios from "axios";
require("dotenv").config();

const Details = ({ info }) => {
  const [Ready, setReady] = useState();
  const [Checks, setChecks] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const request = () => {
      const datatoSend = new FormData();
      datatoSend.append("email", info.Email);

      datatoSend.append("phone", info.Phone);

      datatoSend.append("document_type", info.DocumentType);

      datatoSend.append("academic_level", info.AcademicLevelId);

      datatoSend.append("deadline_date", info.deadline);

      datatoSend.append("pages", info.NoOfPages);

      datatoSend.append("title", info.Title);

      datatoSend.append("price", info.Price);

      datatoSend.append("subject", info.Subject);

      datatoSend.append("citation", info.Citation);

      datatoSend.append("sources", info.Sources);

      datatoSend.append("description", info.Description);

      datatoSend.append("file", info.FileName);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const fetchdata = async () =>
        Axios.post("/order/createOrder", datatoSend, config);
      const result = fetchdata();
      result.then((res) => {
        setReady(0);
        const url = res.data;
        console.log(url);
        window.location.href = url;
      });
    };
    if (Ready === 1) {
      request();
    }
  }, [Ready]);

  const checking = () => {
    console.log("this is email: " + info.Email);
    let tempArr = [];
    for (let i = 0; i < 7; i++) {
      tempArr[i] = Checks[i];
    }
    if (info.Title !== "") {
      tempArr[0] = 1;
    }
    if (info.Subject !== "") {
      tempArr[1] = 1;
    }
    if (info.Citation !== "Select Document Type") {
      tempArr[2] = 1;
    }
    if (info.Sources !== "Select Academic Level") {
      tempArr[3] = 1;
    }
    if (info.Description !== "") {
      tempArr[4] = 1;
    }
    if (info.FileName !== "") {
      tempArr[5] = 1;
    }
    setChecks(tempArr);
    if (tempArr.indexOf(0) === -1) {
      console.log("yessssssss");
      setReady(1);
    }
  };

  return (
    <div className="Details">
      <div>
        <p className="labels">Title</p>
        <input
          placeholder="Enter Assignment Title"
          className="Inputs"
          onChange={(event) => info.setTitle(event.target.value)}
        />
      </div>
      <div>
        <p className="labels">Subject</p>
        <div class="dropdown">
          <button
            class=" Inputs dropdownStyle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <p style={{ textAlign: "left" }}>{info.Subject}</p>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a class="dropdown-item" onClick={() => info.setSubject("Biology")}>
              Biology
            </a>
            <a
              class="dropdown-item"
              onClick={() => info.setSubject("Economics")}
            >
              Economics
            </a>
            <a class="dropdown-item" onClick={() => info.setSubject("Culture")}>
              Culture
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="labels">Citation Style</p>
        <div class="dropdown">
          <button
            class=" Inputs dropdownStyle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <p style={{ textAlign: "left" }}>{info.Citation}</p>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a class="dropdown-item" onClick={() => info.setCitation("AMA")}>
              AMA
            </a>
            <a class="dropdown-item" onClick={() => info.setCitation("MLA")}>
              MLA
            </a>
            <a class="dropdown-item" onClick={() => info.setCitation("APA")}>
              APA
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="labels">Number of Sources</p>
        <input
          placeholder="e.g 3 sources(1 literary, 2 peer Reviewed Academic)"
          className="Inputs"
          onChange={(event) => info.setSources(event.target.value)}
        />
      </div>
      <div>
        <p className="labels">Description</p>
        <input
          placeholder="Describe your task in detail"
          className="Inputs"
          onChange={(event) => info.setDescription(event.target.value)}
        />
      </div>
      <div>
        <p className="labels">Attachment(s)</p>
        <input
          // placeholder=""
          className="Inputs"
          type="file"
          onChange={(event) => info.setFileName(event.target.files[0])}
        />
      </div>
      <button
        className="CalculateButton"
        onClick={() => {
          checking();
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Details;
