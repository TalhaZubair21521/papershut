import React from "react";
import dnaImg from "../../assets/dna.png";
import "./Features.css";
export default function Features() {
  return (
    <div className='MainContainer'>
      <div className="FeatureBox">
        <div className="boxHeader">
          <div className="ImgEllipse">
            <img src={dnaImg} className="dnaImg"></img>
          </div>
          <div className='Header'>
            <p>INFORMATION CONFIDENTIALITY</p>
          </div>
        </div>
        <div className='Description'>Over 10 Years of Industry Experience</div>
      </div>
      <div className="FeatureBox">
        <div className="boxHeader">
          <div className="ImgEllipse">
            <img src={dnaImg} className="dnaImg"></img>
          </div>
          <div className='Header'>
            <p>INFORMATION CONFIDENTIALITY</p>
          </div>
        </div>
        <div className='Description'>Over 10 Years of Industry Experience</div>
      </div>
      <div className="FeatureBox">
        <div className="boxHeader">
          <div className="ImgEllipse">
            <img src={dnaImg} className="dnaImg"></img>
          </div>
          <div className='Header'>
            <p>INFORMATION CONFIDENTIALITY</p>
          </div>
        </div>
        <div className='Description'>Over 10 Years of Industry Experience</div>
      </div>
    </div>
  );
}
