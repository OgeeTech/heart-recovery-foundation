import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./GetInvolveSection.css";

const GetInvolveSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/volunteer");
  };

  return (
    <div className="get-involve-container">
      <div className="get-involve-content container">
        <h2 className="text-center mb-4 heading">
          <span className="d-inline-block rounded-pill heading-pill px-4 py-2">
            Join Our Volunteer Team
          </span>
        </h2>

        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 mb-4">
            <div className="help-box">
              <div className="help-box-inner">
                <h5 className="text-danger text-uppercase">Why Volunteer?</h5>
                <hr className="short-line" />
                <p>
                  Volunteering offers a chance to give back to your community
                  while building valuable experience and connections. Be part of
                  something meaningful by joining our mission today.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <Card>
              <Card.Body>
                <p>
                  Whether you can give a few hours a week or help with specific
                  events, your time and skills make a difference.
                </p>
                <div className="center-button">
                  <Button
                    variant="primary"
                    className="volunteer-btn"
                    onClick={handleClick}
                  >
                    Become a Volunteer
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolveSection;
