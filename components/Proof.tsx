"use client";

import { motion } from "framer-motion";
import { siteMetrics } from "../data/site";

const Proof = () => {
  return (
    <section id="proof" className="section-padding editorial-section editorial-section--soft">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading section-heading--row"
        >
          <div>
            <p className="section-label">03 / Track record</p>
            <h2 className="section-title">WORK IN<br /><span>NUMBERS.</span></h2>
          </div>
          <p className="section-subtitle">
            A factual snapshot of production work across platforms, operations, and physical venues.
          </p>
        </motion.div>

        <div className="metric-grid">
          {siteMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="metric-item"
            >
              <div>
                <p className="stat-value">{metric.value}</p>
                {metric.estimated && (
                  <span className="metric-estimate">EST.</span>
                )}
              </div>
              <h3>{metric.label}</h3>
              <p>{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
