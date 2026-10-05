"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import TechnologyLogo from "./TechnologyLogo";

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Prisma", "Three.js", "Vite.js", "Python", "C++",
];

const details = [
  ["BASED IN", "Ho Chi Minh City, Vietnam"],
  ["EDUCATION", "B.IT, RMIT University — 2025"],
  ["FOCUS", "Full-stack systems, operations, interactive web"],
  ["AVAILABILITY", "Freelance and project-based"],
];

export default function About() {
  return (
    <section id="about" className="section-padding editorial-section editorial-section--soft">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading section-heading--row"
        >
          <div>
            <p className="section-label">05 / Profile</p>
            <h2 className="section-title">AN<br /><span>NGUYEN.</span></h2>
          </div>
          <p className="section-subtitle">
            A full-stack engineer who stays close to the product, from the first
            workflow sketch to the production release.
          </p>
        </motion.div>

        <div className="profile-layout">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="profile-portrait"
          >
            <Image
              src="/profile/an-nguyen.jpg"
              alt="An Nguyen smiling while working at a laptop"
              width={682}
              height={1024}
              sizes="(max-width: 900px) 352px, (max-width: 1440px) 40vw, 480px"
            />
            <figcaption><span>AN NGUYEN</span><span>FULL-STACK ENGINEER</span></figcaption>
          </motion.figure>

          <div className="profile-copy">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="profile-story"
            >
              <p>
                I build scalable web applications, service platforms, interactive 3D
                experiences, and AI-integrated tools with a focus on performance and
                clear architecture.
              </p>
              <p>
                My recent work spans eVisa platforms with payment and operational
                workflows, CRM and invoicing tools, lighting control software, and
                WebGL experiences. I work across interface, API, data, and deployment.
              </p>
              <p>
                I collaborate directly with clients and small teams, translating real
                business constraints into software that remains understandable after launch.
              </p>
              <div className="profile-actions">
                <a href="mailto:nguyentruongan0919@gmail.com" className="text-link">
                  <span>EMAIL ME</span><ArrowUpRight size={15} />
                </a>
                <a href="/AnNguyenResume.pdf" target="_blank" rel="noopener noreferrer" className="text-link text-link--muted">
                  <span>DOWNLOAD RESUME</span><Download size={15} />
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="profile-facts"
            >
              {details.map(([label, value]) => (
                <div key={label}><span>{label}</span><p>{value}</p></div>
              ))}
            </motion.aside>
          </div>
        </div>

        <div className="profile-stack" aria-labelledby="core-stack-title">
          <h3 id="core-stack-title" className="section-label">CORE STACK</h3>
          <ul className="technology-list">
            {technologies.map((technology) => (
              <li key={technology} className="technology-item">
                <TechnologyLogo name={technology} />
                <span>{technology}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
