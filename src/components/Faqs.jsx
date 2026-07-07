// "use client";

// import { useState } from "react";
// import { Link } from "@/lib/link";

// const faqs = [
//   {
//     q: "What services do you provide?",
//     a: "We offer complete digital solutions including website design, SEO, social media marketing, Google Ads, branding, content creation, and business automation services.",
//   },
//   {
//     q: "How long does it take to build a website?",
//     a: "Most websites are completed within 1–4 weeks depending on the size, features, and project requirements.",
//   },
//   {
//     q: "Do you provide SEO with website development?",
//     a: "Yes, all our websites are built with SEO best practices to help improve visibility and performance on search engines.",
//   },
//   {
//     q: "Can you manage our social media accounts?",
//     a: "Absolutely. We create content, manage posting schedules, run ad campaigns, and help grow your online presence across all major platforms.",
//   },
//   {
//     q: "Do you work with international clients?",
//     a: "Yes, we work with businesses globally including clients from the UAE, UK, USA, Canada, and other international markets.",
//   },
//   {
//     q: "What industries do you work with?",
//     a: "We work with startups, e-commerce brands, real estate companies, automotive businesses, restaurants, agencies, and many other industries.",
//   },
//   {
//     q: "Do you offer ongoing support after project completion?",
//     a: "Yes, we provide maintenance, updates, technical support, and marketing assistance after launch.",
//   },
// ];

// const styles = `

//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }

//   .faq-page {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 3rem 1.5rem;
//   }

//   .faq-card {
//     display: grid;
//     grid-template-columns: 300px 1fr;
//     width: 100%;
//     max-width: 100%;
//     border-radius: 0;
//     overflow: hidden;
//     box-shadow: var(--shadow-card-light);
//     padding: 80px 64px 100px;
//     background: var(--color-bg);
//   }

//   /* ── LEFT PANEL ── */
//   .faq-left {
//     background: var(--color-bg-dark-alt);
//     padding: 3rem 2rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     position: relative;
//     overflow: hidden;
//   }

//   .faq-left::before {
//     content: '';
//     position: absolute;
//     width: 280px;
//     height: 280px;
//     border-radius: 50%;
//     background: rgba(124, 255, 0, 0.08);
//     top: -100px;
//     right: -100px;
//   }

//   .faq-left::after {
//     content: '';
//     position: absolute;
//     width: 180px;
//     height: 180px;
//     border-radius: 50%;
//     background: rgba(124, 255, 0, 0.05);
//     bottom: 40px;
//     left: -60px;
//   }

//   .left-badge {
//     display: inline-flex;
//     align-items: center;
//     gap: 6px;
//     background: rgba(124, 255, 0, 0.12);
//     border: 1px solid rgba(124, 255, 0, 0.25);
//     color: var(--color-primary);
//     font-size: 11px;
//     font-weight: 600;
//     font-family: 'Inter', sans-serif;
//     letter-spacing: 0.18em;
//     text-transform: uppercase;
//     padding: 6px 14px;
//     border-radius: 0;
//     margin-bottom: 1.5rem;
//     width: fit-content;
//     position: relative;
//     z-index: 1;
//   }

//   .left-dot {
//     width: 6px;
//     height: 6px;
//     background: var(--color-primary);
//     border-radius: 0;
//     animation: pulse 2s infinite;
//     box-shadow: var(--glow-primary);
//   }

//   @keyframes pulse {
//     0%, 100% { opacity: 1; }
//     50% { opacity: 0.4; }
//   }

//   .left-heading {
//     font-family: 'Syne', sans-serif;
//     font-size: 2rem;
//     font-weight: 800;
//     color: var(--color-heading);
//     line-height: 1.2;
//     margin-bottom: 1rem;
//     position: relative;
//     z-index: 1;
//     letter-spacing: -0.02em;
//   }

//   .left-heading span {
//     color: var(--color-primary);
//   }

//   .left-desc {
//     font-family: 'Inter', sans-serif;
//     font-size: 13px;
//     font-weight: 400;
//     color: var(--color-text);
//     line-height: 1.75;
//     margin-bottom: 1.5rem;
//     position: relative;
//     z-index: 1;
//   }

