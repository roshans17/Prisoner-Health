import React from "react";
//Import icons
import biotech from "../Images/biotech.svg";
import community from "../Images/community.svg";
import health from "../Images/health.svg";

const Motivation = () => {
  return (
    <div className="motivation">
      <h1>Why you should learn about the health of prisoners: </h1>
      <div className="reason-1">
        <div className="img">
          <img src={biotech} alt="biotech" />
        </div>
        <p>
          Biotechnology is <span> rapidly </span> evolving, and it is our duty
          and a learning goal of this course, to examine the ethical
          implications of the field.
        </p>
      </div>
      <div className="reason-2">
        <div className="image">
          <img src={community} alt="picture of building" />
        </div>
        <p>
          The health of prisoners <span>influences</span> community health. A
          big misconception is that disease and health factors stay behind the
          walls.
        </p>
      </div>
      <div className="reason-3">
        <div className="image">
          <img src={health} alt="health" />
        </div>
        <p>
          Prisoners are <span>humans.</span> They are someone’s family memeber,
          friend, and loved one. more words....
        </p>
      </div>
    </div>
  );
};

export default Motivation;
