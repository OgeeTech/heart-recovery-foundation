import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you can enhance this or use a form library)
    if (form.name && form.email && form.subject && form.message) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="contact py-5 bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="contact-p">Get In Touch</p>
          <h2>Contact for any query</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="img/contact.jpg"
              alt="Contact"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            {submitted && (
              <div className="alert alert-success">
                Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 donate-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
