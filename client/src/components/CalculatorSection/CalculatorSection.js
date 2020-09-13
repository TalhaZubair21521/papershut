import React, { useState } from "react";
import "./CalculatorSection.css";
import Benefits from "../Benefits/Benefits";
import PriceCalculator from "../PriceCalculator/PriceCalculator";


export default function CalculatorSection() {
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [DocumentType, setDocumentType] = useState("Select Document Type");
  const [AcademicLevel, setAcademicLevel] = useState("Select Academic Level");
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Pages, setPages] = useState("Select Number of Pages");
  const [Price, setPrice] = useState('0')

  const [AcademicLevelId, setAcademicLevelId] = useState(0);
  const [deadline, setdeadline] = useState(0);
  const [NoOfPages, setNoOfPages] = useState(0);

  const [Filled, setFilled] = useState(0);
  const [Step, setStep] = useState(1);

  

  return (
    <div className="CalculatorBox">
      <div>
        <div className="Rectangle CRectangle">
          <div className="CalculatorHeading">
            <p>Benefits </p>
          </div>
        </div>
      </div>
      <div className='CalculatorContainer'>
        <div className="Benefits">
          <Benefits></Benefits>
        </div>
        {/* <PriceCalculator
          info={{
            Email,
            Phone,
            Date,
            Time,
            DocumentType,
            AcademicLevel,
            Pages,
            deadline,
            NoOfPages,
            AcademicLevelId,
            setEmail,
            setPhone,
            setDocumentType,
            setDate,
            setTime,
            setdeadline,
            setPages,
            setNoOfPages,
            setAcademicLevel,
            setAcademicLevelId,
            setPrice
          }}
          className='Calc'
        /> */}
      </div>
    </div>
  );
}
