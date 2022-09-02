import styled from "styled-components";

import getTitleByPathname from "../utils/getTitleByPathname";

function Heading() {
  const title = getTitleByPathname();

  return <Base>{title}</Base>;
}

const Base = styled.h1``;

export default Heading;
