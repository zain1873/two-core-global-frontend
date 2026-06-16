"use client";

import React from "react";
import { Search, Lightbulb, PenTool, LayoutGrid, CheckCircle, Package } from "lucide-react";
import "../css/BrandProcess.css";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "Brand workshops, competitor audits, audience research, and goal alignment.",
    Icon: Search,
  },
  {
    number: 2,
    title: "Strategy",
    description:
      "Positioning statement, brand personality, tone of voice, and core messaging.",
    Icon: Lightbulb,
  },
  {
    number: 3,
    title: "Concept",
    description:
      "Moodboards, initial logo concepts, and visual direction presented for review.",
    Icon: PenTool,
  },
  {
    number: 4,
    title: "Design",
    description:
      "Full visual identity — logo, palette, typography, icons, and brand elements.",
    Icon: LayoutGrid,
  },
  {
    number: 5,
    title: "Refine",
    description:
      "Feedback rounds, refinements, and final polish across all brand assets.",
    Icon: CheckCircle,
  },
  {
    number: 6,
    title: "Deliver",
    description:
      "Brand guidelines document, all source files, and ready-to-use asset exports.",
    Icon: Package,
  },
];

export default function BrandProcess() {
  return (
    <section className="brand-process">
      <div className="brand-process-header">
        <span className="brand-process-badge">HOW WE WORK</span>
        <h2 className="brand-process-title">
          Our{" "}
          <span className="brand-process-title-accent">Branding Process</span>
        </h2>
        <p className="brand-process-subtitle">
          A proven six-phase framework that transforms your vision into a
          <br />
          cohesive, memorable brand identity — every single time.
        </p>
      </div>

      <div className="brand-process-timeline">
        <div className="brand-process-line" />
        <div className="brand-process-steps">
          {steps.map(({ number, title, description, Icon }) => (
            <div key={number} className="brand-process-step">
              <div className="brand-process-circle-wrap">
                <div className="brand-process-circle">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <span className="brand-process-number">{number}</span>
              </div>
              <h3 className="brand-process-step-title">{title}</h3>
              <p className="brand-process-step-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
