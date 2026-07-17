import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';

interface AboutContentProps {
  preview?: boolean;
  titleId?: string;
}

const AboutContent: React.FC<AboutContentProps> = ({ preview = false, titleId }) => {
  const reveal = (direction: 'left' | 'scale' | 'up') => (preview ? undefined : direction);

  return (
    <>
      <div className="section__rail" aria-hidden="true">
        <span>01</span>
        <i />
        <p>Origin story</p>
      </div>

      <div className="container about__grid">
        <div className="about__visual" data-reveal={reveal('left')}>
          <div className="about-photo">
            <div className="about-photo__outline" aria-hidden="true" />
            <img
              src="/images/gustavo-cantino.jpg"
              alt={preview ? '' : 'Gustavo Cantino'}
              width="1330"
              height="2364"
              loading="lazy"
            />
            <div className="about-photo__caption">
              <span>Gustavo Cantino</span>
              <span>Game Producer</span>
            </div>
          </div>

          <div className="about__years" data-reveal={reveal('scale')}>
            <Sparkles size={18} aria-hidden="true" />
            <strong>10+</strong>
            <span>Years in Roblox</span>
          </div>
        </div>

        <div className="about__copy">
          <div data-reveal={reveal('up')}>
            <p className="eyebrow">Background</p>
            <h2 id={titleId} className="section-title">
              From player<br />
              <span>to pioneer.</span>
            </h2>
          </div>

          <div className="about__story" data-reveal={reveal('up')}>
            <p>
              Starting at age 11, I turned a curiosity for virtual worlds into a record-breaking career. By 15, I launched my first major project, laying the foundation for <strong>Corridor of Hell</strong>.
            </p>
            <p>
              Today, with over <strong>70 Billion visits</strong>, my work focuses on bridging high-fidelity production with massive community growth.
            </p>
          </div>

          <div className="about__focus" data-reveal={reveal('up')}>
            <div>
              <p className="eyebrow">Main focus</p>
              <p>Game Production, Marketing Strategy &amp; Global Content Creation.</p>
            </div>
            <ArrowDownRight size={28} aria-hidden="true" />
          </div>

          <div className="about__signature" aria-hidden="true" data-reveal={reveal('up')}>
            <span>Player</span><i />
            <span>Builder</span><i />
            <span>Producer</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const AboutPortalPreview: React.FC = () => (
  <div className="hero__portal section about" aria-hidden="true" data-nosnippet="">
    <AboutContent preview />
  </div>
);

export const About: React.FC = () => {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <AboutContent titleId="about-title" />
    </section>
  );
};
