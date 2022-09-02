import React from "react";
import ReactRouterLink from "../components/ReactRouterLink";

function Home() {
  return (
    <>
      <h3>SWR 학습한 내용 정리 📝</h3>
      <hr />
      <ul>
        <li>
          <ReactRouterLink to="/getting-started" />
        </li>
        <li>
          <ReactRouterLink to="/options" />
        </li>
      </ul>
    </>
  );
}

export default Home;
