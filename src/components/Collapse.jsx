import React, { useState } from "react";

export const Collapsible = ({ label, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="button">
        <span className="collapse-label">{label}</span>
        <i className="fa-solid fa-angle-down" onClick={handleClick}></i>
      </div>
      {open && <div className="content">{content}</div>}
    </div>
  );
};
