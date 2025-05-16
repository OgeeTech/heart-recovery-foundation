import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid fixed-top px-0">
      {/* Top Bar - Hidden on scroll */}
      {!scrolled && (
        <motion.div
          className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
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
          <div className="col-lg-6 px-5 text-end d-flex align-items-center justify-content-end flex-wrap gap-2">
            <small className="mb-0">Follow us:</small>
            <a
              className="text-white-50 ms-3"
              href="https://www.facebook.com/profile.php?id=61573737165012"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="text-white-50 ms-3"
              href="https://x.com/HeartrecoveryF/status/1895495423307260024"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="text-white-50 ms-3"
              href="https://www.linkedin.com/in/heart-recovery-foundation-764ba5353"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              className="text-white-50 ms-3"
              href="https://www.instagram.com/heartrecoveryfoundation"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Navbar */}
      <motion.nav
        className={`navbar navbar-expand-lg py-lg-0 px-lg-5 ${
          scrolled ? "scrolled-navbar" : "transparent-navbar"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="/" className="navbar-brand ms-4 ms-lg-0">
          <div className="logo-circle">
            <img src={logo} alt="HRF Logo" className="logo-img" />
          </div>
        </a>
        <button
          className="navbar-toggler me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
              >
                Who we are
              </a>
              <div className="dropdown-menu m-0">
                <a className="dropdown-item" href="/service">
                  About Us
                </a>
                <a className="dropdown-item" href="/donate">
                  Board of Trustees
                </a>
                <a className="dropdown-item" href="/team">
                  Our Team
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
              >
                Get Involved
              </a>
              <div className="dropdown-menu m-0">
                {/* <a className="dropdown-item" href="/service">
                  Join Our Volunteer Team
                </a> */}
                <Link to="/volunteer" className="dropdown-item">
                  Join Our Volunteer Team
                </Link>
                <a className="dropdown-item" href="/donate">
                  Corporate Sponsors
                </a>
                <a className="dropdown-item" href="/team">
                  Individual Sponsors
                </a>
                <Link to="/patientDetails" className="dropdown-item">
                  Patient Financial Application Form
                </Link>
              </div>
            </div>
            <a href="/causes" className="nav-item nav-link">
              Latest News
            </a>
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <div className="d-none d-lg-flex ms-2">
            <a
              className="btn btn-outline-light btn-custom py-2 px-3 d-inline-flex align-items-center"
              href="/donate"
            >
              Donate Now
              <span className="btn-sm-square bg-white text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center arrow-in-btn1">
                <i className="fa fa-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;
