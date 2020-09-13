import React from "react";
import IconGraduation from "../../assets/Icon graduation.png";
import IconChatBubbless from "../../assets/Icon chatbubbles.png";
import IconMoney from "../../assets/Group 167.png";
import IconContact from "../../assets/Icon contact.png";

import './Benefits.css'
export default function Benefits() {
  return (
    <div>
      <div className="SingleBenefit">
        <div className="TwoBenefits"> 
          <div className='BenefitIcons'>
            <img src={IconGraduation}></img>
          </div>
          <div className='BenefitText'>
            <p className='BenefitHeading'>Native Essay Writers</p>
            <p className='BenefitDescription'>
              Advanced degrees from elite U.S universities, experts in your
              subject.
            </p>
          </div>
        </div>
        <div className="SingleBenefit">
          <div className='BenefitIcons'>
            <img src={IconChatBubbless}></img>
          </div>
          <div className='BenefitText'>
            <p className='BenefitHeading'>Personalized Customer Support</p>
            <p className='BenefitDescription'>
            Text, live chat, or call. Don't hesitate to contact us 24/7.
            </p>
          </div>
        </div>
      </div>
      <div className="TwoBenefits"> 
        <div className="SingleBenefit">
          <div className='BenefitIcons'>
            <img src={IconMoney}></img>
          </div>
          <div className='BenefitText'>
            <p className='BenefitHeading'>Money back guarantee</p>
            <p className='BenefitDescription'>
            You get your money back if we fail to deliver. No questions asked.
            </p>
          </div>
        </div>
        <div className="SingleBenefit">
          <div className='BenefitIcons'>
            <img src={IconContact} className='ContactImage'></img>
          </div>
          <div className='BenefitText'>
            <p className='BenefitHeading'>Writer contact</p>
            <p className='BenefitDescription'>
            Communicate with your assigned writer anonymously for FREE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
