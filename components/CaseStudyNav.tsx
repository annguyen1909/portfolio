'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'gallery', label: 'Gallery' },
];

export default function CaseStudyNav({ hasGallery }: { hasGallery: boolean }) {
  const [activeSection, setActiveSection] = useState('overview');
  const navRef = useRef<HTMLDivElement>(null);
  const items = useMemo(() => hasGallery ? sections : sections.filter(section => section.id !== 'gallery'), [hasGallery]);

  useEffect(() => {
    const visibleSections = new Set<string>();
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visibleSections.add(entry.target.id);
          else visibleSections.delete(entry.target.id);
        });
        const current = [...items].reverse().find(item => visibleSections.has(item.id));
        if (current) setActiveSection(current.id);
      },
      { rootMargin: '-120px 0px -260px 0px' }
    );
    items.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>(`a[href="#${activeSection}"]`);
    if (!nav || !link) return;
    const navBounds = nav.getBoundingClientRect();
    const linkBounds = link.getBoundingClientRect();
    nav.scrollTo({
      left: nav.scrollLeft + linkBounds.left - navBounds.left + linkBounds.width / 2 - navBounds.width / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }, [activeSection]);

  return (
    <nav className="case-nav" aria-label="Case study sections">
      <div className="section-container case-nav-inner" ref={navRef}>
        {items.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`case-nav-link ${activeSection === item.id ? 'case-nav-link--active' : ''}`}
            aria-current={activeSection === item.id ? 'location' : undefined}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