//   .left-tagline {
//     font-family: 'Barlow Condensed', sans-serif;
//     font-size: 1.3rem;
//     font-weight: 700;
//     color: var(--color-primary);
//     letter-spacing: 0.05em;
//     text-transform: uppercase;
//     margin-bottom: 2rem;
//     position: relative;
//     z-index: 1;
//     padding-top: 1rem;
//     border-top: 2px solid rgba(124, 255, 0, 0.2);
//   }

//   .left-stats {
//     display: flex;
//     flex-direction: column;
//     gap: 1.25rem;
//     position: relative;
//     z-index: 1;
//   }

//   .stat-row {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//   }

//   .stat-label {
//     font-family: 'Syne', sans-serif;
//     font-size: 13px;
//     font-weight: 700;
//     color: var(--color-heading);
//     display: block;
//     margin-bottom: 1px;
//     letter-spacing: -0.01em;
//   }

//   .stat-sub {
//     font-family: 'Inter', sans-serif;
//     font-size: 11.5px;
//     font-weight: 400;
//     color: var(--color-text-muted);
//   }

//   /* ── RIGHT PANEL ── */
//   .faq-right {
//     background: var(--color-bg-light);
//     padding: 2.5rem 2.25rem 2rem;
//     display: flex;
//     flex-direction: column;
//   }

//   .faq-right-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 1.5rem;
//   }

//   .faq-count {
//     font-family: 'Inter', sans-serif;
//     font-size: 12px;
//     color: var(--color-text-muted);
//     font-weight: 400;
//   }

//   .faq-search {
//     font-family: 'Inter', sans-serif;
//     font-size: 13px;
//     padding: 7px 14px;
//     border-radius: 0;
//     border: 1px solid var(--color-border);
//     background: var(--color-bg);
//     color: var(--color-text);
//     outline: none;
//     width: 160px;
//     transition: border-color 0.2s;
//   }

//   .faq-search:focus {
//     border-color: var(--color-primary);
//     box-shadow: var(--glow-primary);
//   }

//   .faq-search::placeholder {
//     color: var(--color-text-muted);
//   }

//   .faq-list {
//     flex: 1;
//   }

//   .faq-item {
//     border-bottom: 1px solid var(--color-border-light);
//   }

//   .faq-item:last-child {
//     border-bottom: none;
//   }

//   .faq-question {
//     width: 100%;
//     background: none;
//     border: none;
//     padding: 1.1rem 0;
//     display: flex;
//     align-items: flex-start;
//     justify-content: space-between;
//     gap: 12px;
//     cursor: pointer;
//     text-align: left;
//     font-family: 'Inter', sans-serif;
//   }

//   .faq-question:hover .faq-q-text {
//     color: var(--color-primary);
//   }

//   .faq-q-inner {
//     display: flex;
//     align-items: flex-start;
//     gap: 0;
//     flex: 1;
//   }

//   .faq-num {
//     font-family: 'Syne', sans-serif;
//     font-size: 11px;
//     font-weight: 700;
//     color: var(--color-primary);
//     background: rgba(124, 255, 0, 0.08);
//     border-radius: 0;
//     padding: 2px 8px;
//     margin-right: 12px;
//     margin-top: 2px;
//     flex-shrink: 0;
//     letter-spacing: 0.02em;
//     font-variant-numeric: tabular-nums;
//   }

//   .faq-q-text {
//     font-family: 'Inter', sans-serif;
//     font-size: 14px;
//     font-weight: 500;
//     color: var(--color-text-dark);
//     line-height: 1.5;
//     flex: 1;
//     transition: color 0.2s;
//   }

//   .faq-toggle {
//     width: 26px;
//     height: 26px;
//     background: transparent;
//     border: 1px solid var(--color-primary);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-shrink: 0;
//     margin-top: 1px;
//     transition: background 0.25s, border-color 0.25s, transform 0.3s;
//     font-family: 'Inter', sans-serif;
//     font-size: 16px;
//     color: var(--color-primary);
//     line-height: 1;
//     font-weight: 300;
//   }

