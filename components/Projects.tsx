import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Mouse } from 'lucide-react';

interface Game {
  title: string;
  visits: string;
  image: string;
  link: string;
}

const games: Game[] = [
  {
    title: 'Steal A Brainrot',
    visits: '70B+ visits',
    image: '/images/steal-a-brainrot.webp',
    link: 'https://www.roblox.com/games/109983668079237/',
  },
  {
    title: 'Corridor of Hell',
    visits: '695M+ visits',
    image: '/images/corridor-of-hell.webp',
    link: 'https://www.roblox.com/games/4982363836/',
  },
  {
    title: 'My Singing Brainrot',
    visits: '288M+ visits',
    image: '/images/my-singing-brainrot.webp',
    link: 'https://www.roblox.com/games/89343390950953/',
  },
  {
    title: 'Dead Sails',
    visits: '40M+ visits',
    image: '/images/dead-sails.webp',
    link: 'https://www.roblox.com/games/85832836496852/',
  },
];

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLabelRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [immersive, setImmersive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const motionQuery = window.matchMedia('(min-width: 961px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;

    const update = () => {
      const enabled = motionQuery.matches;
      setImmersive(enabled);

      if (!enabled) {
        track.style.transform = '';
        section.style.setProperty('--project-progress', '0');
        if (progressLabelRef.current) progressLabelRef.current.textContent = '01';
        frame = 0;
        return;
      }

      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const travelled = window.scrollY - section.offsetTop;
      const progress = Math.min(1, Math.max(0, travelled / scrollableDistance));
      const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
      const nextIndex = Math.min(games.length - 1, Math.round(progress * (games.length - 1)));

      track.style.transform = `translate3d(${-overflow * progress}px, 0, 0)`;
      section.style.setProperty('--project-progress', String(progress));
      if (progressLabelRef.current) progressLabelRef.current.textContent = String(nextIndex + 1).padStart(2, '0');
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    motionQuery.addEventListener('change', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      motionQuery.removeEventListener('change', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const goToProject = useCallback((index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia('(min-width: 961px) and (prefers-reduced-motion: no-preference)').matches) {
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: section.offsetTop + (scrollableDistance * index) / (games.length - 1),
        behavior: 'smooth',
      });
      return;
    }

    document.getElementById(`project-${index + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects__sticky">
        <div className="projects__header container">
          <div data-reveal="up">
            <p className="eyebrow">Works / Selected</p>
            <h2 id="projects-title" className="section-title">Experiences<br /><span>at scale.</span></h2>
          </div>

          <div className="projects__meta">
            <p><Mouse size={16} aria-hidden="true" /> Scroll to explore</p>
            <div className="projects__count" aria-live="polite">
              <span ref={progressLabelRef}>01</span>
              <i />
              <small>{String(games.length).padStart(2, '0')}</small>
            </div>
          </div>
        </div>

        <div ref={trackRef} className="projects__track">
          {games.map((game, index) => {
            const active = activeIndex === index;
            return (
              <article
                id={`project-${index + 1}`}
                key={game.title}
                className={`project-card ${active ? 'is-active' : ''}`}
                aria-current={active ? 'true' : undefined}
              >
                <div className="project-card__image">
                  <img src={game.image} alt={game.title} width="512" height="512" loading="lazy" />
                  <div className="project-card__wash" aria-hidden="true" />
                </div>

                <div className="project-card__content">
                  <div className="project-card__topline">
                    <span>Case {String(index + 1).padStart(2, '0')}</span>
                    <span>Roblox Experience</span>
                  </div>
                  <div>
                    <h3>{game.title}</h3>
                    <p><strong>{game.visits.split(' ')[0]}</strong> {game.visits.split(' ').slice(1).join(' ')}</p>
                  </div>
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    tabIndex={immersive && !active ? -1 : 0}
                  >
                    View game <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>

                <span className="project-card__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </article>
            );
          })}
        </div>

        <div className="projects__navigation container" aria-label="Choose project">
          <span className="projects__progress-track" aria-hidden="true"><i /></span>
          <div>
            {games.map((game, index) => (
              <button
                key={game.title}
                type="button"
                className={activeIndex === index ? 'is-active' : ''}
                onClick={() => goToProject(index)}
                aria-label={`Go to ${game.title}`}
                aria-controls={`project-${index + 1}`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
