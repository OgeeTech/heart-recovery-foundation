import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AnouncementDetails = () => {
  return (
    <>
      <Helmet>
        <title>World Heart Day 2026 | Heart Recovery Foundation</title>
        <meta
          name="description"
          content="Join the Heart Recovery Foundation for World Heart Day 2026. Theme: Use Heart for Action. September 29th at Merit House, Abuja."
        />
      </Helmet>

      {/* Hero Banner Space (Removed bg-primary and !important) */}
      <div
        className="container-fluid py-2 bg-hero"
        style={{ marginTop: "5px", backgroundColor: "#1e3e33" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <motion.h1
                className="display-4 text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                World Heart Day 2026
              </motion.h1>
              <motion.p
                className="lead text-white-50 mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                "Use Heart for Action"
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              className="card border-0 shadow-sm p-4 p-md-5 rounded-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0 bg-danger bg-opacity-10 p-3 rounded-circle text-danger">
                  <i className="fa fa-heartbeat fa-2x"></i>
                </div>
                <div className="ms-4">
                  <h2 className="mb-0 text-dark fw-bold">Event Overview</h2>
                </div>
              </div>

              <p className="lead text-muted mb-4">
                The Heart Recovery Foundation (HRF) cordially invites you to our
                flagship event commemorating World Heart Day 2026.
              </p>

              <div className="bg-light rounded p-4 mb-5 border-start border-5 border-danger">
                <ul className="list-unstyled mb-0 fs-5 text-dark">
                  <li className="mb-3">
                    <i className="fa fa-calendar-alt text-danger me-3"></i>
                    <strong>Date:</strong> 29th September 2026
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-map-marker-alt text-danger me-3"></i>
                    <strong>Venue:</strong> Merit House, Maitama Central
                    Business District, Abuja
                  </li>
                  <li>
                    <i className="fa fa-tag text-danger me-3"></i>
                    <strong>Theme:</strong> Use Heart for Action
                  </li>
                </ul>
              </div>

              <h3 className="h4 text-dark mb-3">About The Theme</h3>
              <p className="text-muted mb-4">
                "Use Heart for Action" is a call to empower individuals to take
                responsibility for their cardiovascular health. The foundation
                will be hosting free cardiac screenings, expert medical talks,
                and community outreach programs designed to educate the public
                on preventative measures and early detection of heart defects.
              </p>

              <h3 className="h4 text-dark mb-3">Who Should Attend?</h3>
              <p className="text-muted mb-4">
                This event is open to the general public, healthcare
                professionals, corporate partners, and anyone passionate about
                reducing the mortality rate of cardiovascular diseases in
                Nigeria.
              </p>

              <div className="text-center mt-5">
                <Link
                  to="/contact"
                  className="btn btn-primary px-5 py-3 rounded-pill me-sm-3 mb-3 mb-sm-0 shadow-sm text-white"
                  style={{
                    backgroundColor:
                      "#1e3e33" /* Changed to match your custom green directly */,
                    borderColor: "#1e3e33",
                  }}
                >
                  RSVP & Contact Us
                </Link>
                <Link
                  to="/donate-now"
                  className="btn btn-outline-danger px-5 py-3 rounded-pill shadow-sm"
                >
                  Support the Cause
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnouncementDetails;
