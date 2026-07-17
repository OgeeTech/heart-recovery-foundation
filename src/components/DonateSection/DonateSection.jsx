import React from "react";
import { Tab, Tabs, Card, Button } from "react-bootstrap";
import "./DonateSection.css";
import { useNavigate } from "react-router-dom";

const DonateSection = () => {
  const navigate = useNavigate();

  return (
    <div className="donation-container">
      <div className="donation-content container">
        <h2 className="text-center mb-4 heading">
          <span className="d-inline-block rounded-pill heading-pill px-4 py-2">
            Donate Now
          </span>
        </h2>

        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 mb-4">
            <div className="help-box">
              <div className="help-box-inner">
                <h5 className="text-danger text-uppercase">
                  How Can You Help?
                </h5>
                <hr className="short-line" />
                <p>
                  Heart procedures typically range between $10,000
                  and $12,000, forcing countless individuals to forgo care and,
                  tragically, lose their lives due to financial constraints.
                  While some heart foundations offer assistance, their efforts
                  fall short given the overwhelming number of patients in
                  Nigeria and the limited funding available. Heart disease
                  remains one of the leading causes of death globally, and
                  greater support is urgently needed to help underprivileged
                  individuals access life-saving treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <Card>
              <Tabs defaultActiveKey="corporations" className="nav-tabs-red">
                <Tab
                  eventKey="corporations"
                  title={
                    <span>
                      <i className="fas fa-building me-2"></i>Corporations
                    </span>
                  }
                >
                  <Card.Body>
                    <p className="text-dark">
                      Corporations can help by contributing what they can,
                      volunteering their time, or sharing the cause.
                    </p>
                    <div className="center-button">
                      <Button
                        variant="primary donate-btn"
                        onClick={() => {
                          navigate("/donate-now");
                        }}
                      >
                        Click Here To Donate
                      </Button>
                    </div>
                  </Card.Body>
                </Tab>

                <Tab
                  eventKey="individuals"
                  title={
                    <span>
                      <i className="fas fa-user me-2"></i>Individuals
                    </span>
                  }
                >
                  <Card.Body>
                    <p className="text-dark">
                      Individuals can help with a donation, fundraising,
                      education committees, or outreach programs.
                    </p>
                    <div className="center-button">
                      <Button
                        variant="primary donate-btn"
                        onClick={() => {
                          navigate("/donate-now");
                        }}
                      >
                        Click Here To Donate
                      </Button>
                    </div>
                  </Card.Body>
                </Tab>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
