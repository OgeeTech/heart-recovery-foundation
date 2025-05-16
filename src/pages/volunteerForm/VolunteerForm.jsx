import React from "react";
import "./VolunteerForm.css";
import Header from "../../layouts/Header/Header";
import Footer from "../../components/Footer/Footer";

const VolunteerForm = () => {
  return (
    <div className="volunteer-form">
      <Header />

      {/* Add spacing between Header and Form */}
      <div className="form-spacing"></div>

      <div className="volunteer-container">
        <h2 className="volunteer-title">Volunteer Form</h2>
        <form
          action="/submit/volunteer"
          method="post"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="volunteerName">Volunteer Name</label>
            <input
              type="text"
              id="volunteerName"
              name="volunteerName"
              placeholder="E.g. John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="professional">Your Profession</label>
            <input
              type="text"
              id="professional"
              name="professional"
              placeholder="E.g. Software Developer"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="workMobilePhone">Work / Mobile Phone</label>
            <input
              type="tel"
              id="workMobilePhone"
              name="workMobilePhone"
              placeholder="Phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="E.g. john@doe.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Area Of Interest (check all applicable)</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  value="Fund Raising"
                  name="areaOfInterest[]"
                />
                Fund Raising
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Public Education / Training in Lay CPR"
                  name="areaOfInterest[]"
                />
                Public Education / Training in Lay CPR
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Outreach Programs"
                  name="areaOfInterest[]"
                />
                Outreach Programs
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="howDidYouFindUs">How did you find us?</label>
            <textarea
              id="howDidYouFindUs"
              name="howDidYouFindUs"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="cvUpload">
              Upload Your CV (pdf, docx, doc only)
            </label>
            <input type="file" id="cvUpload" name="cvUpload" required />
            <small className="form-text">No file chosen</small>
          </div>

          <button type="submit" className="submit-btn">
            Send Form
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteerForm;
