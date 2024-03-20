import React, { useState } from "react";

export const Collapsible = ({ label, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const returnChevron = {
    transition: "transform 0.3s ease-in-out",
    transform: open ? "rotate(180deg)" : "rotate(0)",
  };

  return (
    <div className="collapse">
      <div className="button" onClick={handleClick}>
        <span className="collapse-label">{label}</span>
        <i className="fa-solid fa-angle-up" style={returnChevron}></i>
      </div>
      {open && <div className="content">{content}</div>}
    </div>
  );
};
