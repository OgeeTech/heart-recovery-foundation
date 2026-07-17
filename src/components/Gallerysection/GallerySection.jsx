import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import "./Gallery.css";

const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const totalImages = 25;
  const imageNumbers = Array.from(
    { length: totalImages },
    (_, index) => index + 1,
  );

  // Lock the background from scrolling when the image is open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImg]);

  return (
    <>
      <Helmet>
        <title>Our Gallery | Heart Recovery Foundation</title>
        <meta
          name="description"
          content="View our gallery of moments, outreach programs, and the lives we've touched at the Heart Recovery Foundation."
        />
      </Helmet>

      {/* Header Section */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#1e3e33", marginTop: "5px" }}
      >
        <div className="container py-4 text-center">
          <motion.h1
            className="display-4 text-white mb-3 fw-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            className="lead text-white-50 mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Capturing moments of hope, healing, and community impact.
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container-fluid py-5 bg-light">
        <div className="container py-4">
          <div className="row g-4">
            {imageNumbers.map((num, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={num}>
                <motion.div
                  className="gallery-item rounded-3 overflow-hidden shadow-sm h-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  onClick={() => setSelectedImg(num)}
                >
                  <img
                    src={`/gallery/g${num}.jpeg`}
                    alt={`HRF Moment ${num}`}
                    className="img-fluid gallery-img w-100 h-100"
                    loading="lazy"
                  />
                  <div className="gallery-overlay d-flex align-items-center justify-content-center">
                    <i className="fa fa-search-plus text-white fs-3"></i>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BULLETPROOF LIGHTBOX OVERLAY --- */}
      {createPortal(
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              style={{
                position: "fixed", // Forces it to the screen
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999, // Massively high z-index to beat everything
                cursor: "zoom-out",
                margin: 0,
                padding: "20px",
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                className="btn-close btn-close-white position-absolute"
                aria-label="Close"
                onClick={() => setSelectedImg(null)}
                style={{
                  top: "20px",
                  right: "20px",
                  zIndex: 10000,
                  fontSize: "1.5rem",
                }}
              ></button>

              {/* Zoomed Image */}
              <motion.img
                src={`/gallery/g${selectedImg}.jpeg`}
                alt={`Zoomed HRF Moment ${selectedImg}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain", // Prevents stretching
                  borderRadius: "8px",
                  cursor: "default",
                  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default GallerySection;
