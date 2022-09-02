import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../components/Heading";

function Options() {
  const location = useLocation();
  let title = "";

  switch (location.pathname) {
    case "/options/refreshInterval":
      title = "인터벌 시에 갱신하기(refreshInterval)";
      break;
    default:
      title = "Options";
      break;
  }

  return (
    <>
      <Heading>{title}</Heading>
      <Outlet />
    </>
  );
}

function Option() {
  return (
    <>
      <Ul>
        <Li>
          <Link to="/options/refreshInterval">
            <h3>인터벌 시에 갱신하기(refreshInterval)</h3>
          </Link>
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
