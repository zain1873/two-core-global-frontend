"use client";

import "../css/PagesCss/Contact.css";
import Navbar from "../components/navbar";
import { Link } from "@/lib/link";
import Contact from "../components/contactForm";
import Footer from "../components/Footer";
import CTASection from "../components/CtaSection";
import ContactStats from "../components/ContactStats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/Faqs";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      {/* ── Contact Banner ── */}
      <section className="contact-banner">
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-glow-left"></div>
        <div className="contact-banner-glow-bottom"></div>
        <div className="contact-banner-grid"></div>

        <div className="contact-banner-inner">
          {/* Left Content */}
          <div className="contact-banner-left">
            <p className="contact-banner-breadcrumb">
              <Link to="/">Home</Link> <span>/</span> Contact
            </p>

            <div className="contact-banner-chip">
              <span className="contact-banner-chip-dot"></span>
              Get In Touch
            </div>

            <h1 className="contact-banner-title">
              Let's Build Something{" "}
              <span className="accent-cyan">Amazing</span>
              <br />
              <span className="accent-green">Together</span>
            </h1>

            <p className="contact-banner-subtitle">
              Have a project in mind? We'd love to hear about it. Drop us a
              message and our team will get back to you within 24 hours.
            </p>

            <div className="contact-banner-actions">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn-primary"
              >
                Send a Message
              </a>
              <a href="tel:+923001234567" className="contact-btn-secondary">
                Call Us ↗
              </a>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="contact-banner-card">
            <a
              href="mailto:hello@twocoreglobal.com"
              className="contact-info-item contact-info-link"
            >
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email Us</span>
                <span className="contact-info-value">hello@twocoreglobal.com</span>
              </div>
            </a>

            <div className="contact-card-divider"></div>

            <a
              href="https://maps.google.com/?q=G1+Market,+Johar+Town,+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item contact-info-link"
            >
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Our Office</span>
                <span className="contact-info-value">G1 Market, Johar Town, Lahore</span>
              </div>
            </a>

            <div className="contact-card-divider"></div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Working Hours</span>
                <span className="contact-info-value">Mon – Sat, 10am – 7pm</span>
              </div>
            </div>

            <div className="contact-card-divider"></div>

            <div className="contact-response-badge">
              <span className="contact-response-dot"></span>
              <span className="contact-response-text">We respond within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="contact-scroll-indicator">
          <div className="contact-scroll-line"></div>
          Scroll
        </div>
      </section>

      <ContactStats />
      <CTASection />
      <Contact />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
