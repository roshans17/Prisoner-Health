import React from "react";
//Styled
import styled from "styled-components";
//Import icons
import biotech from "../Images/biotech.svg";
import community from "../Images/community.svg";
import health from "../Images/health.svg";
import notebooks from "../Images/studying.svg";

const Motivation = () => {
  return (
    <StyledMotivation>
      {/* <StyledImage>
        <img src={notebooks} alt="picture of notebooks/studing" />
      </StyledImage> */}
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
    </StyledMotivation>
  );
};

const StyledMotivation = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
  h1 {
    display: flex;
    padding-bottom: 10rem;
    font-weight: 500;
  }
`;

const StyledImage = styled.div`
  position: relative;
  img {
    position: absolute;
width: 1134.1px;
height: 1008.79px;
left: 968.1px;
top: -150px;
  }
`;

export default Motivation;
