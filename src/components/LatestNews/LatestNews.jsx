import React from "react";

export default function LatestNews() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-sm text-center p-4"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-3 text-primary">
          <i
            className="bi bi-megaphone-fill"
            style={{ fontSize: "2.5rem", color: "var(--bs-primary)" }}
          ></i>
        </div>
        <h5 className="card-title text-dark">No upcoming events yet!</h5>
        <p className="card-text text-muted">
          We'll keep you posted on our latest updates, so be sure to check back
          soon.
        </p>
      </div>
    </div>
  );
}
