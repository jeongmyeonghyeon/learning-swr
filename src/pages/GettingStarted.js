import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import usePosts from "../hooks/apis/usePost";

import HyperLink from "../components/HyperLink";
import SyntaxHighlighter from "../components/SyntaxHighlighter";

function GettingStarted() {
  const { posts, isLoading, isError } = usePosts();

  if (isError) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const codeString = `
  // hooks/apis/usePosts
  import useSWR from "swr";
  import fetcher from "../../lib/fetcher";
  
  function usePosts() {
    const { data, error } = useSWR("/posts", fetcher);
  
    return {
      posts: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
  
  export default usePosts;

  ...

  // Post list page
  ...
  const { posts, isLoading, isError } = usePosts();

  if (isError) return "An error has occurred.";
  if (isLoading) return "Loading...";
  ...
  `;

  return (
    <>
      <Nav />
      <Heading />
      <HyperLink href="https://swr.vercel.app/ko/docs/getting-started" />
      <SyntaxHighlighter>{codeString}</SyntaxHighlighter>
      <SecondaryTitle>[Output 😎]</SecondaryTitle>
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

export default GettingStarted;
