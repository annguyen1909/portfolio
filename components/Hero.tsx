"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, Calendar } from "lucide-react";
import { BOOK_CALL_URL, portfolioStats } from "../data/site";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);
  const smoothX = useSpring(imageX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(imageY, { stiffness: 90, damping: 22 });

  const scrollToCaseStudies = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    imageX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * -24);
    imageY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -18);
  };

  return (
    <section
      id="home"
      aria-label="Hero"
      className="hero-editorial"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { imageX.set(0); imageY.set(0); }}
    >
      <div className="hero-media" aria-hidden="true">
        <motion.figure style={{ x: smoothX, y: smoothY }}><img src="/hero-system-architecture.jpg" alt="" /></motion.figure>
      </div>
      <div className="hero-scrim" />
      <div className="hero-tech-grid" aria-hidden="true"><span /><span /><span /></div>

      <div className="section-container hero-inner">
        <div className="hero-copy">
          <div>
            <p className="hero-kicker"><span /> FULL-STACK ENGINEER · HO CHI MINH CITY</p>

            <h1 className="hero-title">
              {["DIGITAL", "SYSTEMS", "THAT SHIP."].map((line, index) => (
                <span className="hero-title-line" key={line}>
                  <motion.span
                    className={index === 2 ? "hero-title-accent" : undefined}
                    initial={reduceMotion ? false : { opacity: 0, y: "105%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.52, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p className="hero-lead" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              I design and build production web systems — from eVisa platforms
              and CRM tools to interactive digital experiences.
            </motion.p>

            <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.42 }}>
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
            </motion.div>

            <motion.div className="hero-stats" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.52 }}>
              {portfolioStats.map((stat) => (
                <div key={stat.label}>
                  <p>{stat.value}</p>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.button
          type="button"
          onClick={scrollToCaseStudies}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hero-scroll"
          aria-label="Scroll to case studies"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
