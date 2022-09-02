import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePosts from "../../hooks/apis/usePost";
import sc from "../../assets/img/screenshot00.png";

function RefreshInterval() {
  const { posts, isLoading, isError } = usePosts(1000);
  const [count, setCount] = useState(0);

  console.log(1);

  if (isError) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <>
      <SecondaryTitle>[Output 😎]</SecondaryTitle>
      <img src={sc} alt="screenshot00" width={800} />
      <Ul>
        {posts?.map(({ id, title, body }) => (
          <Li key={id}>
            <Title>{title}</Title>
            <Body>{body}</Body>
          </Li>
        ))}
      </Ul>
    </>
  );
}

const Ul = styled.ul``;

const Li = styled.li`
  text-align: left;
  :not(:first-of-type) {
    margin-top: 36px;
  }
`;

const Title = styled.h4`
  margin: 0;
`;

const Body = styled.p`
  margin: 12px 0 0 0;
`;

const SecondaryTitle = styled.h3`
  text-align: left;
  padding: 0 40px;
`;

export default RefreshInterval;
