import React, { useState, useCallback } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bitcoin,
  Landmark,
  DollarSign,
  CheckCircle,
  Copy,
  ClipboardCheck,
} from "lucide-react";
import "./DonatePage.css";

// Reusable Hook for Clipboard
const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copy = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      toast.error("Clipboard not supported.", { className: "custom-toast" });
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success("Copied to clipboard!", { className: "custom-toast" });
      setTimeout(() => setCopiedText(null), 2000);
      return true;
    } catch (error) {
      toast.error("Failed to copy.", { className: "custom-toast" });
      return false;
    }
  }, []);

  return [copiedText, copy];
};

// Reusable Card Component
const PaymentMethodCard = ({ icon, title, details }) => {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div className="card payment-card mb-4 shadow">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <div className="text-success me-3">{icon}</div>
          <h5 className="card-title mb-0">{title}</h5>
        </div>
        {details.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-2"
          >
            <div className="flex-grow-1 me-2">
              <small className="text-muted">{item.label}</small>
              <p
                className={`mb-0 font-monospace ${
                  item.copyable ? "break-all" : ""
                }`}
              >
                {item.value}
              </p>
            </div>
            {item.copyable && (
              <button
                onClick={() => copy(item.value)}
                className="btn btn-sm btn-outline-success d-flex align-items-center"
              >
                {copiedText === item.value ? (
                  <ClipboardCheck size={18} className="me-1" />
                ) : (
                  <Copy size={18} className="me-1" />
                )}
                {copiedText === item.value ? "Copied" : "Copy"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const DonatePage = () => {
  const [form, setForm] = useState({ name: "", email: "", amount: "" });
  const [submitted, setSubmitted] = useState(false);

  const publicKey = "pk_test_xxxxx"; // Replace with your Paystack public key

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const paystackProps = {
    email: form.email,
    amount: parseInt(form.amount) * 100,
    metadata: { name: form.name },
    publicKey,
    text: "Donate Securely",
    onSuccess: () => {
      toast.success("Payment Successful!", { className: "custom-toast" });
      setSubmitted(true);
      setForm({ name: "", email: "", amount: "" });
    },
    onClose: () =>
      toast.warn("Payment window closed.", { className: "custom-toast" }),
  };

  const paymentMethods = [
    {
      icon: <Bitcoin size={24} />,
      title: "Pay with Bitcoin (BTC)",
      details: [
        {
          label: "BTC Wallet Address",
          value: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
          copyable: true,
        },
      ],
    },
    {
      icon: <Landmark size={24} />,
      title: "Bank Transfer (NGN)",
      details: [
        { label: "Bank", value: "UBA", copyable: false },
        {
          label: "Account Name",
          value: "Heart Recovery Foundation",
          copyable: false,
        },
        { label: "Account Number", value: "1028027512", copyable: true },
      ],
    },
    {
      icon: <DollarSign size={24} />,
      title: "Bank Transfer (USD)",
      details: [
        { label: "Bank", value: "UBA", copyable: false },
        {
          label: "Account Name",
          value: "Heart Recovery Foundation",
          copyable: false,
        },
        { label: "Account Number", value: "3004750720", copyable: true },
      ],
    },
  ];

  return (
    <section className="donate-section py-5 px-3 px-lg-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark">Support Our Mission</h2>
          <div
            className="mx-auto my-3 bg-success"
            style={{ width: "100px", height: "4px" }}
          ></div>
          <p className="text-muted lead">
            Your donation provides life-saving heart surgeries and support to
            those in need. Every contribution, big or small, makes a profound
            impact.
          </p>
        </div>

        <div className="row g-4">
          {/* Payment Method Cards */}
          <div className="col-lg-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PaymentMethodCard {...method} />
              </motion.div>
            ))}
          </div>

          {/* Paystack Form */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card shadow p-4">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="thankyou"
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle
                      size={48}
                      className="text-success mx-auto mb-3"
                    />
                    <h3 className="h4 fw-bold text-dark">Thank You!</h3>
                    <p className="text-muted">
                      Your generosity is making a real impact.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <h4 className="h5 text-center fw-bold text-success mb-3">
                      Quick & Secure Donation
                    </h4>
                    <p className="text-center text-muted mb-4">
                      Powered by Paystack
                    </p>
                    <div className="mb-3">
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        className="form-control py-2"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control py-2"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        id="amount"
                        value={form.amount}
                        onChange={handleChange}
                        className="form-control py-2"
                        placeholder="Amount (NGN)"
                        required
                      />
                    </div>
                    <PaystackButton
                      {...paystackProps}
                      className="btn btn-paystack w-100 py-2 fw-semibold"
                      disabled={!form.name || !form.email || !form.amount}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
