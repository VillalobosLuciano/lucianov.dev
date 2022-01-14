import React from "react";

export default function IconButton({ children, ...props }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="p-2 border text-gray-300/90 rounded-md dark:border-[#F59E0B]/20 dark:hover:text-gray-300 transition duration-300 cursor-pointer"
    >
      {children}
    </a>
  );
}
