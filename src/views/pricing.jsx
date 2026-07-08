// "use client";

// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "../components/navbar";
// import Footer from "../components/Footer";
// import { Link } from "@/lib/link";
// import "../css/PagesCss/Pricing.css";

// // ── SVG Icon Components ──
// const iconProps = {
//   width: 22,
//   height: 22,
//   viewBox: "0 0 24 24",
//   fill: "none",
//   stroke: "currentColor",
//   strokeWidth: 2,
//   strokeLinecap: "round",
//   strokeLinejoin: "round",
//   "aria-hidden": true,
// };

// const CheckIcon = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//     <path
//       d="M20 6 9 17l-5-5"
//       stroke="currentColor"
//       strokeWidth="2.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const XIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//     <path
//       d="M18 6 6 18M6 6l12 12"
//       stroke="currentColor"
//       strokeWidth="2.2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const ArrowUpRightIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//     <path
//       d="M7 17L17 7M17 7H8M17 7V16"
//       stroke="currentColor"
//       strokeWidth="2.2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const ChevronDownIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//     <path
//       d="M6 9l6 6 6-6"
//       stroke="currentColor"
//       strokeWidth="2.2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const ShieldIcon = () => (
//   <svg {...iconProps}>
//     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
//   </svg>
// );

// const ZapIcon = () => (
//   <svg {...iconProps}>
//     <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//   </svg>
// );

// const HeadsetIcon = () => (
//   <svg {...iconProps}>
//     <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
//     <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3ZM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3Z" />
//   </svg>
// );

// // ── Data ──
// const HERO_STATS = [
//   { number: "3", label: "Simple Plans" },
//   { number: "0%", label: "Hidden Fees" },
//   { number: "24/7", label: "Support Access" },
// ];

// const PLANS = [
//   {
//     id: "starter",
//     name: "Starter",
//     tagline: "For new businesses getting online",
//     highlighted: false,
//     ctaLabel: "Contact for Pricing",
//     features: [
//       { label: "5-page website design", included: true },
//       { label: "Basic on-page SEO setup", included: true },
//       { label: "Mobile-responsive build", included: true },
//       { label: "1 round of revisions", included: true },
//       { label: "Email support", included: true },
//       { label: "Marketing automation", included: false },
//       { label: "Dedicated account manager", included: false },
//     ],
//   },
//   {
//     id: "growth",
//     name: "Growth",
//     tagline: "For businesses ready to scale",
//     highlighted: true,
//     ctaLabel: "Contact for Pricing",
//     features: [
//       { label: "Up to 12-page website", included: true },
//       { label: "Advanced SEO & analytics", included: true },
//       { label: "Social media management", included: true },
//       { label: "3 rounds of revisions", included: true },
//       { label: "Priority email & chat support", included: true },
//       { label: "Basic marketing automation", included: true },
//       { label: "Dedicated account manager", included: false },
//     ],
//   },
//   {
//     id: "enterprise",
//     name: "Enterprise",
//     tagline: "For teams with custom needs",
//     highlighted: false,
//     ctaLabel: "Contact for Pricing",
//     features: [
//       { label: "Fully custom web platform", included: true },
//       { label: "Full SEO & content strategy", included: true },
//       { label: "Multi-channel marketing", included: true },
//       { label: "Unlimited revisions", included: true },
//       { label: "24/7 priority support", included: true },
//       { label: "Advanced marketing automation", included: true },
//       { label: "Dedicated account manager", included: true },
//     ],
//   },
// ];

// const TRUST_POINTS = [
//   { icon: ShieldIcon, label: "No long-term lock-in" },
//   { icon: ZapIcon, label: "Cancel or switch plans anytime" },
//   { icon: HeadsetIcon, label: "Real humans on support" },
// ];

// const FAQS = [
//   {
//     q: "Can I switch plans later?",
//     a: "Yes. You can upgrade, downgrade, or switch plans at any time — changes take effect from your next billing cycle.",
//   },
//   {
//     q: "Is there a setup fee?",
//     a: "No hidden setup fees on any plan. The price you see is the price you pay, both monthly and yearly.",
//   },
//   {
//     q: "Do you offer custom pricing?",
//     a: "Yes. If your project doesn't fit neatly into Starter or Growth, our Enterprise plan is fully scoped around your specific requirements.",
//   },
//   {
//     q: "What payment methods do you accept?",
//     a: "We accept major credit/debit cards and bank transfers for both local and international clients.",
//   },
//   {
//     q: "What happens if I cancel?",
//     a: "You can cancel anytime with no penalty. You'll retain access through the end of your current billing period.",
//   },
// ];

// // ── Sub-components ──
// function PlanCard({ plan }) {
//   return (
//     <div
//       className={`pr-plan-card${plan.highlighted ? " pr-plan-card--highlight" : ""}`}
//       data-aos="fade-up"
//       data-aos-delay={plan.id === "growth" ? "100" : "0"}
//     >
//       {plan.highlighted && <span className="pr-plan-badge">Most Popular</span>}

