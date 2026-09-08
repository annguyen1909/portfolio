'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#projects' },
  { name: 'Profile', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resolveHref = (href: string) =>
    href.startsWith('#') && pathname !== '/' ? `/${href}` : href;

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="section-container flex items-center justify-between">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="site-logo"
        >
          <span className="site-logo-mark">A/</span>
          <span>AN NGUYEN</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={resolveHref(item.href)}
              className="nav-link"
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
          <Link href={resolveHref('#contact')} className="nav-contact">
            START A PROJECT <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          className="md:hidden text-[var(--text-strong)] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mobile-menu md:hidden"
          >
            <nav className="section-container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={resolveHref(item.href)}
                className="nav-link border-b border-[var(--border)] py-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href={resolveHref('#contact')} className="nav-contact mt-4 justify-center" onClick={() => setIsMenuOpen(false)}>
                START A PROJECT <ArrowUpRight size={14} />
              </Link>
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </header>

    </>
  );
};

export default Header;
