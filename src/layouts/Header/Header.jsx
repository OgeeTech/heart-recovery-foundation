// src/layouts/Header/Header.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import "./Header.css";

const Header = ({ translateTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Debugging
  console.log("PATH:", location.pathname, "isHomePage?", isHomePage);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 

  // Build navbar classes: non-home always solid, home toggles transparent ↔ scrolled
  const navClasses = [
    "navbar",
    "navbar-expand-lg",
    !isHomePage
      ? "nav-with-bg"
      : scrolled
      ? "scrolled-navbar"
      : "transparent-navbar",
  ]
    .filter(Boolean)
    .join(" ");
  console.log("navClasses:", navClasses);



  return (
    <div className="container-fluid fixed-top px-0">
      {/* Top Bar: only on home page before scroll */}
      {isHomePage && !scrolled && (
        <motion.div
          className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex"
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
          </div>
        </motion.div>
      )}

      {/* Navbar */}
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
                <Link to="/about" className="dropdown-item">
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
                <Link to="/volunteer" className="dropdown-item">
                  Join Our Volunteer Team
                </Link>
                <Link to="/corporateSponsors" className="dropdown-item">
                  Corporate Sponsors
                </Link>
                <Link to="/individualSponsors" className="dropdown-item">
                  Individual Sponsors
                </Link>
                <Link to="/patientDetails" className="dropdown-item">
                  Patient Financial Application Form
                </Link>
              </div>
            </div>

            <Link to="/latestNews" className="nav-item nav-link">
              Latest News
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>

          {/* Language Selector */}
          {/* <div className="language-switcher d-none d-lg-flex align-items-center position-relative me-3">
            {languages.map(({ code, flag }) => (
              <img
                key={code}
                src={`/flags/${flag}.png`}
                alt={code}
                className="lang-flag"
                role="button"
                tabIndex={0}
                onClick={() => changeLanguage(code)}
              />
            ))}
            <div
              className="ms-2"
              style={{ cursor: "pointer" }}
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              🌐
            </div>
            {showDropdown && (
              <div className="flag-dropdown position-absolute bg-white p-2 rounded shadow">
                {languages.map(({ code, flag }) => (
                  <img
                    key={code + "-dd"}
                    src={`/flags/${flag}.png`}
                    alt={code}
                    className="lang-flag"
                    role="button"
                    tabIndex={0}
                    onClick={() => changeLanguage(code)}
                  />
                ))}
              </div>
            )}
          </div> */}

          {/* Donate Button */}
          <div className="d-none d-lg-flex ms-2">
            <Link
              to="/donate"
              className="btn btn-outline-light btn-custom py-2 px-3 d-inline-flex align-items-center"
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
