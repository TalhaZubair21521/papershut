import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import PricingBanner from "../components/PricingBanner/PricingBanner";
import './Contact.css'
import ServiceBanner from "../components/ServiceBanner/ServiceBanner";
import Footer from "../components/Footer/Footer";
import ServicesSection from "../components/ServicesSection/ServicesSection";
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PricingBanner></PricingBanner>
      <div className='ContactBox'>
        <p className='heading'> GIVE US A RING</p>
        <p className='desc'>
          If you have any questions regarding our services, you can call us on
          +1 (866) 806-0016 at any time and get answers.
        </p>
      </div>
      <div className='ContactBox'>
        <p className='heading'> GIVE US A RING</p>
        <p className='desc'>
          If you have any questions regarding our services, you can call us on
          +1 (866) 806-0016 at any time and get answers.
        </p>
      </div>
      <div className='ContactBox'>
        <p className='heading'> GIVE US A RING</p>
        <p className='desc'>
          If you have any questions regarding our services, you can call us on
          +1 (866) 806-0016 at any time and get answers.
        </p>
      </div>
      <div className='ContactBox'>
        <p className='heading'> GIVE US A RING</p>
        <p className='desc'>
          If you have any questions regarding our services, you can call us on
          +1 (866) 806-0016 at any time and get answers.
        </p>
      </div>
      <div className='ContactBox'>
        <p className='heading'> GIVE US A RING</p>
        <p className='desc'>
          If you have any questions regarding our services, you can call us on
          +1 (866) 806-0016 at any time and get answers.
        </p>
      </div>
      <div className='ServiceContainer'>
          <ServiceBanner></ServiceBanner>
      </div>
      <div className='ServiceContainer'>
      <div className='ServiceContainer'>
          <ServicesSection></ServicesSection>
      </div>
          <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Contact;
