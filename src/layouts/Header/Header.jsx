import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

import "./Header.css";

const Header = ({ translateTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  // State to toggle between Socials and Fundraising Call in the Top Bar
  const [showSocials, setShowSocials] = useState(true);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Scroll Listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Timer to alternate Top Bar content every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSocials((prev) => !prev);
    }, 6000); // 6000ms = 6 seconds
    return () => clearInterval(interval);
  }, []);

  // Build navbar classes
  const navClasses = [
    "navbar",
    "navbar-expand-lg",
    "py-1", // Keeps the nav height reduced
    !isHomePage
      ? "nav-with-bg"
      : scrolled
        ? "scrolled-navbar"
        : "transparent-navbar",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="container-fluid fixed-top px-0">
      {/* --- SCROLLED ANNOUNCEMENT BAR (World Heart Day 2026) --- */}
      <AnimatePresence>
        {scrolled && showAnnouncement && (
          <motion.div
            className="announcement-bar text-center text-white py-2 px-3 position-relative"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 1050 }}
          >
            <div className="container d-flex align-items-center justify-content-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="me-3"
                style={{
                  display: "inline-block",
                  color: "#dc3545",
                }} /* Red Icon */
              >
                <i className="fa fa-bullhorn"></i>{" "}
                {/* Changed to a heartbeat icon for the theme */}
              </motion.div>

              <p className="mb-0 small fw-medium">
                HRF presents World Heart Day 2026...{" "}
                <Link
                  to="/AnouncementDetails"
                  className="text-white text-decoration-underline ms-1 fw-bold"
                >
                  Event Details
                </Link>
              </p>

              <button
                type="button"
                className="btn-close btn-close-white position-absolute end-0 me-3"
                aria-label="Close"
                onClick={() => setShowAnnouncement(false)}
                style={{
                  fontSize: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- TOP BAR (Alternating Socials / Fundraising) --- */}
      {isHomePage && !scrolled && (
        <motion.div
          className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Left Side: Contact Info */}
          <div className="col-lg-6 px-5 text-start">
            <small>
              <i className="fa fa-map-marker-alt me-2" />
              No.1 Edo Street Eden Plaza Shop5 Jikwoyi Abuja
            </small>
            <small className="ms-4">
              <i className="fa fa-envelope me-2" />
              heartrecoveryfoundation@gmail.com
            </small>
            <small className="ms-4">
              <i className="fa fa-phone me-2" />
              07026000012
            </small>
          </div>

          {/* Right Side: Alternates between Socials and Urgent Fundraising */}
          <div className="col-lg-6 px-5 text-end d-flex align-items-center justify-content-end position-relative">
            <AnimatePresence mode="wait">
              {showSocials ? (
                /* --- STATE 1: SOCIAL LINKS --- */
                <motion.div
                  key="socials"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="d-flex align-items-center justify-content-end flex-wrap gap-2"
                >
                  <small className="mb-0">Follow us:</small>
                  <a
                    href="https://www.facebook.com/profile.php?id=61573737165012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-50 ms-3"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://x.com/HeartrecoveryF/status/1895495423307260024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-50 ms-3"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/heart-recovery-foundation-764ba5353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-50 ms-3"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/heartrecoveryfoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-50 ms-3"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </motion.div>
              ) : (
                /* --- STATE 2: URGENT FUNDRAISING (Farouk) --- */
                <motion.div
                  key="fundraising"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="d-flex align-items-center justify-content-end flex-wrap gap-2"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ color: "#dc3545" }} /* Red Icon */
                  >
                    <i className="fa fa-heart"></i>
                  </motion.div>
                  <small className="mb-0 fw-medium text-white">
                    Urgent: Farouk needs a heart{" "}
                    <Link
                      to="/campaign-details"
                      className="text-white text-decoration-underline ms-1 fw-bold"
                    >
                      Help Save Him
                    </Link>
                  </small>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {/* --- NAVBAR --- */}
      <motion.nav
        className={navClasses}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
          <div className="logo-circle">
            <img src={logo} alt="HRF Logo" className="logo-img" />
          </div>
        </Link>

        {/* --- MODERN HAMBURGER BUTTON --- */}
        <button
          className="navbar-toggler me-4 custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>

            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Who we are
              </span>
              <div className="dropdown-menu m-0">
                <Link to="/about-details" className="dropdown-item">
                  About Us
                </Link>
                <Link to="/boardOfTrustees" className="dropdown-item">
                  Board of Trustees
                </Link>
                <Link to="/team" className="dropdown-item">
                  Our Team
                </Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Get Involved
              </span>
              <div className="dropdown-menu m-0">
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLScDe7T8kWLmrQttAXI49k7bnKg0NML3PWVCZhLa9DAd0RWxvg/viewform?usp=header"
                  className="dropdown-item"
                >
                  Join Our Volunteer Team
                </Link>
                <Link to="/corporateSponsors" className="dropdown-item">
                  Corporate Sponsors
                </Link>
                <Link to="/individualSponsors" className="dropdown-item">
                  Individual Sponsors
                </Link>
                <Link
                  to="https://forms.gle/17NfuEAc9tvCNYDP9"
                  className="dropdown-item"
                >
                  Patient Financial Application Form
                </Link>
              </div>
            </div>

            <Link to="/latestNews" className="nav-item nav-link">
              Latest News
            </Link>

            <Link to="/Gallery" className="nav-item nav-link">
              Gallery
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>

            {/* Mobile Only Donate Button */}
            <Link
              to="/donate-now"
              className="btn btn-outline-light btn-custom py-2 px-3 d-lg-none mt-3 mobile-btn"
            >
              Donate Now
              <span className="btn-sm-square bg-white text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center arrow-in-btn1">
                <i className="fa fa-arrow-right" />
              </span>
            </Link>
          </div>

          {/* Desktop Donate Button */}
          <div className="d-none d-lg-flex ms-2">
            <Link
              to="/donate-now"
              className="btn btn-outline-light btn-custom py-2 px-3 d-inline-flex align-items-center "
            >
              Donate Now
              <span className="btn-sm-square bg-white text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center arrow-in-btn1">
                <i className="fa fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;
