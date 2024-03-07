import React, { useState, useRef } from "react";

export const Collapsible = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  const contentRef = useRef();
  return (
    <div>
      <button>
        {toggle}={props.label}
      </button>
    </div>
  );
};
