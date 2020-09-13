import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Pricing.css";
import PricingBanner from "../components/PricingBanner/PricingBanner";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Axios from "axios";
require("dotenv").config();

const Pricing = () => {
  const [Prices, setPrices] = useState({});

  const renderRow = () => {
    const rows = [];

    var count = 0;
    for (const [key, value] of Object.entries(Prices)) {
      rows[count] = (
        <tr>
          <td>{key}</td>
          <td>{value[0].price + "$"}</td>
          <td>{value[1].price + "$"}</td>
          <td>{value[2].price + "$"}</td>
          <td>{value[3].price + "$"}</td>
          <td>{value[4].price + "$"}</td>
          <td>{value[5].price + "$"}</td>
          <td>{value[6].price + "$"}</td>
        </tr>
      );
      count++;
      console.log(rows);
    }

    return rows;
  };

  useEffect(() => {
    const request = () => {
      const fetchdata = async () => Axios.get("/prices/getPrices");
      const result = fetchdata();
      result.then((res) => {
        console.log(res.data["response"]);
        setPrices(res.data["response"]);
      });
    };
    request();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <PricingBanner></PricingBanner>
      <div class="TableContainer">
        <table class="table">
          <thead>
            <tr>
              <th className="Headings">Academic Level</th>
              <th className="Headings">12 hours</th>
              <th className="Headings">24 hours</th>
              <th className="Headings">2 day</th>
              <th className="Headings">3 day</th>
              <th className="Headings">4-5 days</th>
              <th className="Headings">6-7 days</th>
              <th className="Headings">8+ days</th>
            </tr>
          </thead>
          <tbody>{renderRow()}</tbody>
        </table>
      </div>
      <div>
        <ServicesSection></ServicesSection>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Pricing;
