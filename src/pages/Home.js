import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h3>SWR 학습한 내용 정리 📝</h3>
      <hr />
      <ul>
        <li>
          <Link to="/getting-started">
            <h3>Getting Started</h3>
          </Link>
        </li>
        <li>
          <Link to="/options">
            <h3>Options</h3>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
