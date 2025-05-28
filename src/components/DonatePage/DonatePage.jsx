import React, { useState, useCallback } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Bitcoin, Landmark, DollarSign, CheckCircle, Copy, ClipboardCheck } from "lucide-react";
import styles from "./DonatePage.css";

// --- Reusable Hook for Clipboard ---
const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copy = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      toast.error("Clipboard not supported.");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopiedText(null), 2000); // Reset after 2 seconds
      return true;
    } catch (error) {
      toast.error("Failed to copy.");
      return false;
    }
  }, []);

  return [copiedText, copy];
};

// --- Reusable Card Component ---
const PaymentMethodCard = ({ icon, title, details }) => {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div className={styles.paymentMethodCard}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>{icon}</div>
        <h4 className={styles.cardTitle}>{title}</h4>
      </div>
      <div className={styles.cardBody}>
        {details.map((item, index) => (
          <div className={styles.detailRow} key={index}>
            <div>
              <span>{item.label}</span>
              <br />
              <code>{item.value}</code>
            </div>
            {item.copyable && (
              <button className={styles.copyButton} onClick={() => copy(item.value)}>
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

  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxx";

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const paystackProps = {
    email: form.email,
    amount: parseInt(form.amount) * 100,
    metadata: { name: form.name },
    publicKey,
    text: "Donate Securely",
    onSuccess: () => {
      toast.success("Payment Successful!");
      setSubmitted(true);
      setForm({ name: "", email: "", amount: "" });
    },
    onClose: () => toast.warn("Payment window closed."),
  };

  const paymentMethods = [
    {
        icon: <Bitcoin size={20} />,
        title: "Pay with Bitcoin (BTC)",
        details: [ { label: 'BTC Wallet Address', value: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', copyable: true } ]
    },
    {
        icon: <Landmark size={20} />,
        title: "Bank Transfer (NGN)",
        details: [
            { label: 'Bank', value: 'UBA', copyable: false },
            { label: 'Account Name', value: 'Heart Recovery Foundation', copyable: false },
            { label: 'Account Number', value: '1028027512', copyable: true }
        ]
    },
    {
        icon: <DollarSign size={20} />,
        title: "Bank Transfer (USD)",
        details: [
            { label: 'Bank', value: 'UBA', copyable: false },
            { label: 'Account Name', value: 'Heart Recovery Foundation', copyable: false },
            { label: 'Account Number', value: '3004750720', copyable: true }
        ]
    }
  ];

  return (
    <section id="donate" className={styles.donateSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={`display-4 ${styles.title}`}>Support Our Mission</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            Your donation provides life-saving heart surgeries and support to those in need. Every contribution, big or small, makes a profound impact.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Payment Method Cards */}
          <div className="d-grid gap-4">
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

          {/* Right Column: Paystack Form */}
          <motion.div
            className={styles.paymentFormCard}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thankyou"
                  className={styles.thankYouMessage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={48} color="var(--primary-dark-green)" className="mb-3" />
                  <h3>Thank You!</h3>
                  <p>Your generosity is making a real impact.</p>
                </motion.div>
              ) : (
                <motion.div key="form">
                  <h4 className="h5 text-center fw-bold" style={{color: 'var(--primary-dark-green)'}}>Quick & Secure Donation</h4>
                  <p className="text-center text-muted mb-4">Powered by Paystack</p>
                  <form className="row g-3">
                    <div className="col-12"><input type="text" id="name" value={form.name} onChange={handleChange} className="form-control p-3" placeholder="Your Name" required /></div>
                    <div className="col-12"><input type="email" id="email" value={form.email} onChange={handleChange} className="form-control p-3" placeholder="Your Email" required /></div>
                    <div className="col-12"><input type="number" id="amount" value={form.amount} onChange={handleChange} className="form-control p-3" placeholder="Amount (NGN)" required /></div>
                    <div className="col-12 mt-4">
                      <PaystackButton {...paystackProps} className={`btn w-100 p-3 fw-bold ${styles.paystackButton}`} disabled={!form.name || !form.email || !form.amount} />
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;