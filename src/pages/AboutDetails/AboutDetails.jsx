

import React from "react";
import { motion } from "framer-motion";
import About from "../../components/About/About";

// Import the new CSS file
import "./AboutDetails.css";

const AboutDetails = () => {
  // It's good practice to add descriptive properties like alt text
  const images = [
    { src: "../news/f1.jpg", alt: "Community outreach event" },
    { src: "../news/f2.jpg", alt: "Health talk with students" },
    { src: "../news/f3.jpg", alt: "HRF volunteer group photo" },
    { src: "../news/f4.jpg", alt: "Medical supplies donation" },
    { src: "../news/f5.jpg", alt: "Meeting with community leaders" },
    { src: "../news/f6.jpg", alt: "Smiling child after health check" },
  ];

  // Animation variants for consistency
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="about-details-container container-fluid py-5">
      <div className="container">
        {/* --- Founder's Story --- */}
        <motion.section
          className="founder-story mb-5"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="card border-0 shadow-lg p-4 p-md-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <img
                  src="/img/founder.jpg"
                  alt="Founder Gilbert Kiaka"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-7">
                <h2 className="mb-3">Founder’s Story</h2>
                <p className="lead">
                  I was born with Atrial Septal Defect (a hole in the heart), a
                  congenital condition that grew larger over time. At 3.7 cm, it
                  was only by God’s grace that I survived. Before my diagnosis,
                  I often experienced heart tremors, palpitations, and
                  breathlessness. Raising funds for surgery was a huge struggle
                  for my family, as every attempt failed. During this time, I
                  realized many others suffer the same fate, unable to afford
                  treatment. Heart procedures cost between $10,000 and $12,000,
                  leaving many to die due to financial constraints. In my case,
                  I was fortunate. I won a scholarship from the then Rivers
                  State Governor, Barr. E.N. Wike, and since public fundraising
                  fell short, I used the funds for an urgent open-heart surgery
                  in India. Though some heart foundations help, it’s not enough
                  given the sheer number of patients in Nigeria and the lack of
                  funding. Heart disease remains a leading cause of death
                  worldwide, and more support is needed to help the less
                  privileged access life-saving treatment.
                  <span className="founder-signature">
                    Gilbert Kiaka, Founder
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- About Component Section --- */}
        <section className="about-section mb-5">
          <About />
        </section>

        {/* --- HRF Images Gallery --- */}
        <motion.section
          className="hrf-images mb-5"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-center fw-semibold mb-5 section-heading">
            HRF in Action
          </h3>
          <div className="row g-4 g-lg-5">
            {images.map((image, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                {/* The card now correctly fits the image's height */}
                <div className="card image-gallery-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutDetails;