import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePosts from "../../hooks/apis/usePost";
import sc from "../../assets/img/screenshot00.png";
import HyperLink from "../../components/HyperLink";

function RefreshInterval() {
  const { posts, isLoading, isError } = usePosts(1000);
  const [count, setCount] = useState(0);

  if (isError) return "An error has occurred.";
  if (isLoading) return "Loading...";

  return (
    <>
      <HyperLink href="https://swr.vercel.app/ko/docs/revalidation#%EC%9D%B8%ED%84%B0%EB%B2%8C-%EC%8B%9C%EC%97%90-%EA%B0%B1%EC%8B%A0%ED%95%98%EA%B8%B0" />
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
