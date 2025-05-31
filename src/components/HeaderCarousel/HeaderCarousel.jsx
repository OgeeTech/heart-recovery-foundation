import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./HeaderCarousel.css";

const slides = [
  {
    img: "/img/slide11.jpg",
    title: "Heart Recovery Foundation",
    text: "One Heart Beat, At A Time",
  },
  {
    img: "/img/contact.jpg",
    title: "Let's Save More Lives With Our Helping Hand",
    text: "Restoring hope, one heart at a time",
  },
];

const HeaderCarousel = () => {
  return (
    <>
      <Helmet>
        <title>About Us – Heart Recovery Foundation</title>
        <meta
          name="description"
          content="Learn more about the Heart Recovery Foundation—our mission, values, and vision to support heart recovery in Africa."
        />
        <meta
          name="keywords"
          content="Heart Recovery, About, Mission, Vision, Values, Nonprofit, Africa, Healthcare, One Heart Beat, At A Time"
        />
        <meta
          property="og:title"
          content="About Us – Heart Recovery Foundation"
        />
        <meta
          property="og:description"
          content="Learn about our mission to provide holistic heart recovery support across Africa."
        />
        <meta
          property="og:url"
          content="https://heartrecoveryfoundation.com/about"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://heartrecoveryfoundation.com/img/slide11.jpg"
        />
        <link
          rel="canonical"
          href="https://heartrecoveryfoundation.com/about"
        />
      </Helmet>
      <div className="mb-5 header-container">
        {/* Changed container to regular container with max-width */}
        <div className="container position-relative px-0">
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
            data-bs-pause="false"
          >
            <div className="carousel-inner  overflow-hidden">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                >
                  <img
                    className="w-100"
                    src={slide.img}
                    alt={`Slide ${idx + 1}`}
                  />
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
                            className="btn btn-primary btn-2 py-2 px-3 d-inline-flex align-items-center"
                            href="#"
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

            {/* Navigation buttons within container */}
            <button
              className="carousel-control-prev position-absolute start-0"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-absolute end-0"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCarousel;
