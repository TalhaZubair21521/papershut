import React, { useState } from "react";
import "./FAQSection.css";
import ImgQuestionMark from "../../assets/questionMark.png";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function FAQSection() {
  const [Question, setQuestion] = useState(1);
  return (
    <div className="FAQSection">
      <div className="Rectangle FAQRectangle">
        <div className="FAQHeading">
          <p>FREQUENTLY ASKED QUESTIONS</p>
        </div>
      </div>

      <div className="FAQContainer">
        <div className={Question === 1 ? "QuestionBox opened" : "QuestionBox"}>
          <div
            className={Question === 1 ? "QuestionHeadingContainer" : ""}
            onClick={() => setQuestion(1)}
          >
            <p className="Question">If I need revisions, how do I get them?</p>
          </div>
          <div
            style={Question === 1 ? {} : { display: "none" }}
            className="Answer"
          >
            We guarantee the maximum quality level of your paper. If you would
            like to amend the final draft, activate the 14-day revision period
            from your Personal area with the site. Follow the instructions that
            will be shown on your screen, and essay writer will revise the
            document according to your remarks.
          </div>
        </div>
        <div className={Question === 2 ? "QuestionBox opened" : "QuestionBox"}>
          <div
            className={Question === 2 ? "QuestionHeadingContainer" : ""}
            onClick={() => setQuestion(2)}
          >
            <p className="Question">If I need revisions, how do I get them?</p>
          </div>
          <div
            style={Question === 2 ? {} : { display: "none" }}
            className="Answer"
          >
            We guarantee the maximum quality level of your paper. If you would
            like to amend the final draft, activate the 14-day revision period
            from your Personal area with the site. Follow the instructions that
            will be shown on your screen, and essay writer will revise the
            document according to your remarks.
          </div>
        </div>
        <div className={Question === 3 ? "QuestionBox opened" : "QuestionBox"}>
          <div
            className={Question === 3 ? "QuestionHeadingContainer" : ""}
            onClick={() => setQuestion(3)}
          >
            <p className="Question">If I need revisions, how do I get them?</p>
          </div>
          <div
            style={Question === 3 ? {} : { display: "none" }}
            className="Answer"
          >
            We guarantee the maximum quality level of your paper. If you would
            like to amend the final draft, activate the 14-day revision period
            from your Personal area with the site. Follow the instructions that
            will be shown on your screen, and essay writer will revise the
            document according to your remarks.
          </div>
        </div>
        <div className={Question === 4 ? "QuestionBox opened" : "QuestionBox"}>
          <div
            className={Question === 4 ? "QuestionHeadingContainer" : ""}
            onClick={() => setQuestion(4)}
          >
            <p className="Question">If I need revisions, how do I get them?</p>
          </div>
          <div
            style={Question === 4 ? {} : { display: "none" }}
            className="Answer"
          >
            We guarantee the maximum quality level of your paper. If you would
            like to amend the final draft, activate the 14-day revision period
            from your Personal area with the site. Follow the instructions that
            will be shown on your screen, and essay writer will revise the
            document according to your remarks.
          </div>
        </div>
        <div className={Question === 5 ? "QuestionBox opened" : "QuestionBox"}>
          <div
            className={Question === 5 ? "QuestionHeadingContainer" : ""}
            onClick={() => setQuestion(5)}
          >
            <p className="Question">If I need revisions, how do I get them?</p>
          </div>
          <div
            style={Question === 5 ? {} : { display: "none" }}
            className="Answer"
          >
            We guarantee the maximum quality level of your paper. If you would
            like to amend the final draft, activate the 14-day revision period
            from your Personal area with the site. Follow the instructions that
            will be shown on your screen, and essay writer will revise the
            document according to your remarks.
          </div>
        </div>
      </div>
      <div>
        <Link to="/order">
          <button className="OrderButton FAQButton">Order Now</button>
        </Link>
      </div>
      <div>
        <img src={ImgQuestionMark} className="QuestionMarkImg" />
        <img src={ImgQuestionMark} className="QuestionMarkImg1" />
        <img src={ImgQuestionMark} className="QuestionMarkImg2" />
        <img src={ImgQuestionMark} className="QuestionMarkImg3" />
        <img src={ImgQuestionMark} className="QuestionMarkImg4" />
      </div>
    </div>
  );
}
