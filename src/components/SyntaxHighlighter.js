import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function SyntaxHighlighter({ children }) {
  return (
    <ReactSyntaxHighlighter
      language="javascript"
      style={{ ...docco, textAlign: "left" }}
    >
      {children}
    </ReactSyntaxHighlighter>
  );
}

export default SyntaxHighlighter;
