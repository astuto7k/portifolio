import React from 'react';
import { ArrowDown } from 'lucide-react';

const experiences = [
  {
    title: 'Game Producer',
    company: 'Steal a Brainrot',
    period: 'Current',
    desc: "Overseeing game production pipeline, viral marketing, and strategic growth for one of the scene's rising titles.",
  },
  {
    title: 'Roblox Community Ambassador',
    company: 'Roblox',
    period: 'Ongoing',
    desc: 'Bridging the gap between corporate vision and the developer community in the Brazilian ecosystem.',
  },
  {
    title: 'UGC Creator',
    company: 'Roblox Marketplace',
    period: '2020 — Present',
    desc: 'Creating and scaling virtual product lines with over 3,000,000 individual sales to date.',
  },
  {
    title: 'Discord Community Leader',
    company: 'Roblox Developers',
    period: '2019 — Present',
    desc: 'Managing a high-level community of 12,000+ developers, fostering collaboration and knowledge exchange.',
  },
  {
    title: 'Content Creator',
    company: 'YouTube & TikTok',
    period: '2018 — Present',
    desc: 'Built an audience of 650k+ subscribers with focused content on game development and Roblox culture.',
  },
  {
    title: 'Game Marketing Specialist',
    company: 'Freelance',
    period: '2017 — Present',
    desc: 'Advising studios on community growth, influencer outreach, and player retention strategies.',
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container experience__grid">
        <div className="experience__intro">
          <div className="experience__intro-sticky" data-reveal="up">
            <p className="eyebrow">Track record / 03</p>
            <h2 id="experience-title" className="section-title">
              Experience<br /><span>timeline.</span>
            </h2>
            <div className="experience__scroll-label" aria-hidden="true">
              <ArrowDown size={16} />
              <span>Follow the journey</span>
            </div>
          </div>
        </div>

        <ol className="timeline">
          {experiences.map((experience, index) => (
            <li key={`${experience.title}-${experience.company}`} className="timeline__item" data-reveal="up">
              <div className="timeline__marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <i />
              </div>
              <article>
                <div className="timeline__meta">
                  <time>{experience.period}</time>
                  <span>{experience.company}</span>
                </div>
                <h3>{experience.title}</h3>
                <p>{experience.desc}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
