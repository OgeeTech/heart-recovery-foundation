// src/components/BoardOfTrusteesSection.jsx
import React, { useState, useRef, useEffect } from "react";
import "./BoardOfTrusteesSection.css";

const BoardOfTrusteesData = [
  {
    img: "/img/board1.jpg",
    name: "Dr. Suleiman Haruna",
    profession: "Chairman, Board of Trustees",
    text: `Suleiman Haruna is a versatile communicator, writer, and teacher who has worked with experienced and motivated experts and has grown to be a reference point and a candidate of choice whenever a good hand is required for service. He has also managed staff for over 20 years as Head of Information and Communication in various organizations, including a World Bank–assisted social investment programme, YESSO, a special intervention programme, SURE–P, and the Presidential Villa, working directly with the First Lady of Nigeria for seven years as Director of Information. He is currently Director of Public Relations at the Federal Ministry of Information. He holds a PhD in Development Communication from Ahmadu Bello University, Zaria.`,
  },
  {
    img: "/img/board2.jpg",
    name: "Dr. James Nda Abalaka",
    profession: "Member, Board of Trustees",
    text: `Dr. Abalaka is a distinguished civil servant, scholar, and financial management expert with over three decades of experience. He holds a PhD in Management and has played a crucial role in public financial management reforms at the Office of the Accountant General of the Federation. A fellow of FCNA and FCTI, he has authored over 60 publications.`,
  },
  {
    img: "/img/board3.jpg",
    name: "Dr. Sunday Adejoh Baba",
    profession: "Member, Board of Trustees",
    text: `Sunday Adejoh Baba is a seasoned public servant and communication expert with a PhD in New Media Research. He has led public communications at the national level and retired in 2024 as Special Assistant to the Minister of Information.`,
  },
  {
    img: "/img/board4.jpg",
    name: "Dr. Adeleke A. Adeoye",
    profession: "Member, Board of Trustees",
    text: `Adeleke A. Adeoye is a Public Health Physician with a decade in both private and public sectors. He earned a NYSC Meritorious Award and is currently undertaking doctoral training in South Australia.`,
  },
  {
    img: "/img/team-1.jpg", // Assuming this is a placeholder, update if needed
    name: "Mr. Stephen Nwika Yeeh",
    profession: "Member, Board of Trustees",
    text: `Stephen Nwika Yeeh is a social work and community development expert with advanced public administration training. He is an active member of the Nigeria Association of Social Workers.`,
  },
  {
    img: "/img/team-2.jpg", // Assuming this is a placeholder, update if needed
    name: "Mrs. Aisha Maina",
    profession: "Secretary",
    text: `Aisha Maina is an experienced administrator with a background in organizational management and public relations. She ensures the smooth operation of the Board's activities.`,
  },
];

// Single flip-card component
const TrusteeCard = ({ trustee }) => {
  const [flipped, setFlipped] = useState(false);
  // Determine if the current environment is mobile based on window width
  // This is a common approach but ideally, for full SSR compatibility or more complex scenarios,
  // this might be handled differently or passed as a prop.
  const isMobileView =
    typeof window !== "undefined" && window.innerWidth <= 600;

  return (
    <div
      className="trustee-flip-card"
      onMouseEnter={() => !isMobileView && setFlipped(true)} // Disable flip on hover for mobile
      onMouseLeave={() => !isMobileView && setFlipped(false)} // Disable flip on hover for mobile
      // onClick could be used for mobile flip if desired, but current CSS disables it
    >
      <div
        className={`trustee-flip-inner ${
          flipped && !isMobileView ? "flipped" : ""
        }`}
      >
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

// Main section component
const BoardOfTrusteesSection = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // State for mobile view

  const cardsToShow = 4; // For desktop view

  // Effect to check and set mobile state on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showNavigation =
    BoardOfTrusteesData.length > (isMobile ? 1 : cardsToShow);

  const handleNext = () => {
    if (containerRef.current) {
      // Desktop scrolling logic (direct manipulation)
      const scrollAmount = containerRef.current.offsetWidth / cardsToShow;
      // Calculate new scrollLeft target
      const newScrollLeft = Math.min(
        containerRef.current.scrollLeft + scrollAmount,
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
      containerRef.current.scrollLeft = newScrollLeft;

      // Update currentIndex for desktop (optional, if needed for other logic)
      // This logic might need refinement if desktop also needs precise index tracking
      // based on scroll position rather than fixed items.
      // For simplicity, we can also tie desktop index to card visibility.
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, BoardOfTrusteesData.length - cardsToShow)
      );
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      // Desktop scrolling logic (direct manipulation)
      const scrollAmount = containerRef.current.offsetWidth / cardsToShow;
      // Calculate new scrollLeft target
      const newScrollLeft = Math.max(
        containerRef.current.scrollLeft - scrollAmount,
        0
      );
      containerRef.current.scrollLeft = newScrollLeft;

      // Update currentIndex for desktop
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  // Auto-scroll for mobile
  useEffect(() => {
    let autoScrollInterval;
    if (isMobile && BoardOfTrusteesData.length > 1) {
      autoScrollInterval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % BoardOfTrusteesData.length
        );
      }, 3000); // Auto-scroll interval: 3 seconds
    }
    return () => clearInterval(autoScrollInterval);
  }, [isMobile, BoardOfTrusteesData.length, currentIndex]); // currentIndex in deps restarts interval on change

  // Scroll effect for mobile when currentIndex changes
  useEffect(() => {
    if (isMobile && containerRef.current) {
      // Ensure the containerRef has its children rendered and width calculated.
      const itemWidth = containerRef.current.offsetWidth; // This is the width of the scroll container.
      // Each item is 100% of this on mobile.
      if (itemWidth > 0) {
        containerRef.current.scrollLeft = currentIndex * itemWidth;
      }
    }
  }, [isMobile, currentIndex, BoardOfTrusteesData.length]); // Added BoardOfTrusteesData.length as it might affect total scroll width indirectly

  return (
    <section className="board-section">
      <h2 className="text-center mb-4 heading section-title">
        Board Of Trustees
      </h2>
      <div className="trustee-carousel-container">
        {showNavigation && !isMobile && (
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
            aria-label="Previous Trustee"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
        )}
        <div className="trustee-grid" ref={containerRef}>
          {BoardOfTrusteesData.map((trustee, index) => (
            <div
              key={index}
              className={`trustee-item ${isMobile ? "mobile-card-item" : ""}`} // Use a distinct class for mobile item if needed for JS targeting, though CSS handles it
            >
              <TrusteeCard trustee={trustee} />
            </div>
          ))}
        </div>
        {showNavigation && !isMobile && (
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
            aria-label="Next Trustee"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        )}
        {isMobile && showNavigation && (
          <div className="mobile-navigation">
            <button
              className="mobile-nav-btn mobile-prev-btn"
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + BoardOfTrusteesData.length) %
                    BoardOfTrusteesData.length
                )
              }
              aria-label="Previous Trustee"
            >
              {"<"}
            </button>
            <button
              className="mobile-nav-btn mobile-next-btn"
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev + 1) % BoardOfTrusteesData.length
                )
              }
              aria-label="Next Trustee"
            >
              {">"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BoardOfTrusteesSection;
