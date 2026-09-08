"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { BOOK_CALL_URL } from "../data/site";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[90] border-t border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl"
        >
          <div className="section-container flex items-center justify-between gap-4 py-3">
            <p className="hidden sm:block text-sm text-[var(--text-muted)]">
              Available for freelance projects — let&apos;s build something production-ready.
            </p>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={BOOK_CALL_URL}
                className="btn-primary flex-1 sm:flex-none text-sm !py-2"
              >
                <Calendar size={14} />
                Book a Call
              </a>
              <a
                href="#projects"
                className="btn-secondary flex-1 sm:flex-none text-sm !py-2"
              >
                Case Studies
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
