import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import "./DonatePage.css";

const DonatePage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const publicKey =
    process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxx"; // fallback

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
      toast.success("Payment Successful!");
      setSubmitted(true);
      setForm({ name: "", email: "", amount: "" });
    },
    onClose: () => toast.error("Payment Cancelled"),
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-header">Support Our Mission</h2>

      {/* Multiple Payment Cards */}
      <div className="row row-cols-1 row-cols-md-4 g-4 text-white">
        <div className="col">
          <div className="card h-100 bg-primary shadow text-white">
            <div className="card-body">
              <h5 className="card-title">Bank Transfer</h5>
              <p className="card-text">
                <strong>Acct No:</strong> 1028027512 <br />
                <strong>Name:</strong> Heart Recovery Foundation <br />
                <strong>Bank:</strong> UBA
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 bg-dark shadow">
            <div className="card-body ">
              <h5 className="card-title">Ethereum (Base Chain)</h5>
              <p className="card-text small ">
                0x75c5b68D6D879950016120A7bE406e904BAdC696
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 bg-warning text-dark shadow">
            <div className="card-body">
              <h5 className="card-title">Bitcoin (BTC)</h5>
              <p className="card-text small">
                38jcZY3tLKW2v8WRu8oh8wE2JQpCgdypB3
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 bg-success shadow">
            <div className="card-body">
              <h5 className="card-title">Solana (SOL)</h5>
              <p className="card-text small">
                FXKE1VBagTmSEWgSfia8KPBNjhWcJpzi1h5yKg9rqmM5
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Paystack Card */}
      <div className="card mt-5 shadow-sm border-0">
        <div className="card-body">
          <div className="d-flex align-items-center mb-4">
            <img
              src="/img/Paystack_Logo.png"
              alt="Paystack"
              width="80"
              className="me-3 "
            />
            <h4 className="mb-0 text-header">Donate with Paystack</h4>
          </div>

          {submitted && (
            <div className="alert alert-success text-center">
              Thank you for your donation!
            </div>
          )}

          <form className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="col-md-4">
              <input
                type="number"
                id="amount"
                value={form.amount}
                onChange={handleChange}
                className="form-control"
                placeholder="Amount (₦)"
                required
              />
            </div>

            <div className="col-12 text-center">
              <PaystackButton
                {...componentProps}
                className="btn payment-btn btn-secondary px-5"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
