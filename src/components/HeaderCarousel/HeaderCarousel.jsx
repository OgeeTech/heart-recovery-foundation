// img: "/img/slide11.jpg",
//     title: "Heart Recovery Foundation",
//     text: "One Heart Beat, At A TIme",
//   },
//   {
//     img: "/img/contact.jpg",
//     title: "Let's Save More Lifes With Our Helping Hand",
//     text: "Restoring hope, one heart at a time",

import React from "react";
import { motion } from "framer-motion";
import "./HeaderCarousel.css"; // Optional if you're styling separately or using Bootstrap

const slides = [
  {
    img: "/img/slide11.jpg",
    title: "Heart Recovery Foundation",
    text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
  },
  {
    img: "/img/contact.jpg",
    title: "Let's Save More Lifes With Our Helping Hand",
    text: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet",
  },
];

const HeaderCarousel = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
            >
              <img className="w-100" src={slide.img} alt={`Slide ${idx + 1}`} />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <motion.h1
                        className="display-4 text-white mb-3"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        className="fs-5 text-white-50 mb-5"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {slide.text}
                      </motion.p>
                      <motion.a
                        href="#"
                        className="btn btn-primary btn-2 py-2 px-3 d-inline-flex align-items-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        Learn More
                        <span className="btn-sm-square rounded-circle ms-2">
                          <i className="fa fa-arrow-right" />
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderCarousel;