//       <h3 className="pr-plan-name">{plan.name}</h3>
//       <p className="pr-plan-tagline">{plan.tagline}</p>

//       <div className="pr-plan-price-row">
//         <span className="pr-plan-price pr-plan-price--custom">Contact for Pricing</span>
//       </div>

//       <Link
//         to="/contact"
//         className={`pr-plan-btn${plan.highlighted ? " pr-plan-btn--primary" : ""}`}
//       >
//         {plan.ctaLabel}
//         <ArrowUpRightIcon />
//       </Link>

//       <ul className="pr-plan-features">
//         {plan.features.map((f) => (
//           <li
//             key={f.label}
//             className={`pr-plan-feature${f.included ? "" : " pr-plan-feature--off"}`}
//           >
//             <span className="pr-plan-feature-icon">
//               {f.included ? <CheckIcon /> : <XIcon />}
//             </span>
//             {f.label}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function FAQItem({ item, isOpen, onToggle }) {
//   return (
//     <div className={`pr-faq-item${isOpen ? " pr-faq-item--open" : ""}`}>
//       <button type="button" className="pr-faq-question" onClick={onToggle} aria-expanded={isOpen}>
//         <span>{item.q}</span>
//         <span className="pr-faq-chevron">
//           <ChevronDownIcon />
//         </span>
//       </button>
//       <div className="pr-faq-answer">
//         <p>{item.a}</p>
//       </div>
//     </div>
//   );
// }

// // ── Main Component ──
// export default function PricingPage() {
//   const [openFAQ, setOpenFAQ] = useState(0);

//   useEffect(() => {
//     AOS.init({ once: false, duration: 700, offset: 80 });
//     const t = setTimeout(() => AOS.refresh(), 100);
//     return () => clearTimeout(t);
//   }, []);

//   const toggleFAQ = (i) => setOpenFAQ((prev) => (prev === i ? -1 : i));

//   return (
//     <div className="pr-page">
//       <Navbar />

//       {/* ── Hero ── */}
//       <section className="pr-hero">
//         <div className="pr-hero-overlay" />
//         <div className="pr-hero-glow-green" />
//         <div className="pr-hero-glow-cyan" />
//         <div className="pr-hero-glow-pink" />

//         <div className="pr-hero-inner">
//           <p className="pr-hero-breadcrumb">
//             <Link to="/">Home</Link> <span>/</span> Pricing
//           </p>

//           <div className="pr-hero-chip">
//             <span className="pr-hero-chip-dot" />
//             Simple, Transparent Pricing
//           </div>

//           <h1 className="pr-hero-title">
//             Plans Built To <span className="pr-gradient-text">Fit Your Growth</span>
//           </h1>

//           <p className="pr-hero-subtitle">
//             No confusing tiers, no hidden fees. Pick a plan that matches
//             where you are today — upgrade whenever you're ready for more.
//           </p>

//           <div className="pr-hero-stats">
//             {HERO_STATS.map((s) => (
//               <div key={s.label} className="pr-hero-stat">
//                 <span className="pr-hero-stat-num">{s.number}</span>
//                 <span className="pr-hero-stat-label">{s.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Pricing Cards ── */}
//       <section className="pr-section">
//         <div className="pr-plans-grid">
//           {PLANS.map((plan) => (
//             <PlanCard key={plan.id} plan={plan} />
//           ))}
//         </div>

//         <div className="pr-trust-row" data-aos="fade-up">
//           {TRUST_POINTS.map((t) => {
//             const Icon = t.icon;
//             return (
//               <div key={t.label} className="pr-trust-item">
//                 <span className="pr-trust-icon">
//                   <Icon />
//                 </span>
//                 {t.label}
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* ── FAQ ── */}
//       <section className="pr-faq-section" data-aos="fade-up">
//         <div className="pr-section-header" data-aos="fade-up">
//           <span className="pr-eyebrow">Good to Know</span>
//           <h2 className="pr-section-title">
//             Pricing <span>Questions</span>
//           </h2>
//         </div>

//         <div className="pr-faq-list">
//           {FAQS.map((item, i) => (
//             <FAQItem key={item.q} item={item} isOpen={openFAQ === i} onToggle={() => toggleFAQ(i)} />
//           ))}
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="pr-cta" data-aos="fade-up">
//         <div className="pr-cta-glow" />
//         <div className="pr-cta-inner">
//           <span className="pr-eyebrow">Still Deciding?</span>
//           <h2>Not Sure Which Plan Fits?</h2>
//           <p>
//             Tell us about your project and budget — we'll recommend the
//             right plan, or build a custom one around your needs.
//           </p>
//           <Link to="/contact" className="pr-cta-btn">
//             Talk to Us
//             <ArrowUpRightIcon />
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }