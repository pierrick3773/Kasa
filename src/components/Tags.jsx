import React from "react";

export function Tags({ tags }) {
  return (
    <>
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </>
  );
}
