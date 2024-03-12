import React from "react";
import { Link } from "react-router-dom";

export function AnnounceCard({ cover, titre, id }) {
  return (
    <Link to={`/logement/${id}`} className="announce-card">
      <div className="filter"></div>
      <img src={cover} alt="Announce cover" />

      <p>{titre} </p>
    </Link>
  );
}
