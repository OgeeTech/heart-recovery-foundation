import React from "react";
import logo from "../../assets/Images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container bg-dark text-white-50 pt-4 pb-2">
      <div className="container">
        <div className="row g-4">
          {/* Logo and Short Description */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex align-items-center mb-2">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "35px", height: "35px", marginRight: "8px" }}
              />
              <h5 className="fw-bold text-primary m-0">
                Heart<span className="text-white">Recovery</span>
              </h5>
            </div>
            <p className="small mb-2">
              Supporting health recovery for underprivileged communities.
            </p>
            <div className="d-flex">
              <a
                aria-label="Twitter"
                className="btn btn-sm btn-square text-white-50 me-1"
                href="https://x.com/HeartrecoveryF/status/1895495423307260024"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                aria-label="Facebook"
                className="btn btn-sm btn-square text-white-50 me-1"
                href="https://www.facebook.com/profile.php?id=61573737165012"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                aria-label="Instagram"
                className="btn btn-sm btn-square text-white-50 me-1"
                href="https://www.instagram.com/heartrecoveryfoundation"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                aria-label="LinkedIn"
                className="btn btn-sm btn-square text-white-50 me-1"
                href="https://www.linkedin.com/in/heart-recovery-foundation-764ba5353"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                aria-label="YouTube"
                className="btn btn-sm btn-square text-white-50 me-1"
                href="https://www.youtube.com/@heartrecoveryfoundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-4">
            <h6 className="text-light mb-2">Contact</h6>
            <p className="small mb-1">
              <i className="fa fa-map-marker-alt me-2"></i>No.1 Edo Street,
              Jikwoyi Abuja
            </p>
            <p className="small mb-1">
              <i className="fa fa-envelope me-2"></i>
              heartrecoveryfoundation@gmail.com
            </p>
            <p className="small mb-0">
              <i className="fa fa-phone-alt me-2"></i>07026000012
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-4">
            <h6 className="text-light mb-2">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a className="text-white-50" href="/service">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-white-50" href="/team">
                  Our Team
                </a>
              </li>
              <li>
                <a className="text-white-50" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        {/* Copyright */}
        <div className="text-center small">
          &copy; {new Date().getFullYear()}{" "}
          <a href="/" className="text-white">
            Heart Recovery Foundation
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
