"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Calendar } from "lucide-react";
import { BOOK_CALL_URL, portfolioStats } from "../data/site";

const Hero = () => {
  const scrollToCaseStudies = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Hero"
      className="hero-editorial"
    >
      <div className="hero-media" aria-hidden="true">
        <figure><img src="/projects/visualennode/gallery-1.jpg" alt="" /></figure>
      </div>
      <div className="hero-scrim" />

      <div className="section-container hero-inner">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-kicker"><span /> FULL-STACK ENGINEER · HO CHI MINH CITY</p>

            <h1 className="hero-title">
              <span>DIGITAL</span>
              <span>SYSTEMS</span>
              <span className="hero-title-accent">THAT SHIP.</span>
            </h1>

            <p className="hero-lead">
              I design and build production web systems — from eVisa platforms
              and CRM tools to interactive digital experiences.
            </p>

            <div className="hero-actions">
              <a href={BOOK_CALL_URL} className="text-link">
                <span>START A PROJECT</span><Calendar size={16} />
              </a>
              <button
                type="button"
                onClick={scrollToCaseStudies}
                className="text-link text-link--muted"
              >
                <span>SEE SELECTED WORK</span><ArrowRight size={16} />
              </button>
            </div>

            <div className="hero-stats">
              {portfolioStats.map((stat) => (
                <div key={stat.label}>
                  <p>{stat.value}</p>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={scrollToCaseStudies}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hero-scroll"
          aria-label="Scroll to case studies"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
