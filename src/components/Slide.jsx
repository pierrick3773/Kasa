import React from "react";

export function Slide({ pictures }) {
  return (
    <div>
      {pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}
