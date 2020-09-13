import React, { useState } from "react";
import "./StepsSection.css";
import step1 from '../../assets/step1.PNG'
import step2 from '../../assets/step2.PNG'
import step3 from '../../assets/step3.PNG'

export default function StepsSection() {
  const [selected, setSelected] = useState(step1);
  return (
    <div className="StepsSectionContainer">
      <div className="Rectangle StepsSectionRectangle">
        <div className="StepsHeading">
          <p>NEW ESSAY IN 3 STEPS</p>
        </div>
      </div>
      <div className="StepsArea">
        <div className="StepsContainer">
          <div className="SingleStep">
            <p className='SingleStepHeading'>STEP 1</p>
            <button
              className={
                selected === step1
                  ? "btn btn-outline-secondary IsClicked"
                  : "btn btn-outline-secondary"
              }
              onClick={() => setSelected(step1)}
            >
              PRICE CALCULATOR
            </button>
          </div>
          <div className="SingleStep">
            <p className='SingleStepHeading'>STEP 2</p>
            <button
              className={
                selected === step2
                  ? "btn btn-outline-secondary IsClicked"
                  : "btn btn-outline-secondary"
              }
              onClick={() => setSelected(step2)}
            >
              INSTRUCTIONS
            </button>
          </div>
          <div className="SingleStep">
            <p className='SingleStepHeading'>STEP 3</p>
            <button
              className={
                selected === step3
                  ? "btn btn-outline-secondary IsClicked"
                  : "btn btn-outline-secondary"
              }
              onClick={() => setSelected(step3)}
            >
              Payment
            </button>
          </div>
        </div>
        <div className="ImgContainer">
          <img src={selected} className='imageSelected'></img>
        </div>
      </div>
    </div>
  );
}
