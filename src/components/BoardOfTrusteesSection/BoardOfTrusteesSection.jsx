// src/components/BoardOfTrusteesSection.jsx
import React, { useState } from "react";
import "./BoardOfTrusteesSection.css";
import { useRef } from "react";
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
    img: "/img/team-1.jpg",
    name: "Mr. Stephen Nwika Yeeh",
    profession: "Member, Board of Trustees",
    text: `Stephen Nwika Yeeh is a social work and community development expert with advanced public administration training. He is an active member of the Nigeria Association of Social Workers.`,
  },
  {
    img: "/img/team-2.jpg",
    name: "Mrs. Aisha Maina",
    profession: "Secretary",
    text: `Aisha Maina is an experienced administrator with a background in organizational management and public relations. She ensures the smooth operation of the Board's activities.`,
  },
];

// Single flip-card component
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

// Main section component
const BoardOfTrusteesSection = () => {
  const containerRef = useRef(null);
  const cardsToShow = 4;
  const showNavigation = BoardOfTrusteesData.length > cardsToShow;

  const handleNext = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / cardsToShow;
      containerRef.current.scrollLeft += cardWidth;
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / cardsToShow;
      containerRef.current.scrollLeft -= cardWidth;
    }
  };

  return (
    <section className="board-section">
       <h2 className="text-center mb-4 heading">Board Of Trustees</h2>
      <div className="trustee-carousel-container">
        {showNavigation && (
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
        )}
        <div className="trustee-grid" ref={containerRef}>
          {BoardOfTrusteesData.map((trustee, index) => (
            <TrusteeCard key={index} trustee={trustee} />
          ))}
        </div>
        {showNavigation && (
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default BoardOfTrusteesSection;
