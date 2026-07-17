import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Gamepad2, MessageSquare, Youtube } from 'lucide-react';
import { TikTokIcon, XIcon } from './SocialIcons';
import { AboutPortalPreview } from './About';

const socialLinks = [
  { name: 'X / Twitter', icon: <XIcon />, href: 'https://x.com/Guga_028' },
  { name: 'Roblox', icon: <Gamepad2 size={18} aria-hidden="true" />, href: 'https://www.roblox.com/users/168572769/profile' },
  { name: 'YouTube', icon: <Youtube size={18} aria-hidden="true" />, href: 'https://www.youtube.com/@Guga028' },
  { name: 'TikTok', icon: <TikTokIcon />, href: 'https://www.tiktok.com/@guga_028' },
  { name: 'Discord', icon: <MessageSquare size={18} aria-hidden="true" />, href: 'https://discord.com/users/168572769' },
];

const capabilities = ['Game producer', 'Game marketer', 'Builder', 'Modeler', 'Content creator'];

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return undefined;

    const motionQuery = window.matchMedia('(min-width: 961px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let scrollListening = false;

    const update = () => {
      const range = Math.max(1, section.offsetHeight - window.innerHeight);
      const travelled = window.scrollY - section.offsetTop;
      const progress = motionQuery.matches ? Math.min(1, Math.max(0, travelled / range)) : 0;
      const clamp = (value: number) => Math.min(1, Math.max(0, value));
      const smoothstep = (value: number) => value * value * (3 - 2 * value);
      const zoomTime = smoothstep(clamp((progress - 0.12) / 0.56));
      const portalTime = smoothstep(clamp((progress - 0.24) / 0.62));
      const exitTime = smoothstep(clamp((progress - 0.62) / 0.24));
      const sceneScale = 1 + zoomTime * 1.75;
      const portalRadius = 0.15 + portalTime * 86;
      const portalScale = 0.94 + portalTime * 0.06;
      const ringOpacity = Math.sin(portalTime * Math.PI) * 0.44;
      const sceneOpacity = 1 - exitTime * 0.96;
      const sceneIsHidden = motionQuery.matches && progress >= 0.84;

      section.style.setProperty('--hero-progress', progress.toFixed(4));
      section.style.setProperty('--hero-scene-scale', sceneScale.toFixed(4));
      section.style.setProperty('--hero-scene-opacity', sceneOpacity.toFixed(4));
      section.style.setProperty('--hero-portal-radius', `${portalRadius.toFixed(2)}vmax`);
      section.style.setProperty('--hero-portal-scale', portalScale.toFixed(4));
      section.style.setProperty('--hero-ring-opacity', ringOpacity.toFixed(4));
      section.toggleAttribute('data-portal-complete', motionQuery.matches && progress >= 0.999);
      scene.toggleAttribute('inert', sceneIsHidden);
      if (sceneIsHidden) scene.setAttribute('aria-hidden', 'true');
      else scene.removeAttribute('aria-hidden');
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const syncMotionMode = () => {
      if (motionQuery.matches && !scrollListening) {
        window.addEventListener('scroll', requestUpdate, { passive: true });
        scrollListening = true;
      } else if (!motionQuery.matches && scrollListening) {
        window.removeEventListener('scroll', requestUpdate);
        scrollListening = false;
      }
      requestUpdate();
    };

    syncMotionMode();
    window.addEventListener('resize', requestUpdate);
    motionQuery.addEventListener('change', syncMotionMode);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      motionQuery.removeEventListener('change', syncMotionMode);
      scene.removeAttribute('inert');
      scene.removeAttribute('aria-hidden');
      section.removeAttribute('data-portal-complete');
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__stage">
        <AboutPortalPreview />

        <div ref={sceneRef} className="hero__scene">
          <div className="hero__backdrop" aria-hidden="true">
            <span className="hero__monogram">028</span>
          </div>

          <div className="hero__inner">
            <div className="hero__copy">
              <div className="hero__status-row">
                <p className="eyebrow">Official portfolio</p>
                <span className="availability"><i /> Open to collaborations</span>
              </div>

              <p className="hero__identity">Gustavo Cantino · Roblox creator</p>
              <h1 id="hero-title" className="hero__title" aria-label="Guga028">
                <span className="hero__title-word">Guga</span>
                <strong className="hero__title-number">028</strong>
              </h1>

              <p className="hero__statement">
                Roblox game producer, marketer and creator building <em>at scale.</em>
              </p>

              <p className="hero__intro">
                Building games, communities and audiences through production, viral marketing and strategic growth — with 70B+ total visits contributed across featured work.
              </p>

              <div className="hero__actions">
                <a href="#projects" className="button button--primary">
                  View projects <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a href="#contact" className="button button--ghost">
                  Contact <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>

              <div className="hero__socials" aria-label="Official Guga028 profiles">
                <span>Official profiles</span>
                <div>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero__visual" aria-label="Guga028 character artwork">
              <div className="hero__role">
                <span>Current role</span>
                <strong>Game Producer</strong>
              </div>

              <div className="hero-keyart">
                <span className="hero-keyart__signal" aria-hidden="true" />
                <img
                  src="/images/guga-avatar-full-transparent.png"
                  alt="Guga028 character wearing a dark suit and hat with pink antlers, holding a sword"
                  width="500"
                  height="500"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div className="hero__metric">
                <strong>70B+</strong>
                <span>Total visits contributed</span>
              </div>
            </div>
          </div>

          <div className="hero__ledger" aria-label="Areas of expertise">
            <span>Capabilities</span>
            <div>
              {capabilities.map((capability) => <b key={capability}>{capability}</b>)}
            </div>
          </div>

          <a href="#about" className="hero__scroll-cue" aria-label="Go to About — Guga028 origin story">
            <span>
              <small>Next chapter · 01</small>
              <strong>Origin story</strong>
            </span>
            <i><ArrowDown size={14} aria-hidden="true" /></i>
          </a>
        </div>

        <div className="hero__portal-ring" aria-hidden="true" />
      </div>
    </section>
  );
};
