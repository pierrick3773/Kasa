import { useParams } from "react-router-dom";
import annonces from "../data/logement.json";
import React, { useState, useEffect } from "react";

export function Rating() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Récupérer la valeur "rating" avec de l'ID de l'annonce
    const annonce = annonces.find((annonce) => annonce.id === id);
    if (annonce) {
      setRating(annonce.rating);
    }
  }, [id]);

  useEffect(() => {
    // Sélectionner toutes les étoiles
    const stars = document.querySelectorAll(".ratings-star i");

    // Mettre à jour la classe de chaque étoile en fonction de la valeur de "rating"
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add("active-star");
      } else {
        stars[i].classList.remove("active-star");
      }
    }
  }, [rating]);

  return (
    <div className="ratings-star">
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>
  );
}
