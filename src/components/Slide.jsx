import React, { useState, useEffect } from "react";

export function Slide({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
      setCurrentSlide(index);
    }

    function prevSlide() {
      setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function nextSlide() {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }

    showSlide(currentSlide);

    if (slides.length > 1) {
      document?.querySelector(".prev")?.addEventListener("click", prevSlide);
      document?.querySelector(".next")?.addEventListener("click", nextSlide);
    }
    return () => {
      if (slides.length > 1) {
        document
          ?.querySelector(".prev")
          ?.removeEventListener("click", prevSlide);
        document
          ?.querySelector(".next")
          ?.removeEventListener("click", nextSlide);
      }
    };
  }, [currentSlide]);

  return (
    <div className="slide-container">
      {pictures.length > 1 && (
        <div className="arrow">
          <button className="prev">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
      {pictures.map((picture, index) => (
        <div key={index} className="slide">
          <img src={picture} alt="Diaporama" />
        </div>
      ))}
      {pictures.length > 1 && (
        <div className="counter">
          {currentSlide + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
}
