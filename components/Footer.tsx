'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-semibold text-[var(--text-strong)]">An Nguyen</h3>
            <p className="font-body text-[var(--text-muted)] leading-relaxed">
              Full Stack Developer passionate about creating innovative web applications 
              and immersive digital experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold text-[var(--text-strong)]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-heading font-semibold text-[var(--text-strong)]">Get In Touch</h4>
            <div className="space-y-2 font-body text-[var(--text-muted)]">
              <p>nguyentruongan0919@gmail.com</p>
              <p>+84 905 941 752</p>
              <p>District 7, Ho Chi Minh City</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                className="font-body text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                GitHub
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                className="font-body text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[var(--border)] pt-8 mt-8 text-center"
        >
          <p className="font-body text-[var(--text-muted)]">
            © {new Date().getFullYear()} An Nguyen. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-12 right-12 px-4 py-2 rounded-none border border-[var(--border)] bg-[var(--surface)] text-[var(--text-strong)] transition-colors duration-200 z-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
