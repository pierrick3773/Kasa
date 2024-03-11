import React, { useState } from "react";

export const Collapsible = ({ label, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="button" onClick={handleClick}>
        {label}
        <i class="fa-solid fa-angle-down"></i>
      </div>
      {open && <div className="content">{content}</div>}
    </div>
  );
};
