import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OrderNow from "../components/OrderNow/OrderNow";

const Order = () => {
  return (
    <div>
      <Navbar></Navbar>
      <OrderNow></OrderNow>
      <Footer></Footer>
    </div>
  );
};

export default Order;
