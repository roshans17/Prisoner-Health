import React, { useState } from "react";
import styled from "styled-components";

const Nav = () => {

  return (
    <StyledNav>
      <ul>
        <li>
          <a href="#">Guide</a>
        </li>
        <li>
          <a href="#">Motivation</a>
        </li>
        <li>
          <a href="#">Module 1</a>
        </li>
        <li>
          <a href="#">Module 2</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 5vh;
  position: fixed;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
  a {
    color: #f2efe9;
    text-decoration: none;
    font-weight: 600;
    position: relative;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
