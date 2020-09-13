import React from "react";
import "./PricingBanner.css";
const PricingBanner = () => {
  return (
    <div>
      <div className="PricingBanner">
        <div className="IntroTextPricing">
          <p className="Intro PricingIntro">
            PaperShut delivers more than mere "value".
          </p>

          <p className="Sub-Intro PricingSub">
            5StarEssays pricing reflects the quality of the essay writing you’ll
            get from us. Our pricing is fair, guarantees your absolute
            satisfaction, and is based on three factors:
            <ol>
              <li>
                Your deadline. We will meet it without exception...or you don’t
                pay!
              </li>
              <li>
                The number of pages your essay requires; we will meet or exceed
                that number.
              </li>
              <li>
                The "level" of writing you need. High school? Undergrad?
                Doctoral thesis? The writing will always be appropriate to your
                academic level.
              </li>
            </ol>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default PricingBanner;
