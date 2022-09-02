import React from "react";
import styled from "styled-components";

function HyperLink({ href }) {
  return (
    <Base>
      <a href={href} target="_blank" rel="noreferrer">
        {href}
      </a>
    </Base>
  );
}

const Base = styled.code`
  a {
    text-decoration: none;
    color: #737373;
  }
`;

export default HyperLink;
