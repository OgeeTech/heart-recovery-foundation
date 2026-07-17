import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Added Link for the buttons

const CampaignDetails = () => {
  return (
    <>
      <Helmet>
        <title>Help Baby El-Rufai | Heart Recovery Foundation</title>
        <meta
          name="description"
          content="Urgent fundraising for Baby Uthma El-Rufai's surgery flight ticket. Help us raise 1.6 Million for his Ventricular Septal Defect (VSD) treatment."
        />
      </Helmet>

      {/* Hero Banner */}
      <div
        className="container-fluid py-5"
        style={{ marginTop: "10px", backgroundColor: "#1e3e33" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <motion.span
                className="badge bg-danger rounded-pill px-3 py-2 mb-3 fs-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Urgent Appeal
              </motion.span>
              <motion.h1
                className="display-5 text-white mb-3 fw-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Fundraising for Baby El-Rufai
              </motion.h1>
              <motion.p
                className="lead text-white-50 mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Surgery Flight Ticket Needed to Save a Life
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Campaign Content */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Left Column: Image and Patient Details */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/img/elrufai.jpeg"
                alt="Baby Uthma El-Rufai"
                className="img-fluid rounded-4 shadow-lg mb-4 w-100"
                style={{ objectFit: "cover" }}
              />

              <div className="card border-0 shadow-sm rounded-4 bg-light">
                <div className="card-body p-4">
                  <h4 className="fw-bold text-dark mb-3 border-bottom pb-2">
                    Patient Details
                  </h4>
                  <p className="mb-2 fs-5">
                    <strong>Patient:</strong>{" "}
                    <span className="text-primary">Uthma El-Rufai</span>
                  </p>
                  <p className="mb-0 fs-5">
                    <strong>Diagnosis:</strong>{" "}
                    <span className="text-danger fw-medium">
                      VSD (Ventricular Septal Defect)
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Status & Donation Info */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="fw-bold mb-4" style={{ color: "#1e3e33" }}>
                We Need Your Help!!!
              </h2>
              <p className="lead text-muted mb-4">
                Thanks to generous contributions, the major medical and travel
                hurdles have been cleared. Now, we just need to secure the
                flight ticket so Baby Uthma can travel for this life-saving
                surgery.
              </p>

              {/* Status Checklist */}
              <div className="card border-0 shadow-sm rounded-4 mb-5">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Campaign Status</h4>
                  <ul className="list-group list-group-flush fs-5">
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3 border-bottom-0">
                      <div>
                        <i className="fa fa-check-circle text-success me-3 fs-4"></i>
                        <strong>Surgery</strong>
                      </div>
                      <span className="badge bg-success rounded-pill px-3 py-2">
                        PAID IN FULL
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3 border-bottom-0">
                      <div>
                        <i className="fa fa-check-circle text-success me-3 fs-4"></i>
                        <strong>Visa</strong>
                      </div>
                      <span className="badge bg-success rounded-pill px-3 py-2">
                        PAID IN FULL
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3 bg-danger bg-opacity-10 rounded-3 mt-2 border">
                      <div>
                        <i className="fa fa-plane-departure text-danger me-3 fs-4"></i>
                        <strong>Flight Ticket</strong>
                      </div>
                      <span className="badge bg-danger rounded-pill px-3 py-2 text-uppercase shadow-sm">
                        Pending
                      </span>
                    </li>
                  </ul>

                  <div
                    className="text-center mt-4 p-3 rounded-3"
                    style={{ backgroundColor: "#bdcb38" }}
                  >
                    <h5 className="mb-1 fw-bold" style={{ color: "#1e3e33" }}>
                      Cost of Flight Ticket
                    </h5>
                    <h2
                      className="display-6 fw-bold mb-0"
                      style={{ color: "#1e3e33" }}
                    >
                      1.6 MILLION NGN
                    </h2>
                  </div>
                </div>
              </div>

              {/* Action Buttons Replacing Bank & Contact Info */}
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-lg-start mt-4">
                <Link
                  to="/donate-now"
                  className="btn px-5 py-3 rounded-pill shadow-sm fs-5 fw-bold"
                  style={{
                    backgroundColor: "#1e3e33",
                    color: "#bdcb38",
                    borderColor: "#1e3e33",
                  }}
                >
                  <i className="fa fa-heart me-2"></i> Donate Now
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-dark px-5 py-3 rounded-pill shadow-sm fs-5 fw-bold"
                >
                  <i className="fa fa-envelope me-2"></i> Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignDetails;
