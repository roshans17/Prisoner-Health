import React from "react";
//Import images
import engaging from "../Images/engaging.svg";
import thinking from "../Images/thinking.svg";
import participating from "../Images/participating.svg";

const LearnBy = () => {
  return (
    <div>
      <h1 className="Learn">LEARN BY</h1>
      <div className="learning-components">
        <div className="card">
          <div className="image">
            <img src={engaging} alt="books" />
            <h3>engaging</h3>
            <p>with all materials in subsequent modules</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={thinking} alt="a man thinking" />
            <h3>thinking</h3>
            <p>critically about end of module questions</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src={participating} alt="two people conversing" />
            <h3>participating</h3>
            <p>in meaningful conversations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnBy;
