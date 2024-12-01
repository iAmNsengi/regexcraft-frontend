// src/components/CodeBlock/CodeBlock.tsx
import { Highlight } from "prism-react-renderer";
// import themes from "prism-react-renderer/dist/index";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({
  code,
  language = "typescript",
  showLineNumbers = true,
}: CodeBlockProps) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code.trim())
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-1 bg-blue-500 text-white rounded text-xs"
      >
        Copy
      </button>
      <Highlight
        // theme={themes.themes.nightOwl}
        code={code.trim()}
        language={language}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="overflow-x-auto rounded-lg p-4 bg-[#011627]">
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                className="table-row"
              >
                {showLineNumbers && (
                  <span className="table-cell text-right pr-4 select-none opacity-50 text-white">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
