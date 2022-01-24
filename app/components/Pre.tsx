import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  xonokai,
  oakidia,
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
    }, 1000);
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
            className={`z-20 absolute right-2 top-2 lg:right-2.5 lg:top-2.5 w-9 h-9 p-1.5 rounded-md border dark:border-amber-500/30 hidden lg:block ${
              copied
                ? "focus:outline-none focus:border-teal-600/90 border-teal-600/90 dark:focus:border-amber-500/90 dark:border-amber-500/90"
                : "border-gray-300/90"
            }`}
            onClick={onCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className={
                copied
                  ? "text-teal-600/90 dark:text-amber-500/90"
                  : "dark:text-gray-300 text-gray-400"
              }
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
        <pre className="border rounded-md border-teal-600/20 dark:border-amber-500/20">
          <SyntaxHighlighter
            codeTagProps={{
              className: `${
                currentTheme === "dark" ? "text-gray-300" : "text-gray-500"
              }`,
            }}
            language={language}
            style={currentTheme === "dark" ? xonokai : oakidia}
            customStyle={
              currentTheme === "dark"
                ? {
                    backgroundColor: "#161618",
                    border: "none",
                    margin: "-1px 0",
                  }
                : {
                    backgroundColor: "#fbfcfc",
                    border: "none",
                    margin: "2px 0",
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
