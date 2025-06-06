import React, { useState, useRef, useEffect, useCallback } from "react";
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
    img: "/img/board-5.jpg",
    name: "Mr. Stephen Nwika Yeeh",
    profession: "Member, Board of Trustees",
    text: `Stephen Nwika Yeeh is a social work and community development expert with advanced public administration training. He is an active member of the Nigeria Association of Social Workers.`,
  },
  {
    img: "/img/founder.jpg",
    name: "Gilbert Kiaka",
    profession: "Founder, Heart Recovery Foundation",
    text: `Gilbert Kiaka is the founder of Heart Recovery Foundation, a non-profit organization dedicated to improving healthcare access and quality in Nigeria. With a background in public health and community service, he has been instrumental in various health initiatives across the country.`,
  },
];

const TrusteeCard = ({ trustee }) => {
  const [flipped, setFlipped] = useState(false);
  const isMobileView =
    typeof window !== "undefined" && window.innerWidth <= 600;

  return (
    <div
      className="trustee-flip-card"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => isMobileView && setFlipped((prev) => !prev)}
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
  const [isMobile, setIsMobile] = useState(false);
  const cardsToShow = 4;
  const intervalRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showNavigation =
    BoardOfTrusteesData.length > (isMobile ? 1 : cardsToShow);

  const scrollItemWidth = isMobile
    ? containerRef.current?.offsetWidth || 0
    : containerRef.current?.offsetWidth / cardsToShow || 0;

  // removed misplaced import

  const handleNext = useCallback(() => {
    if (!containerRef.current) return;
    const maxScroll =
      containerRef.current.scrollWidth - containerRef.current.offsetWidth;
    const atEnd = containerRef.current.scrollLeft >= maxScroll - 5;
    const newLeft = atEnd
      ? 0
      : containerRef.current.scrollLeft + scrollItemWidth;
    containerRef.current.scrollTo({ left: newLeft, behavior: "smooth" });
  }, [scrollItemWidth]);

  const handlePrev = useCallback(() => {
    if (!containerRef.current) return;
    const newLeft = Math.max(
      containerRef.current.scrollLeft - scrollItemWidth,
      0
    );
    containerRef.current.scrollTo({ left: newLeft, behavior: "smooth" });
  }, [scrollItemWidth]);

  // ✅ Auto-scroll on all screen sizes
  useEffect(() => {
    if (!containerRef.current) return;

    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [handleNext, scrollItemWidth]);

  return (
    <section className="board-section">
      <h2 className="text-center mb-4 heading section-title">
        Board Of Trustees
      </h2>
      <div className="trustee-carousel-container">
        {showNavigation && (
          <button
            className="carousel-control-prev mobile-responsive"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
        )}
        <div
          className="trustee-grid"
          ref={containerRef}
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={() => {
            intervalRef.current = setInterval(() => {
              handleNext();
            }, 3000);
          }}
        >
          {BoardOfTrusteesData.map((t, i) => (
            <div
              key={i}
              className={`trustee-item ${isMobile ? "mobile-card-item" : ""}`}
            >
              <TrusteeCard trustee={t} />
            </div>
          ))}
        </div>
        {showNavigation && (
          <button
            className="carousel-control-next mobile-responsive"
            onClick={handleNext}
            aria-label="Next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
};

export default BoardOfTrusteesSection;
