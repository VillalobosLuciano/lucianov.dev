import React from "react";

export default function IconButton({ children, ...props }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="p-2 border text-gray-300/80 rounded-lg dark:border-[#F59E0B]/30 dark:hover:text-gray-300 transition duration-300 cursor-pointer"
    >
      {children}
    </a>
  );
}
