import React from "react";
import { Link } from "react-router-dom";
import getTitleByPathname from "../utils/getTitleByPathname";

function ReactRouterLink({ to }) {
  return (
    <Link to={to}>
      <h3>{getTitleByPathname(to)}</h3>
    </Link>
  );
}

export default ReactRouterLink;
