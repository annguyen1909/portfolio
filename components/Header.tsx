'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'All Projects', href: '/projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[100] border-none ${
        scrolled ? 'bg-[var(--surface)] border-[var(--border)] py-3' : 'bg-black border-[var(--border)] py-6'
      }`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-heading font-semibold text-[var(--text-strong)] tracking-wide"
        >
          An Nguyen
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => {
            const pathname = usePathname();
            const resolvedHref = item.href.startsWith('#') && pathname !== '/' ? `/${item.href}` : item.href;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={resolvedHref}
                  className="font-body text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--text-strong)]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 md:hidden z-[99] bg-[var(--surface)] border-b border-[var(--border)]"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => {
                const pathname = usePathname();
                const resolvedHref = item.href.startsWith('#') && pathname !== '/' ? `/${item.href}` : item.href;
                return (
                  <div key={item.name}>
                    <Link
                      href={resolvedHref}
                      className="font-body text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
