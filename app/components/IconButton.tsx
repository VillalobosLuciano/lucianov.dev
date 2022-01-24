import React from "react";

export default function IconButton({ children, ...props }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="p-2 transition duration-300 border rounded-md cursor-pointer hover:text-gray-400 text-gray-400/90 dark:text-gray-300/90 border-teal-600/20 dark:border-amber-500/20 dark:hover:text-gray-300"
    >
      {children}
    </a>
  );
}
