import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CreatorFaq, CreatorProfile } from './components/CreatorProfile';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Stats } from './components/Stats';
import { Media } from './components/Media';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AmbientLayer, ScrollProgress } from './components/Ambience';

const App: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.setAttribute('data-visible', 'true'));
    } else {
      root.classList.add('motion-ready');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );

      revealElements.forEach((element) => observer.observe(element));

      return () => {
        observer.disconnect();
        root.classList.remove('motion-ready');
      };
    }
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollProgress />
      <AmbientLayer />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <CreatorProfile />
        <Projects />
        <Stats />
        <Experience />
        <Skills />
        <Media />
        <CreatorFaq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
