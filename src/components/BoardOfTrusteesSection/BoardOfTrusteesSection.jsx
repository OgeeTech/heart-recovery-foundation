// src/components/BoardOfTrusteesSection.jsx
import React, { useState, useRef, useEffect } from "react";
import "./BoardOfTrusteesSection.css";

const BoardOfTrusteesData = [
  {
    /* ... data items unchanged ... */
  },
  /* other items */
];

const TrusteeCard = ({ trustee }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="trustee-flip-card"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`trustee-flip-inner ${flipped ? "flipped" : ""}`}>
        <div className="trustee-card-front">
          <img src={trustee.img} alt={trustee.name} />
          <h5>{trustee.name}</h5>
          <p>{trustee.profession}</p>
        </div>
        <div className="trustee-card-back">
          <p className="full-bio-text">{trustee.text}</p>
        </div>
      </div>
    </div>
  );
};

const BoardOfTrusteesSection = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isMobile = window.innerWidth <= 600;
  const cardsToShow = isMobile ? 1 : 4;
  const showNavigation = BoardOfTrusteesData.length > cardsToShow;

  const handleNext = () => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.offsetWidth / cardsToShow;
    containerRef.current.scrollLeft += scrollAmount;
    setCurrentIndex((prev) =>
      Math.min(prev + 1, BoardOfTrusteesData.length - cardsToShow)
    );
  };

  const handlePrev = () => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.offsetWidth / cardsToShow;
    containerRef.current.scrollLeft -= scrollAmount;
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Auto-scroll for mobile
  useEffect(() => {
    if (!isMobile || BoardOfTrusteesData.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BoardOfTrusteesData.length);
      if (containerRef.current) {
        containerRef.current.scrollLeft =
          ((currentIndex + 1) % BoardOfTrusteesData.length) *
          containerRef.current.offsetWidth;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, currentIndex]);

  // Sync scroll on index change for mobile
  useEffect(() => {
    if (isMobile && containerRef.current) {
      containerRef.current.scrollLeft =
        currentIndex * containerRef.current.offsetWidth;
    }
  }, [isMobile, currentIndex]);

  return (
    <section className="board-section">
      <h2 className="text-center mb-4 heading">Board Of Trustees</h2>
      <div className="trustee-carousel-container">
        {showNavigation && !isMobile && (
          <button className="carousel-control-prev" onClick={handlePrev}>
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Previous</span>
          </button>
        )}
        <div className="trustee-grid" ref={containerRef}>
          {BoardOfTrusteesData.map((trustee, i) => (
            <div
              key={i}
              className={`trustee-item ${isMobile ? "mobile-card" : ""}`}
            >
              <TrusteeCard trustee={trustee} />
            </div>
          ))}
        </div>
        {showNavigation && !isMobile && (
          <button className="carousel-control-next" onClick={handleNext}>
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Next</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default BoardOfTrusteesSection;
