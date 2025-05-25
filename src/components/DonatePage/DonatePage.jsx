import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";

const DonatePage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const componentProps = {
    email: form.email,
    amount: parseInt(form.amount) * 100,
    metadata: {
      name: form.name,
    },
    publicKey,
    text: "Donate Now",
    onSuccess: () => {
      toast.success("Payment Successfull");
      setSubmitted(true);
      setForm({ name: "", email: "", amount: "" });
    },
    onClose: () => toast.error("Payment cancelled"),
  };

  return (
    <div className="volunteer-form">
      <div className="form-spacing"></div>

      <div className="volunteer-container">
        <h2 className="volunteer-title">Make a Donation</h2>

        {submitted && (
          <div className="alert alert-success text-center mb-3">
            Thank you for your donation!
          </div>
        )}

        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="E.g. Jane Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E.g. jane@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount (₦)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Enter amount in Naira"
              required
            />
          </div>
        </form>
        <PaystackButton
          className="submit-btn"
          {...componentProps}
          type="button"
        />
      </div>
    </div>
  );
};

export default DonatePage;
