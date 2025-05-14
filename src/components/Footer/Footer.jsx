import React from "react";
import logo from "../../assets/Images/logo.png";
import "./Footer.css"; // Optional custom styling

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer mt-5 pt-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* Logo & Description */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center mb-4">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
              />
              <h4 className="fw-bold text-primary m-0">
                Heart<span className="text-white">Recovery</span>
              </h4>
            </div>
            <p>
              We are committed to supporting underprivileged individuals through
              health recovery initiatives and community support.
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square text-white-50 me-1"
                href="https://x.com/HeartrecoveryF/status/1895495423307260024"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-square text-white-50 me-1"
                href="https://www.facebook.com/profile.php?id=61573737165012"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square text-white-50 me-1"
                href="https://www.instagram.com/heartrecoveryfoundation"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-square text-white-50"
                href="https://www.linkedin.com/in/heart-recovery-foundation-764ba5353"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Contact</h5>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>No.1 Edo Street Eden
              Plaza Shop5 Jikwoyi Abuja
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>
              heartrecoveryfoundation@gmail.com
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i>07026000012
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a className="btn btn-link text-white-50" href="/service">
              About Us
            </a>
            <a className="btn btn-link text-white-50" href="/donate">
              Board of Trustees
            </a>
            <a className="btn btn-link text-white-50" href="/team">
              Our Team
            </a>
            <a className="btn btn-link text-white-50" href="/contact">
              Contact
            </a>
            <a className="btn btn-link text-white-50" href="/donate">
              Support
            </a>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Newsletter</h5>
            <p>
              Subscribe to receive updates, stories, and opportunities to
              support our mission.
            </p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5 text-white-50 border-light"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid border-top border-secondary pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a href="#" className="text-white">
                Heart Recovery Foundation
              </a>
              , All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed by{" "}
              <a href="/" className="text-white">
                DCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
