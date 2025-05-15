import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css"; // includes the .button-group CSS you added

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const slides = [
  {
    title: "Core Values",
    items: [
      "Compassion",
      "Accessibility",
      "Excellence",
      "Empowerment",
      "Collaboration",
    ],
  },
  {
    title: "Mission Statement",
    text: `Our Goal is to provide financial aid and holistic support to those with congenital
heart defect, particularly those arising from childbirth, within under-privileged
populations in Nigeria and the rest of Africa. Together, we envision a future where
complete heart recovery, healing, general wellness, and indiscriminate compassion
are accessible to all, empowering hearts to beat stronger, longer, and healthier
— one heartbeat at a time.`,
  },
  {
    title: "Vision",
    text: "A world where every heart beats strong, empowered by indiscriminate compassion.",
  },
];

const About = () => {
  const [idx, setIdx] = useState(0);

  // cycle through slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Left image column */}
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeInUp}
            style={{ overflow: "hidden", height: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 pt-5 pe-5"
                src="img/slide11.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <img
                className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                src="img/about-2.jpg"
                alt=""
                style={{ width: 200, height: 200 }}
              />
            </div>
          </motion.div>

          {/* Right text column */}
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            variants={fadeInUp}
          >
            <div className="h-100">
              <h2 className="text-center mb-4 heading">About Us</h2>

              {/* Animated slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  className="bg-light border-bottom border-5 border-primary about-border rounded p-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h5 className="mb-2">{slides[idx].title}</h5>

                  {slides[idx].items ? (
                    <ul className="list-unstyled mb-0">
                      {slides[idx].items.map((val) => (
                        <li key={val} className="d-flex align-items-start mb-2">
                          <i className="fas fa-check-circle me-2 text-success" />
                          <span className="text-dark">{val}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-dark mb-0">{slides[idx].text}</p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Buttons */}
              <div className="button-group">
                <motion.a
                  className="btn btn-primary btn-2"
                  href="#"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Learn More
                  <span className="btn-sm-square rounded-circle ms-2 d-flex align-items-center justify-content-center">
                    <i className="fa fa-arrow-right" />
                  </span>
                </motion.a>

                <motion.a
                  className="btn btn-outline-light btn-1"
                  href="/contact"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Contact Us
                  <span className="btn-sm-square rounded-circle ms-2 d-flex align-items-center justify-content-center">
                    <i className="fa fa-arrow-right" />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
