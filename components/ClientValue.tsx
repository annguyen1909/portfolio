"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { clientDeliverables } from "../data/site";

const ClientValue = () => {
  const list = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeRow, setActiveRow] = useState(0);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 55%", "end 55%"] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: .001 });

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (reduceMotion || !list.current) return;
    const readingLine = window.innerHeight * .55;
    let current = 0;
    list.current.querySelectorAll<HTMLElement>(".process-index").forEach((node, index) => {
      const bounds = node.getBoundingClientRect();
      if (bounds.top + bounds.height / 2 <= readingLine) current = index;
    });
    setActiveRow(previous => previous === current ? previous : current);
  });

  return (
    <section id="value" className="section-padding editorial-section">
      <div className="section-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading section-heading--row"
        >
          <div>
            <p className="section-label">04 / Working together</p>
            <h2 className="section-title">HOW I<br /><span>WORK.</span></h2>
          </div>
          <p className="section-subtitle">
            Direct collaboration with one engineer who owns the work from
            architecture through production.
          </p>
        </motion.div>

        <div className="process-list" ref={list}>
          <div className="process-track" aria-hidden="true">
            <motion.span style={{ scaleY: reduceMotion ? 0 : lineProgress }} />
          </div>
          {clientDeliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className={`process-row${!reduceMotion && index === activeRow ? " process-row--active" : ""}${!reduceMotion && index < activeRow ? " process-row--read" : ""}`}
              >
                <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientValue;