//   .faq-toggle.open {
//     background: var(--color-primary);
//     border-color: var(--color-primary);
//     color: var(--color-bg-dark-alt);
//     transform: rotate(45deg);
//     box-shadow: var(--glow-primary);
//   }

//   .faq-answer {
//     overflow: hidden;
//     max-height: 0;
//     transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1);
//   }

//   .faq-answer.open {
//     max-height: 300px;
//   }

//   .faq-answer-inner {
//     padding-bottom: 1.1rem;
//     font-family: 'Inter', sans-serif;
//     font-size: 13.5px;
//     font-weight: 400;
//     color: #000;
//     line-height: 1.78;
//     padding: 0 40px 20px;
//   }

//   /* ── CONTACT STRIP ── */
//   .contact-strip {
//     margin-top: 1.75rem;
//     padding: 1rem 1.25rem;
//     background: var(--color-bg);
//     border: 1px solid var(--color-border);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 12px;
//     flex-shrink: 0;
//     border-radius: 0;
//   }

//   .contact-strip-info {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//   }

//   .contact-text strong {
//     font-family: 'Syne', sans-serif;
//     font-size: 13px;
//     font-weight: 700;
//     color: var(--color-heading);
//     display: block;
//   }

//   .contact-text span {
//     font-family: 'Inter', sans-serif;
//     font-size: 11.5px;
//     color: var(--color-text-muted);
//   }

//   .contact-btn {
//     font-family: 'Inter', sans-serif;
//     background: var(--color-primary);
//     color: var(--color-bg-dark-alt);
//     border: 1px solid var(--color-primary);
//     padding: 10px 22px;
//     border-radius: 0;
//     font-size: 12.5px;
//     font-weight: 500;
//     cursor: pointer;
//     transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
//     white-space: nowrap;
//     flex-shrink: 0;
//     box-shadow: var(--glow-primary);
//   }

//   .contact-btn:hover {
//     background: var(--color-primary-light);
//     transform: translateY(-2px);
//     box-shadow: var(--glow-primary-strong);
//   }

//   .contact-btn:active {
//     transform: translateY(0);
//   }

//   /* ── RESPONSIVE ── */
//   @media (max-width: 1024px) {
//     .faq-card {
//       grid-template-columns: 260px 1fr;
//       padding: 60px 40px 80px;
//     }
//   }

//   @media (max-width: 768px) {
//     .faq-page {
//       padding: 2rem 1rem;
//       align-items: flex-start;
//     }

//     .faq-card {
//       grid-template-columns: 1fr;
//       padding: 40px 24px 56px;
//     }

//     .faq-left {
//       padding: 2rem 1.75rem;
//     }

//     .left-heading {
//       font-size: 1.75rem;
//     }

//     .left-desc {
//       margin-bottom: 1.25rem;
//     }

//     .left-tagline {
//       margin-bottom: 1.25rem;
//     }

//     .left-stats {
//       flex-direction: row;
//       flex-wrap: wrap;
//       gap: 1rem;
//     }

//     .faq-right {
//       padding: 1.75rem 1.5rem 1.5rem;
//     }

//     .faq-answer-inner {
//       padding: 0 28px 16px;
//     }

//     .contact-strip {
//       flex-direction: column;
//       align-items: flex-start;
//       gap: 14px;
//     }

//     .contact-btn {
//       width: 100%;
//       text-align: center;
//     }
//   }

//   @media (max-width: 480px) {
//     .faq-page {
//       padding: 1.25rem 0.75rem;
//     }

//     .faq-card {
//       padding: 28px 16px 40px;
//     }

//     .faq-left {
//       padding: 1.75rem 1.25rem;
//     }

//     .left-heading {
//       font-size: 1.5rem;
//     }

//     .left-stats {
//       flex-direction: column;
//       gap: 0.85rem;
//     }

//     .faq-right {
//       padding: 1.5rem 1rem 1.25rem;
//     }

//     .faq-right-header {
//       flex-direction: column;
//       align-items: flex-start;
//       gap: 10px;
//     }

//     .faq-search {
//       width: 100%;
//     }

//     .faq-answer-inner {
//       padding: 0 16px 14px;
//     }

//     .faq-q-text {
//       font-size: 13px;
//     }

//     .contact-strip {
//       padding: 0.875rem 1rem;
//     }

