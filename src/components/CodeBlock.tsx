import { Highlight } from "prism-react-renderer";
// import themes from "prism-react-renderer/dist/index";
import { useState } from "react";

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
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code.trim())
      .then(() => {
        setButtonText("Copied ✅");
        setTimeout(() => setButtonText("Copy"), 5000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 rounded bg-blue-500 p-1 text-xs text-white"
      >
        {buttonText}
      </button>
      <Highlight
        // theme={themes.themes.nightOwl}
        code={code.trim()}
        language={language}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="overflow-x-auto rounded-lg bg-[#011627] p-4">
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                className="table-row"
              >
                {showLineNumbers && (
                  <span className="table-cell select-none pr-4 text-right text-white opacity-50">
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
