import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Heading({ children }) {
  const navigate = useNavigate();

  return (
    <Base>
      <Nav>
        <div onClick={() => navigate("/")}>🏡 Home</div>
        <div onClick={() => navigate(-1)}>🔙 Back to the previous</div>
      </Nav>
      <h1>{children}</h1>
    </Base>
  );
}

const Base = styled.div`
  position: relative;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 4px;

  div:nth-of-type(2) {
    margin-left: 12px;
  }
`;

export default Heading;
