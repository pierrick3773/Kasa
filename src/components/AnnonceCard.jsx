import React from "react";

export function AnnounceCard({ cover, titre }) {
  return (
    <div className="announce-card">
      <img src={cover} alt="Announce cover" />

      <p>{titre} </p>
    </div>
  );
}
