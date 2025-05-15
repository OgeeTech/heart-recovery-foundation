import React from "react";
import { Tab, Tabs, Card, Button } from "react-bootstrap";
import "./DonateSection.css";

const DonateSection = () => {
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
                  With absent or limited health insurance coverage across most
                  of SSA, access to OHS is therefore very restricted as most
                  patients are unable to pay out of pocket for these expensive
                  procedures ranging on average from $8000 to $10000.00.
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
                    <p>
                      Corporations can help by contributing what they can,
                      volunteering their time, or sharing the cause.
                    </p>
                    <div className="center-button">
                      <Button variant="primary donate-btn">
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
                    <p>
                      Individuals can help with a donation, fundraising,
                      education committees, or outreach programs.
                    </p>
                    <div className="center-button">
                      <Button variant="primary donate-btn">
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
