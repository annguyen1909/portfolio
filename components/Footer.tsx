'use client';

import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: 'Case Studies', href: '#projects' },
    { name: 'Results', href: '#proof' },
    { name: 'About', href: '#about' },
    { name: 'Start a Project', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background)]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-5 w-5 items-center justify-center rounded border border-[var(--border)]">
                <span className="h-1.5 w-1.5 rounded-sm bg-[var(--text-strong)]" />
              </span>
              <span className="text-sm font-medium text-[var(--text-strong)]">An Nguyen</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Full-stack engineer building production systems for clients worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-4">Connect</h4>
            <div className="space-y-2 text-sm text-[var(--text-muted)]">
              <p>nguyentruongan0919@gmail.com</p>
              <p>+84 905 941 752</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/annguyen1909" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nguyen-truong-an-1909nta/" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} An Nguyen. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with Next.js
          </p>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text-strong)] hover:border-[var(--border-hover)] hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
