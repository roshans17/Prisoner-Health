import React from "react";
import landingimage from "../Images/landing2.jpg";
//Styled
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Landing>
      <div className="title">
        <Hide>
          <h2>HEALTH INEQUITIES</h2>
        </Hide>
        <Hide>
          <h2>WITHIN PRISONS</h2>
        </Hide>
        <button>LEARN TODAY</button>
      </div>
    </Landing>
  );
};

//Styled Components
const Landing = styled.div`
  background-image: url(${landingimage});
  min-height: 100vh;
  display: grid;
  grid-template-columns: 5% 60fr 40fr 5%;
  color: #f2efe9;
  background-size: cover;
  background-position: center;
  font-weight: 700;
  font-size: 2.2rem;
  font-family: normal;
  align-items: center;
  .title {
    grid-column: 2/3;
  }

  button {
    margin: 5rem 0rem 0rem 0rem;
  }
  h2 {
    font-weight: bold;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default LandingPage;
