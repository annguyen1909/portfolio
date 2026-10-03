"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, Calendar } from "lucide-react";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { BOOK_CALL_URL, portfolioStats } from "../data/site";
import type { ArchitectureInput } from "./HeroArchitecture";

const HeroArchitecture = dynamic(() => import("./HeroArchitecture"), { ssr: false });

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const hero = useRef<HTMLElement>(null);
  const architectureInput = useRef<ArchitectureInput>({ x: 0, y: 0, scroll: 0 });
  const [sceneEnabled, setSceneEnabled] = useState(false);
  const [sceneActive, setSceneActive] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const handleSceneReady = useCallback(() => setSceneReady(true), []);
  const handleSceneError = useCallback(() => { setSceneFailed(true); setSceneReady(false); }, []);
  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);
  const smoothX = useSpring(imageX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(imageY, { stiffness: 90, damping: 22 });

  useEffect(() => {
    const element = hero.current;
    if (!element) return;
    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    let inView = false;
    let frame = 0;
    const updateAvailability = () => {
      // Load on the first visible visit, then keep the canvas mounted but paused.
      setSceneEnabled(previous => media.matches && (previous || inView));
      if (!media.matches) setSceneReady(false);
      setSceneActive(media.matches && inView && !document.hidden);
    };
    const updateScroll = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      architectureInput.current.scroll = Math.min(1, Math.max(0, -bounds.top / bounds.height));
    };
    const handleScroll = () => {
      if (inView && !frame) frame = window.requestAnimationFrame(updateScroll);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateScroll();
      updateAvailability();
    });
    observer.observe(element);
    updateAvailability();
    media.addEventListener("change", updateAvailability);
    document.addEventListener("visibilitychange", updateAvailability);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      media.removeEventListener("change", updateAvailability);
      document.removeEventListener("visibilitychange", updateAvailability);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const showScene = sceneEnabled && !sceneFailed;
  const showReadyScene = showScene && sceneReady;

  const scrollToCaseStudies = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    architectureInput.current.x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    architectureInput.current.y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    imageX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * -24);
    imageY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -18);
  };

  return (
    <section
      ref={hero}
      id="home"
      aria-label="Hero"
      className={`hero-editorial${showReadyScene ? " hero-editorial--3d" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { imageX.set(0); imageY.set(0); architectureInput.current.x = 0; architectureInput.current.y = 0; }}
    >
      <div className="hero-media" aria-hidden="true">
        <motion.figure style={{ x: smoothX, y: smoothY }}><img src="/hero-system-architecture.jpg" alt="" /></motion.figure>
      </div>
      <div className="hero-scrim" />
      <div className="hero-tech-grid" aria-hidden="true"><span /><span /><span /></div>
      {showScene && (
        <div className={`hero-architecture${showReadyScene ? " hero-architecture--ready" : ""}`} aria-hidden="true">
          <HeroArchitecture input={architectureInput} active={sceneActive} onReady={handleSceneReady} onError={handleSceneError} />
          <div className="hero-architecture-caption"><span>SYSTEM ARCHITECTURE</span><span>INTERFACE / SERVICES / DATA</span></div>
        </div>
      )}

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
