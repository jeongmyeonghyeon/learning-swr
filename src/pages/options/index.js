import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav";
import Heading from "../../components/Heading";
import ReactRouterLink from "../../components/ReactRouterLink";

function Options() {
  return (
    <>
      <Nav />
      <Heading />
      <Outlet />
    </>
  );
}

function Option() {
  return (
    <>
      <Ul>
        <Li>
          <ReactRouterLink to="/options/refreshInterval" />
        </Li>
      </Ul>
    </>
  );
}

const Ul = styled.ul``;

const Li = styled.li`
  :not(:first-of-type) {
    margin-top: 36px;
  }
`;

export { Options, Option };
