"use client";

// ConnectForm.jsx
import { useState } from "react";
import "../css/contactform.css";

const INTERESTS = ["Website", "SEO", "Branding", "Google Ads", "Meta Ads", "CRM & Automation", "Other"];
const BUDGETS = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+", "Let's Discuss"];
const HEAR_OPTIONS = [
  "How did you hear about us",
  "Google Search",
  "Social Media",
  "Referral",
  "Advertisement",
  "Other",
];

export default function ConnectForm() {
  const [selectedInterests, setSelectedInterests] = useState(["Other"]);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    hearAbout: "",
    message: "",
  });

  const toggleInterest = (item) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.companyName,
          designation: formData.designation,
          hear_about: formData.hearAbout,
          message: formData.message,
          interests: selectedInterests,
          budget: selectedBudget,
        }),
      });

      if (!res.ok) {
        const errors = await res.json().catch(() => null);
        console.error("Contact form validation error:", errors);
        setSubmitError("Something went wrong. Please check the form and try again.");
        return;
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        designation: "",
        hearAbout: "",
        message: "",
      });
      setSelectedInterests(["Other"]);
      setSelectedBudget(null);
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form network error:", err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="connect-wrapper">
      <div className="connect-card">
        {/* Title */}
        <h1 className="connect-title theme-title">Let's Connect</h1>

        {/* Full Name */}
        <div className="field-group">
          <input
            className="connect-input"
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="field-group">
          <input
            className="connect-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="field-group">
          <input
            className="connect-input"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Company Name */}
        <div className="field-group">
          <input
            className="connect-input"
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        {/* Designation */}
        <div className="field-group">
          <input
            className="connect-input"
            type="text"
            name="designation"
            placeholder="Your designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>

        {/* How did you hear about us */}
        <div className="select-wrapper">
          <select
            className="connect-select"
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
          >
            {HEAR_OPTIONS.map((opt) => (
              <option key={opt} value={opt === "How did you hear about us" ? "" : opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="select-arrow">▾</span>
        </div>

        {/* Message */}
        <div className="field-group">
          <textarea
            className="connect-textarea"
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
          />
        </div>

        {/* Interested In */}
        <p className="section-label">I am interested in</p>
        <div className="tag-group">
          {INTERESTS.map((item) => (
            <button
              key={item}
              className={`tag-btn ${selectedInterests.includes(item) ? "active" : ""}`}
              onClick={() => toggleInterest(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Budget */}
        <p className="section-label">Project Budget</p>
        <div className="budget-group">
          {BUDGETS.map((item) => (
            <button
              key={item}
              className={`budget-btn ${selectedBudget === item ? "active" : ""}`}
              onClick={() => setSelectedBudget(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Submit */}
        {submitted && (
          <p className="form-status form-status-success">
            ✓ Form submitted successfully! We'll get back to you soon.
          </p>
        )}
        {submitError && <p className="form-status form-status-error">{submitError}</p>}
        <button className="submit-btn" onClick={handleSubmit} type="button" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}