//     .contact-btn {
//       padding: 10px 16px;
//       font-size: 12px;
//     }
//   }
// `;

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [search, setSearch] = useState("");

//   const filtered = faqs.filter((f) =>
//     f.q.toLowerCase().includes(search.toLowerCase()) ||
//     f.a.toLowerCase().includes(search.toLowerCase())
//   );

//   const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: styles }} />
//       <div className="faq-page">
//         <div className="faq-card">

//           {/* ── LEFT PANEL ── */}
//           <div className="faq-left">
//             <div>
//               <div className="left-badge">
//                 <span className="left-dot" />
//                 Faqs
//               </div>
//               <h1 className="left-heading">
//                 Got <span>questions?</span><br />We have answers.
//               </h1>
//               <p className="left-desc">
//                 Everything you need to know about our product and services.
//                 Browse the most common questions below.
//               </p>
//               <p className="left-tagline">
//                 Bringing Your Business To Light
//               </p>
//             </div>
//             <div className="left-stats">
//               <div className="stat-row">
//                 <div>
//                   <span className="stat-label">7 Essential Topics</span>
//                   <span className="stat-sub">Curated for you</span>
//                 </div>
//               </div>
//               <div className="stat-row">
//                 <div>
//                   <span className="stat-label">24/7 Availability</span>
//                   <span className="stat-sub">Always here for you</span>
//                 </div>
//               </div>
//               <div className="stat-row">
//                 <div>
//                   <span className="stat-label">Verified by Experts</span>
//                   <span className="stat-sub">Reviewed monthly</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT PANEL ── */}
//           <div className="faq-right">
//             <div className="faq-list">
//               {filtered.length === 0 && (
//                 <p style={{ fontSize: 13, color: "var(--color-text-muted)", padding: "1rem 0", fontFamily: "'Inter', sans-serif" }}>
//                   No results found for "{search}".
//                 </p>
//               )}
//               {filtered.map((item, i) => {
//                 const isOpen = openIndex === i;
//                 return (
//                   <div className="faq-item" key={i}>
//                     <button
//                       className="faq-question"
//                       onClick={() => toggle(i)}
//                       aria-expanded={isOpen}
//                     >
//                       <div className="faq-q-inner">
//                         <span className="faq-num">
//                           {String(i + 1).padStart(2, "0")}
//                         </span>
//                         <span className="faq-q-text">{item.q}</span>
//                       </div>
//                       <span className={`faq-toggle${isOpen ? " open" : ""}`}>
//                         +
//                       </span>
//                     </button>
//                     <div className={`faq-answer${isOpen ? " open" : ""}`}>
//                       <div className="faq-answer-inner">{item.a}</div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="contact-strip">
//               <div className="contact-strip-info">
//                 <div className="contact-text">
//                   <strong>Still have questions?</strong>
//                   <span>Our support team is ready to help.</span>
//                 </div>
//               </div>
//               <Link to="/contact" className="contact-btn">Contact us →</Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { Link } from "@/lib/link";

const faqs = [
  {
    q: "What services do you provide?",
    a: "We offer complete digital solutions including website design, SEO, social media marketing, Google Ads, branding, content creation, and business automation services.",
    category: "General",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most websites are completed within 1–4 weeks depending on the size, features, and project requirements.",
    category: "Web Dev",
  },
  {
    q: "Do you provide SEO with website development?",
    a: "Yes, all our websites are built with SEO best practices to help improve visibility and performance on search engines.",
    category: "Web Dev",
  },
  {
    q: "Can you manage our social media accounts?",
    a: "Absolutely. We create content, manage posting schedules, run ad campaigns, and help grow your online presence across all major platforms.",
    category: "Marketing",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with businesses globally including clients from the UAE, UK, USA, Canada, and other international markets.",
    category: "General",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, e-commerce brands, real estate companies, automotive businesses, restaurants, agencies, and many other industries.",
    category: "General",
  },
  {
    q: "Do you offer ongoing support after project completion?",
    a: "Yes, we provide maintenance, updates, technical support, and marketing assistance after launch.",
    category: "Support",
  },
];

