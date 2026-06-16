"use client";

import React from "react";
import "../css/PagesCss/webDev.css";
import "../css/PagesCss/legal.css";
import Navbar from "../components/navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const banner = "/assets/tcg-banner.jpg";
const LAST_UPDATED = "June 16, 2026";

function PrivacyPolicyPage() {
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
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="legal-section">
        <div className="legal-inner">
          <div className="legal-head">
            <span className="legal-eyebrow">Legal</span>
            <h2 className="legal-title">
              Privacy <span className="legal-accent">Policy</span>
            </h2>
            <p className="legal-updated">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="legal-intro">
            <p>
              Two Core Global ("we", "us", or "our") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website or use our services. By using our website, you consent to the practices described
              in this policy.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">01</span> Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="legal-list">
              <li><strong>Information you provide</strong> — Name, email address, phone number, company details, and project information you share via forms or direct contact.</li>
              <li><strong>Usage data</strong> — IP address, browser type, device information, pages visited, and time spent on our website.</li>
              <li><strong>Cookies &amp; tracking</strong> — Data collected through cookies and similar technologies to improve your experience and analyze traffic.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">02</span> How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="legal-list">
              <li>Provide, operate, and improve our services and website.</li>
              <li>Respond to your inquiries and communicate about projects.</li>
              <li>Send updates, proposals, and relevant marketing communications (where permitted).</li>
              <li>Analyze usage trends to enhance user experience and performance.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">03</span> Cookies &amp; Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to remember your preferences, understand how you
              interact with our website, and deliver relevant content. You can control or disable cookies
              through your browser settings, although some features of the website may not function
              properly without them.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">04</span> How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We may share it only in the following circumstances:
            </p>
            <ul className="legal-list">
              <li><strong>Service providers</strong> — Trusted third parties who help us operate our business (e.g., hosting, analytics, email), bound by confidentiality obligations.</li>
              <li><strong>Legal requirements</strong> — When required by law, regulation, or valid legal process.</li>
              <li><strong>Business transfers</strong> — In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">05</span> Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">06</span> Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes
              outlined in this policy, comply with legal obligations, resolve disputes, and enforce our
              agreements.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">07</span> Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="legal-list">
              <li>Access, correct, or delete the personal information we hold about you.</li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details below.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">08</span> Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for
              the privacy practices or content of those external sites. We encourage you to review their
              privacy policies before providing any personal information.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">09</span> Children's Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 16. We do not
              knowingly collect personal information from children. If you believe a child has provided us
              with personal data, please contact us so we can take appropriate action.
            </p>
          </div>

          <div className="legal-block">
            <h2><span className="legal-num">10</span> Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be posted on
              this page with a revised "Last updated" date. We encourage you to review this policy
              periodically to stay informed about how we protect your information.
            </p>
          </div>

          <div className="legal-contact">
            <h2>Questions About Your Privacy?</h2>
            <p>
              If you have any questions or requests regarding this Privacy Policy or your personal data,
              please get in touch with our team.
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

export default PrivacyPolicyPage;
