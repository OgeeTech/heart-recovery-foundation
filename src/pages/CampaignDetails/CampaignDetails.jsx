import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const CampaignDetails = () => {
  return (
    <>
      <Helmet>
        <title>Success: Baby El-Rufai | Heart Recovery Foundation</title>
        <meta
          name="description"
          content="Thanks to your generous donations, Baby Uthma El-Rufai's Ventricular Septal Defect (VSD) surgery was a massive success."
        />
      </Helmet>

      {/* Hero Banner - Updated to Success Theme */}
      <div
        className="container-fluid py-5"
        style={{ marginTop: "10px", backgroundColor: "#1e3e33" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <motion.span
                className="badge bg-success rounded-pill px-3 py-2 mb-3 fs-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Campaign Completed
              </motion.span>
              <motion.h1
                className="display-5 text-white mb-3 fw-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A Heart Saved: Baby El-Rufai
              </motion.h1>
              <motion.p
                className="lead text-white-50 mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Thank you for giving this little warrior a second chance at
                life.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Campaign Content */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Left Column: Blurred Image Overlay and Patient Details */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Blurred Image Overlay Section */}
              <div className="position-relative overflow-hidden rounded-4 shadow-lg mb-4">
                <img
                  src="/img/elrufai.jpeg"
                  alt="Baby Uthma El-Rufai"
                  className="img-fluid w-100"
                  style={{
                    objectFit: "cover",
                    filter: "blur(4px) brightness(0.6)", // Blurs and darkens the background
                    minHeight: "400px",
                  }}
                />
                <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-4">
                  <i
                    className="fa fa-heartbeat text-success mb-3"
                    style={{ fontSize: "3rem" }}
                  ></i>
                  <h3
                    className="text-white fw-bold text-uppercase mb-2"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                  >
                    Surgery Successful!
                  </h3>
                  <p
                    className="text-white fs-5 fw-medium"
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
                  >
                    Because of your generous donations, Baby El-Rufai is
                    recovering beautifully.
                  </p>
                </div>
              </div>

              <div className="card border-0 shadow-sm rounded-4 bg-light">
                <div className="card-body p-4 text-muted">
                  <h4 className="fw-bold text-secondary mb-3 border-bottom pb-2">
                    Patient Details
                  </h4>
                  <p className="mb-2 fs-5">
                    <strong>Patient:</strong> Uthma El-Rufai
                  </p>
                  <p className="mb-0 fs-5">
                    <strong>Diagnosis:</strong> VSD (Ventricular Septal Defect)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Greyed-out Status & Forward-looking Call to Action */}
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="fw-bold mb-4 text-success">We Did It Together!</h2>
              <p className="lead text-muted mb-4">
                The fundraising milestone for the flight ticket was successfully
                met. The visa, flight, and complex surgical procedures were
                carried out perfectly. We are deeply grateful to every donor who
                stepped in to make this miracle happen.
              </p>

              {/* Greyed-out Status Checklist */}
              <div className="card border-0 shadow-sm rounded-4 mb-5 bg-light opacity-75">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4 text-secondary">
                    Campaign History
                  </h4>
                  <ul className="list-group list-group-flush fs-5">
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3 border-bottom-0 bg-transparent text-muted">
                      <div>
                        <i className="fa fa-check-circle text-secondary me-3 fs-4"></i>
                        <del>
                          <strong>Surgery</strong>
                        </del>
                      </div>
                      <span className="badge bg-secondary rounded-pill px-3 py-2">
                        COMPLETED
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3 border-bottom-0 bg-transparent text-muted">
                      <div>
                        <i className="fa fa-check-circle text-secondary me-3 fs-4"></i>
                        <del>
                          <strong>Visa</strong>
                        </del>
                      </div>
                      <span className="badge bg-secondary rounded-pill px-3 py-2">
                        COMPLETED
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-3 border-bottom-0 bg-transparent text-muted mt-2">
                      <div>
                        <i className="fa fa-check-circle text-secondary me-3 fs-4"></i>
                        <del>
                          <strong>Flight Ticket</strong>
                        </del>
                      </div>
                      <span className="badge bg-secondary rounded-pill px-3 py-2 text-uppercase shadow-sm">
                        COMPLETED
                      </span>
                    </li>
                  </ul>

                  <div
                    className="text-center mt-4 p-3 rounded-3 border"
                    style={{ backgroundColor: "#e9ecef" }}
                  >
                    <h5 className="mb-1 fw-bold text-secondary">
                      Goal of 1.6 MILLION NGN
                    </h5>
                    <h2 className="display-6 fw-bold mb-0 text-secondary">
                      FULLY FUNDED
                    </h2>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Redirecting to help others */}
              <div
                className="mt-4 p-4 rounded-4"
                style={{ backgroundColor: "#1e3e33" }}
              >
                <h4 className="text-white fw-bold mb-3">
                  Keep The Miracle Going
                </h4>
                <p className="text-white-50 mb-4">
                  Baby El-Rufai's life was saved, but there are still many other
                  children on our waiting list urgently needing heart surgeries.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-start">
                  <Link
                    to="/donate-now"
                    className="btn px-4 py-3 rounded-pill shadow-sm fs-5 fw-bold"
                    style={{
                      backgroundColor: "#bdcb38",
                      color: "#1e3e33",
                    }}
                  >
                    <i className="fa fa-heartbeat me-2"></i> Help Another
                    Patient
                  </Link>
                  <Link
                    to="/gallery"
                    className="btn btn-outline-light px-4 py-3 rounded-pill shadow-sm fs-5 fw-bold"
                  >
                    <i className="fa fa-image me-2"></i> View Gallery
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignDetails;
