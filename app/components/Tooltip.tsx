import React from "react";
import NoSsr from "./NoSsr";
import ReactTooltip from "react-tooltip";

export default function Tooltip({ children, text, position }) {
  return (
    <>
      <NoSsr>
        <ReactTooltip id={text} place={position} type="dark" effect="float" />

        <div data-tip={text} data-for={text}>
          {children}
        </div>
      </NoSsr>
    </>
  );
}
