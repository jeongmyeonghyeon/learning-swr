import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";

function SyntaxHighlighter({ children }) {
  return (
    <StyledReactSyntaxHighlighter language="javascript" style={docco}>
      {children}
    </StyledReactSyntaxHighlighter>
  );
}

const StyledReactSyntaxHighlighter = styled(ReactSyntaxHighlighter)`
  text-align: left;
`;

export default SyntaxHighlighter;
