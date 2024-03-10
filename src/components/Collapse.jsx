import React, { useState } from "react";

export const Collapsible = ({ label, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleClick}>{label}</button>
      {open && <div>{content}</div>}
    </div>
  );
};
