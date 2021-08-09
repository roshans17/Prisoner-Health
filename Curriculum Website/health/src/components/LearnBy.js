import React from "react";
//Styled
import styled from "styled-components";
//Import images
import engaging from "../Images/engaging.svg";
import thinking from "../Images/thinking.svg";
import participating from "../Images/participating.svg";

const LearnBy = () => {
  return (
    <PageLayout>
      <h1 className="Learn">LEARN BY</h1>
      <div className="engaging">
        <div className="image">
          <img src={engaging} alt="books" />
          <h3>engaging</h3>
          <p>with all materials in subsequent modules</p>
        </div>
      </div>
      <div className="thinking">
        <div className="image">
          <img src={thinking} alt="a man thinking" />
          <h3>thinking</h3>
          <p>critically about end of module questions</p>
        </div>
      </div>
      <div className="participating">
        <div className="image">
          <img src={participating} alt="two people conversing" />
          <h3>participating</h3>
          <p>in meaningful conversations</p>
        </div>
      </div>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  min-height: 100vh;
  background-color: #050a0d;
  color: #ffff;
  display: grid;
  grid-template-columns: 5% 30fr 30fr 30fr 5%;
  align-items: center;
  text-align: center;
  grid-template-rows: 10fr 20fr 50fr 20fr;
  h1 {
    grid-row: 2/3;
    grid-column: 3/4;
    font-size: 2.4rem;
    
  }
  .engaging {
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .thinking {
    grid-column: 3/4;
    justify-content: center;
    grid-row: 3/4;
  }
  .participating {
    grid-column: 4/5;
    justify-content: center;
    grid-row: 3/4;
  }
`;

export default LearnBy;
