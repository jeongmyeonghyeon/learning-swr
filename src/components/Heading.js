import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Heading({ children }) {
  return (
    <Base>
      <Link to="/">← Go back Index</Link>
      <span>{children}</span>
    </Base>
  );
}

const Base = styled.h1`
  position: relative;

  a {
    position: absolute;
    top: -15px;
    left: 0;
    font-size: 15px;
  }
`;

export default Heading;
