'use client';

import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#projects' },
  { name: 'Profile', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;
    const sections = navItems
      .map(item => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));
    const visibleSections = new Set<string>();
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visibleSections.add(entry.target.id);
          else visibleSections.delete(entry.target.id);
        });
        const current = [...navItems].reverse().find(item => visibleSections.has(item.href.slice(1)));
        if (current) setActiveSection(current.href.slice(1));
      },
      { rootMargin: '-120px 0px -320px 0px' }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

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
          <BrandLogo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={resolveHref(item.href)}
              className={`nav-link ${pathname === '/' && activeSection === item.href.slice(1) ? 'nav-link--active' : ''}`}
              aria-current={pathname === '/' && activeSection === item.href.slice(1) ? 'location' : undefined}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
          <Link href={resolveHref('#contact')} className="nav-contact">
            START A PROJECT <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          className="lg:hidden text-[var(--text-strong)] p-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-site-menu"
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
            className="mobile-menu lg:hidden"
            id="mobile-site-menu"
          >
            <nav className="section-container flex flex-col gap-1 py-4">
              {navItems.map((item, index) => (
                <motion.div key={item.name} initial={reduceMotion ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.22, delay: index * 0.04 }}>
                  <Link
                    href={resolveHref(item.href)}
                    className={`nav-link block border-b border-[var(--border)] py-4 ${pathname === '/' && activeSection === item.href.slice(1) ? 'nav-link--active' : ''}`}
                    aria-current={pathname === '/' && activeSection === item.href.slice(1) ? 'location' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link href={resolveHref('#contact')} className="nav-contact mt-4 justify-center" onClick={() => setIsMenuOpen(false)}>
                START A PROJECT <ArrowUpRight size={14} />
              </Link>
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
        <motion.div className="site-progress" style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }} aria-hidden="true" />
      </header>

    </>
  );
};

export default Header;
