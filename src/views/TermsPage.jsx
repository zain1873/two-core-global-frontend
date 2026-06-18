"use client";

import React from "react";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/legal.css";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const banner = "/assets/terms-banner.jpg";
const LAST_UPDATED = "June 16, 2026";

function TermsPage() {
  return (
    <div className="sem-services legal-page">
      <Navbar />

      {/* Banner */}
      <section
        className="web-banner"
        style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="banner-dark-overlay" />
        <div className="banner-glass">
          <div className="banner-content">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]} />
            <h1>Terms &amp; Conditions</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="legal-section">
        <div className="legal-inner">
          <div className="legal-head">
            <span className="legal-eyebrow">Legal</span>
            <h2 className="legal-title">
              Terms &amp; <span className="legal-accent">Conditions</span>
            </h2>
            <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="legal-intro">
            <p>
              These Terms &amp; Conditions ("Terms") govern your access to and use of the website and
              services provided by Two Core Global ("we", "us", or "our"). By accessing our website or
              engaging our services, you agree to be bound by these Terms. Please read them carefully.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">01</span> Acceptance of Terms</h2>
            <p>
              By using this website or any of our services, you confirm that you have read, understood,
              and agree to be bound by these Terms and our Privacy Policy. If you do not agree, please
              discontinue use of our website and services.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">02</span> Services</h2>
            <p>
              Two Core Global provides digital services including web and mobile development, SEO, paid
              advertising, social media marketing, branding, UI/UX design, and related solutions. The
              specific scope, deliverables, timelines, and fees for any engagement will be set out in a
              separate proposal, statement of work, or written agreement.
            </p>
            <ul className="legal-list">
              <li><strong>Scope changes</strong> — Any work beyond the agreed scope may be subject to additional fees and timelines.</li>
              <li><strong>Third-party tools</strong> — Some deliverables may rely on third-party platforms governed by their own terms.</li>
              <li><strong>Availability</strong> — We aim for continuous availability but do not guarantee uninterrupted access to our website.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">03</span> Client Responsibilities</h2>
            <p>You agree to cooperate with us to enable the delivery of services, including:</p>
            <ul className="legal-list">
              <li>Providing accurate, complete, and timely information, content, and materials.</li>
              <li>Securing all necessary rights, licenses, and permissions for materials you supply.</li>
              <li>Reviewing and providing feedback on deliverables within agreed timeframes.</li>
              <li>Making payments in accordance with the agreed schedule.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">04</span> Payments &amp; Fees</h2>
            <p>
              Fees are payable as set out in the applicable proposal or invoice. Unless stated otherwise,
              invoices are due within the period specified on the invoice. Late payments may result in
              suspension of services and may incur additional charges. All fees are exclusive of applicable
              taxes unless stated otherwise.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">05</span> Intellectual Property</h2>
            <p>
              Upon full payment, ownership of the final deliverables created specifically for you transfers
              to you, except for any third-party assets, open-source components, or our pre-existing tools
              and frameworks, which remain the property of their respective owners. We retain the right to
              display completed work in our portfolio and marketing materials unless agreed otherwise in
              writing.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">06</span> Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any non-public information shared during an engagement
              and to use it solely for the purpose of delivering the agreed services. This obligation
              survives the termination of any agreement.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">07</span> Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Two Core Global shall not be liable for any indirect,
              incidental, or consequential damages, including loss of profits, data, or business
              opportunities, arising from the use of our website or services. Our total liability for any
              claim shall not exceed the amount paid by you for the specific service giving rise to the
              claim.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">08</span> Termination</h2>
            <p>
              Either party may terminate an engagement in accordance with the terms of the applicable
              agreement. Upon termination, you agree to pay for all work completed up to the date of
              termination. We reserve the right to suspend or terminate access to our website for conduct
              that violates these Terms.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">09</span> Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The updated version will be posted on this page
              with a revised "Last updated" date. Your continued use of our website or services after any
              change constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">10</span> Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable local laws,
              without regard to conflict of law principles. Any disputes shall be subject to the exclusive
              jurisdiction of the competent courts in our place of business.
            </p>
          </div>

          <div className="legal-contact">
            <h2>Questions About These Terms?</h2>
            <p>
              If you have any questions about these Terms &amp; Conditions, please reach out and our team
              will be happy to help.
            </p>
            <a className="legal-contact-btn" href="mailto:twocoreglobal@gmail.com">
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TermsPage;
