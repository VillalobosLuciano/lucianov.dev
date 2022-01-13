import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  a11yLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import NoSsr from "./NoSsr";

export default function Pre({ children, language }) {
  const { theme: currentTheme } = useTheme();
  const textInput = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <NoSsr>
      <div
        ref={textInput}
        onMouseEnter={onEnter}
        onMouseLeave={onExit}
        className="relative"
      >
        {hovered && (
          <button
            aria-label="Copy code"
            type="button"
            className={`z-20 absolute right-2 top-2 lg:right-3 lg:top-3 w-9 h-9 p-1.5 rounded-md border dark:border-amber-500/30 ${
              copied
                ? "focus:outline-none focus:border-amber-500/90 border-amber-500/90"
                : "border-gray-300"
            }`}
            onClick={onCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className={copied ? "text-amber-500/90" : "text-gray-300"}
            >
              {copied ? (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </>
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </>
              )}
            </svg>
          </button>
        )}
        <pre className="text-base border border-amber-500/20">
          <SyntaxHighlighter
            codeTagProps={{
              className: `${
                currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
              }`,
            }}
            language={language}
            style={currentTheme === "dark" ? xonokai : a11yLight}
            customStyle={
              currentTheme === "dark"
                ? {
                    border: "none",
                    margin: "0.2rem",
                    backgroundColor: "#161618",
                  }
                : {
                    border: "none",
                    backgroundColor: "#FEFBF3",
                    margin: "0.2rem",
                  }
            }
          >
            {children}
          </SyntaxHighlighter>
        </pre>
      </div>
    </NoSsr>
  );
}
