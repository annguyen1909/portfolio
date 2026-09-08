"use client";

import { motion } from "framer-motion";
import { clientDeliverables } from "../data/site";

const ClientValue = () => {
  return (
    <section id="value" className="section-padding editorial-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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

        <div className="process-list">
          {clientDeliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="process-row"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
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
