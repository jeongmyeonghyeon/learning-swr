import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import usePosts from "../hooks/apis/usePost";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import HyperLink from "../components/HyperLink";

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
      <Heading>Getting Started</Heading>
      <HyperLink href="https://swr.vercel.app/ko/docs/getting-started" />
      <StyledSyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </StyledSyntaxHighlighter>
      <SecondaryTitle>[Output]</SecondaryTitle>
      <PostList>
        {posts?.map(({ id, title, body }) => (
          <Post key={id}>
            <Title>{title}</Title>
            <Body>{body}</Body>
          </Post>
        ))}
      </PostList>
    </>
  );
}

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  text-align: left;
`;

const PostList = styled.ul``;

const Post = styled.li`
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
