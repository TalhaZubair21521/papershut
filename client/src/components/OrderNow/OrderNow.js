import React, { useState } from "react";
import "./OrderNow.css";
import PriceCalculator from "../PriceCalculator/PriceCalculator";
import Details from "../Details/Details";
const OrderNow = () => {
  const [Ready, setReady] = useState(true);

  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [DocumentType, setDocumentType] = useState("Select Document Type");
  const [AcademicLevel, setAcademicLevel] = useState("Select Academic Level");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Pages, setPages] = useState("Select Number of Pages");

  const [AcademicLevelId, setAcademicLevelId] = useState(0);
  const [deadline, setdeadline] = useState(0);
  const [NoOfPages, setNoOfPages] = useState(0);

  const [Step, setStep] = useState(1);

  const [Price, setPrice] = useState("0");

  const [Title, setTitle] = useState("");
  const [Subject, setSubject] = useState("Select Subject");
  const [Citation, setCitation] = useState("Select Citation Style");
  const [Sources, setSources] = useState("");
  const [Description, setDescription] = useState("");
  const [FileName, setFileName] = useState("");

  return (
    <div>
      <div className="OrderSection">
        <div className="Rectangle FreeServiceRectangle">
          <div className="FreeServicesHeading">
            <p>Follow these steps to Order</p>
          </div>
        </div>
        <div className="OrderContainer">
          <div style={Step === 1 ? { display: "" } : { display: "none" }}>
            <PriceCalculator
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
                Ready,
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
                setReady,
                setAcademicLevelId,
                setPrice,
                setStep,
              }}
            />
          </div>
          <div style={Step === 2 ? { display: "" } : { display: "none" }}>
            <Details
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
                Title,
                Subject,
                Citation,
                Sources,
                Description,
                FileName,
                setTitle,
                setSubject,
                setCitation,
                setSources,
                setDescription,
                setFileName,
                Price,
              }}
            />
          </div>
          <div className="PriceBox">
            <div>
              <p className="Totaldesc">Your Price</p>
              <p className="Total">${Math.round((Price + Number.EPSILON) * 100) / 100}</p>
            </div>
            <div>
              <div className="FlexBox">
                <p>Was:</p>
                <p>${Math.round((Price + Number.EPSILON) * 100) / 100}</p>
              </div>
              <div className="FlexBox">
                <p>Now:</p>
                <p>${Math.round((Price + Number.EPSILON) * 100) / 100}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