const CATEGORIES = ["All", "General", "Web Dev", "Marketing", "Support"];

const styles = `

  * {
    box-sizing: border-box;
  }

  .fq-page {
    position: relative;
    background: var(--color-bg);
    padding: 120px 64px 100px;
    overflow: hidden;
  }

  .fq-glow-a,
  .fq-glow-b {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(10px);
    z-index: 0;
  }

  .fq-glow-a {
    top: -140px;
    left: -100px;
    width: 460px;
    height: 460px;
    background: radial-gradient(circle, rgba(124, 255, 0, 0.12) 0%, transparent 70%);
  }

  .fq-glow-b {
    bottom: -160px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0, 245, 255, 0.11) 0%, transparent 70%);
  }

  .fq-inner {
    position: relative;
    z-index: 1;
    max-width: 820px;
    margin: 0 auto;
  }

  /* ── HEADER ── */
  .fq-header {
    text-align: center;
    margin-bottom: 44px;
  }

  .fq-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 18px;
    border: 1px solid rgba(124, 255, 0, 0.35);
    border-radius: 50px;
    background: rgba(124, 255, 0, 0.07);
    color: var(--color-primary);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  .fq-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-primary);
    box-shadow: 0 0 8px rgba(124, 255, 0, 0.9);
    animation: fq-pulse 2s ease-in-out infinite;
  }

  @keyframes fq-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.35; transform: scale(0.75); }
  }

  .fq-title {
    font-size: clamp(32px, 4.6vw, 50px);
    font-weight: 800;
    color: var(--color-heading);
    letter-spacing: -1.5px;
    line-height: 1.08;
    margin: 0 0 14px;
  }

  .fq-title span {
    color: var(--color-primary);
    text-shadow: var(--glow-primary);
  }

  .fq-subtitle {
    font-size: 15px;
    color: var(--color-text-muted);
    line-height: 1.7;
    max-width: 480px;
    margin: 0 auto;
  }

  /* ── CONTROLS ── */
  .fq-controls {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }

  .fq-search-wrap {
    position: relative;
  }

  .fq-search {
    width: 100%;
    padding: 14px 20px;
    border-radius: 14px;
    border: 1px solid var(--color-border-white-alpha);
    background: rgba(255, 255, 255, 0.03);
    color: var(--color-text);
    font-size: 14px;
    outline: none;
    transition: border-color 0.25s ease, background 0.25s ease;
  }

  .fq-search:focus {
    border-color: var(--color-primary);
    background: rgba(124, 255, 0, 0.05);
  }

  .fq-search::placeholder {
    color: var(--color-text-muted);
  }

  .fq-cats {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .fq-cat {
    padding: 8px 18px;
    border-radius: 40px;
    border: 1px solid var(--color-border-white-alpha);
    background: rgba(255, 255, 255, 0.03);
    color: var(--color-text);
    font-size: 12.5px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .fq-cat:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .fq-cat--active {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: rgba(124, 255, 0, 0.1);
  }

  /* ── LIST ── */
  .fq-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 40px;
  }

  .fq-empty {
    text-align: center;
    padding: 40px 0;
    color: var(--color-text-muted);
    font-size: 14px;
  }

  .fq-item {
    position: relative;
    border: 1px solid var(--color-border-white-alpha);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.02);
    overflow: hidden;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .fq-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--color-primary);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  .fq-item--open {
    border-color: rgba(124, 255, 0, 0.35);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
  }

  .fq-item--open::before {
    transform: scaleY(1);
  }

  .fq-question {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 24px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    font-family: inherit;
  }

  .fq-q-left {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    flex: 1;
  }

  .fq-num {
    font-size: 22px;
    font-weight: 800;
    color: var(--color-heading);
    opacity: 0.14;
    line-height: 1.3;
    flex-shrink: 0;
    letter-spacing: -0.5px;
  }

  .fq-q-text {
    font-size: 15px;
    font-weight: 600;
    color: var(--color-heading);
    line-height: 1.5;
    transition: color 0.2s ease;
  }

  .fq-question:hover .fq-q-text {
    color: var(--color-primary);
  }

  .fq-toggle {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
    transition: transform 0.3s ease, background 0.25s ease, color 0.25s ease;
  }

  .fq-item--open .fq-toggle {
    background: var(--color-primary);
    color: #000;
    transform: rotate(45deg);
    box-shadow: var(--glow-primary);
  }

  .fq-answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fq-item--open .fq-answer {
    max-height: 280px;
  }

  .fq-answer-inner {
    padding: 0 24px 22px 62px;
    font-size: 14px;
    color: var(--color-text-muted);
    line-height: 1.75;
  }

  /* ── CONTACT STRIP ── */
  .fq-contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 22px 28px;
    border: 1px solid var(--color-border-white-alpha);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.02);
  }

  .fq-contact-text strong {
    display: block;
    font-size: 15px;
    font-weight: 700;
    color: var(--color-heading);
    margin-bottom: 2px;
  }

  .fq-contact-text span {
    font-size: 12.5px;
    color: var(--color-text-muted);
  }

  .fq-contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 26px;
    border-radius: 50px;
    background: var(--color-primary);
    color: #000;
    font-weight: 700;
    font-size: 13.5px;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .fq-contact-btn:hover {
    background: var(--color-primary-light);
    box-shadow: var(--glow-primary-strong);
    transform: translateY(-2px);
    gap: 12px;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .fq-page {
      padding: 100px 40px 80px;
    }
  }

  @media (max-width: 768px) {
    .fq-page {
      padding: 80px 24px 64px;
    }

    .fq-header {
      margin-bottom: 32px;
    }

    .fq-controls {
      margin-bottom: 28px;
    }

    .fq-question {
      padding: 18px 18px;
    }

    .fq-q-left {
      gap: 10px;
    }

    .fq-num {
      font-size: 18px;
    }

    .fq-q-text {
      font-size: 14px;
    }

    .fq-answer-inner {
      padding: 0 18px 18px 42px;
      font-size: 13.5px;
    }

    .fq-contact {
      flex-direction: column;
      align-items: flex-start;
      padding: 20px 22px;
    }

    .fq-contact-btn {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .fq-page {
      padding: 70px 16px 56px;
    }

    .fq-title {
      letter-spacing: -1px;
    }

    .fq-cats {
      gap: 8px;
    }

    .fq-cat {
      padding: 7px 14px;
      font-size: 12px;
    }

    .fq-toggle {
      width: 26px;
      height: 26px;
      font-size: 14px;
    }

    .fq-answer-inner {
      padding-left: 30px;
    }
  }
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = faqs.filter((f) => {
    const matchesCategory = category === "All" || f.category === category;
    const matchesSearch =
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="fq-page">
        <div className="fq-glow-a" />
        <div className="fq-glow-b" />

        <div className="fq-inner">
          {/* ── Header ── */}
          <div className="fq-header">
            <div className="fq-badge">
              <span className="fq-badge-dot" />
              FAQs
            </div>
            <h1 className="fq-title">
              Got <span>Questions?</span> We Have Answers.
            </h1>
            <p className="fq-subtitle">
              Everything you need to know about our services. Search or
              filter by topic to find what you're looking for.
            </p>
          </div>

          {/* ── Controls ── */}
          {/* <div className="fq-controls">
            <div className="fq-search-wrap">
              <input
                type="text"
                className="fq-search"
                placeholder="Search a question..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="fq-cats">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`fq-cat${category === cat ? " fq-cat--active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div> */}

          {/* ── List ── */}
          <div className="fq-list">
            {filtered.length === 0 && (
              <p className="fq-empty">No results found for "{search}".</p>
            )}
            {filtered.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  className={`fq-item${isOpen ? " fq-item--open" : ""}`}
                  key={item.q}
                >
                  <button
                    className="fq-question"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <div className="fq-q-left">
                      <span className="fq-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="fq-q-text">{item.q}</span>
                    </div>
                    <span className="fq-toggle">+</span>
                  </button>
                  <div className="fq-answer">
                    <div className="fq-answer-inner">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Contact strip ── */}
          <div className="fq-contact">
            <div className="fq-contact-text">
              <strong>Still have questions?</strong>
              <span>Our support team is ready to help.</span>
            </div>
            <Link to="/contact" className="fq-contact-btn">
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}