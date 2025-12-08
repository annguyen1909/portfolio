"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-black">
      {/* Animated background: subtle spotlight + noise */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(59,130,246,0.35), rgba(59,130,246,0.12) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-140px] right-[-60px] h-[420px] w-[420px] rounded-full blur-[72px] opacity-[0.18]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(14,165,233,0.35), rgba(14,165,233,0.12) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 pt-28 pb-20 md:pt-32 md:pb-28">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-md border border-[#4c4c4c] bg-[#1b1b1b] px-3 py-1 text-xs text-white"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-sm bg-[#4c4c4c]" />
          <span className="tracking-wide">Full Stack Developer</span>
        </motion.div>

        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-heading text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-white md:text-[3.2rem] lg:text-[3.6rem]"
            >
              Building sharp, reliable products with modern web tech
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-2xl font-body text-[15.5px] leading-relaxed tracking-[0.01em] text-[#cbd5e1]"
            >
              I build high-performance web experiences and modern full-stack systems.
Specializing in React, TypeScript, and Next.js, I focus on scalable architecture, strong fundamentals, and clean, intentional UI design. I care about speed, reliability, and crafting interfaces that feel effortless to use.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center rounded-md border border-[#4c4c4c] bg-[#1b1b1b] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-[#1b1b1b] hover:bg-[#1b1b1b]"
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-sm bg-[#4c4c4c] group-hover:shadow-[0_0_12px_0_rgba(59,130,246,0.6)]" />
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-[#4c4c4c] bg-[#1b1b1b] px-5 py-3 text-sm font-medium text-white hover:border-[#1b1b1b] transition-colors"
              >
                Contact
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="mt-10 flex items-center gap-3 text-[#94a3b8] hover:text-[#e2e8f0]"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#1b1b1b]">
                <ChevronDown className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-xs tracking-wide">Scroll down</span>
            </button>
          </div>

          {/* Right: Visual card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-md border border-[#4c4c4c] bg-gradient-to-b from-[#0b1220] to-[#1b1b1b] p-5"
            >
              <div className="rounded-md border border-[#4c4c4c] bg-[#1b1b1b] p-4">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-2 rounded-sm bg-[#4c4c4c]" />
                  <div className="h-2 w-2 rounded-sm bg-[#4c4c4c]" />
                  <div className="h-2 w-2 rounded-sm bg-[#4c4c4c]" />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-3 w-10/12 rounded-md bg-[#4c4c4c]" />
                  <div className="h-3 w-8/12 rounded-md bg-[#4c4c4c]" />
                  <div className="h-3 w-6/12 rounded-md bg-[#4c4c4c]" />
                </div>
              </div>
              <div className="absolute inset-x-4 -bottom-6 rounded-md border border-[#4c4c4c] bg-[#1b1b1b] p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-block h-6 w-6 rounded-md border border-[#4c4c4c] bg-[#1b1b1b]" />
                  <div className="space-y-1">
                    <div className="h-2.5 w-32 rounded-md bg-[#4c4c4c]" />
                    <div className="h-2 w-24 rounded-md bg-[#4c4c4c]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
