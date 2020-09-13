import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Features from "../components/Features/Features";
import CalculatorSection from "../components/CalculatorSection/CalculatorSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import StepsSection from "../components/StepsSection/StepsSection";
import ServiceBanner from "../components/ServiceBanner/ServiceBanner";
import QualityBanner from "../components/QualityBanner/QualityBanner";
import FreeServices from "../components/FreeServices/FreeServices";
import FAQSection from "../components/FAQSection/FAQSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="Banner">
        <div className="Nav">
          <Navbar></Navbar>
        </div>
        <div className="HomeBanner">
          <HomeBanner></HomeBanner>
        </div>
        <div className="FeaturesBox">
          <Features></Features>
        </div>
        <CalculatorSection></CalculatorSection>
        <ServicesSection></ServicesSection>
        <ReviewsSection></ReviewsSection>
        <StepsSection></StepsSection>
        <ServiceBanner></ServiceBanner>
        <QualityBanner></QualityBanner>
        <FreeServices></FreeServices>
        <FAQSection></FAQSection>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
