import React from "react";
import landingimage from "../Images/landing.svg";

const LandingPage = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>HEALTH INEQUITIES</h2>
          </div>
          <div className="hide">
            <h2>WITHIN PRISONS</h2>
          </div>
        </div>
        <button>LEARN TODAY</button>
      </div>
      <div className="image">
        <img src={landingimage} alt="prison" />
      </div>
    </div>
  );
};

export default LandingPage;
