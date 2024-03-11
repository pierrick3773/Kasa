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

    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);

    return () => {
      document.querySelector(".prev").removeEventListener("click", prevSlide);
      document.querySelector(".next").removeEventListener("click", nextSlide);
    };
  }, [currentSlide]);

  return (
    <div className="slide-container">
      <button className="prev">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button className="next">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      {pictures.map((picture, index) => (
        <div key={index} className="slide">
          <img src={picture} alt="Diaporama" />
        </div>
      ))}
    </div>
  );
}
