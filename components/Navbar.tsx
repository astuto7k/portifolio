import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Portfolio', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Services', href: '#skills', id: 'skills' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollFrameRef = useRef<number | null>(null);
  const scrollCleanupRef = useRef<(() => void) | null>(null);
  const navigationTargetRef = useRef<string | null>(null);

  const stopSectionScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = null;
    }
    scrollCleanupRef.current?.();
    scrollCleanupRef.current = null;
    navigationTargetRef.current = null;
    document.documentElement.classList.remove('is-section-scrolling');
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        if (navigationTargetRef.current) {
          setActiveSection(navigationTargetRef.current);
          return;
        }
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => stopSectionScroll(), [stopSectionScroll]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  const handleSectionNavigation = useCallback((event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    stopSectionScroll();
    setMenuOpen(false);
    if (menuOpen) document.body.style.overflow = '';

    const beginScroll = () => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const startY = window.scrollY;
      const targetY = sectionId === 'home'
        ? 0
        : target.getBoundingClientRect().top + startY;
      const distance = targetY - startY;
      const nextHash = `#${sectionId}`;

      document.documentElement.classList.add('is-section-scrolling');

      const finishNavigation = () => {
        scrollFrameRef.current = null;
        scrollCleanupRef.current?.();
        scrollCleanupRef.current = null;
        navigationTargetRef.current = null;
        document.documentElement.classList.remove('is-section-scrolling');
        setActiveSection(sectionId);
        if (window.location.hash !== nextHash) window.history.pushState(null, '', nextHash);
      };

      navigationTargetRef.current = sectionId;
      setActiveSection(sectionId);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(distance) < 2) {
        window.scrollTo(0, targetY);
        finishNavigation();
        return;
      }

      const duration = Math.min(1800, Math.max(1100, Math.abs(distance) * 0.25));
      const startedAt = performance.now();
      const cancelOnIntent = (inputEvent: Event) => {
        if (inputEvent instanceof KeyboardEvent) {
          const navigationKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '];
          if (!navigationKeys.includes(inputEvent.key)) return;
        }
        stopSectionScroll();
      };

      window.addEventListener('wheel', cancelOnIntent, { passive: true });
      window.addEventListener('touchstart', cancelOnIntent, { passive: true });
      window.addEventListener('keydown', cancelOnIntent);
      scrollCleanupRef.current = () => {
        window.removeEventListener('wheel', cancelOnIntent);
        window.removeEventListener('touchstart', cancelOnIntent);
        window.removeEventListener('keydown', cancelOnIntent);
      };

      const animate = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) scrollFrameRef.current = window.requestAnimationFrame(animate);
        else finishNavigation();
      };

      scrollFrameRef.current = window.requestAnimationFrame(animate);
    };

    if (menuOpen) scrollFrameRef.current = window.requestAnimationFrame(beginScroll);
    else beginScroll();
  }, [menuOpen, stopSectionScroll]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="brand-mark" onClick={(event) => handleSectionNavigation(event, 'home')} aria-label="Guga028 — Home">
          <span className="brand-mark__avatar">
            <img src="/images/guga-avatar.png" alt="" width="48" height="48" />
          </span>
          <span className="brand-mark__word">Guga<span>028</span></span>
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? 'is-active' : ''}
              aria-current={activeSection === link.id ? 'location' : undefined}
              onClick={(event) => handleSectionNavigation(event, link.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {link.name}
            </a>
          ))}
        </nav>

        <a
          className="navbar__cta"
          href="https://discord.com/users/168572769"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's talk
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!menuOpen}>
        <div className="mobile-menu__inner">
          <p className="eyebrow">Navigation</p>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a key={link.id} href={link.href} onClick={(event) => handleSectionNavigation(event, link.id)} tabIndex={menuOpen ? 0 : -1}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__footer">
            <p>Game producer · Marketer · Creator</p>
            <a
              href="https://discord.com/users/168572769"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuOpen ? 0 : -1}
            >
              Open to collaborations <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
