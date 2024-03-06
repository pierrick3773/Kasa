import React from "react";

export function AnnounceCard({ cover, titre }) {
  return (
    <div className="announce-card">
      <div className="filter"></div>
      <img src={cover} alt="Announce cover" />

      <p>{titre} </p>
    </div>
  );
}
