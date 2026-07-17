import React from 'react';
import { Coins, Cpu, Gamepad2, Layers, Presentation, TrendingUp, Users, Video } from 'lucide-react';

const skillSet = [
  { name: 'Game Production', icon: Gamepad2 },
  { name: 'Monetization Specialist', icon: Coins },
  { name: 'Social Growth', icon: TrendingUp },
  { name: 'Influencer', icon: Presentation },
  { name: 'Roblox Studio', icon: Cpu },
  { name: 'Blender 3D', icon: Layers },
  { name: 'Video Production', icon: Video },
  { name: 'Community Leader', icon: Users },
];

const tickerTerms = [
  'Game Production',
  'Monetization',
  'Community Growth',
  'Content Creation',
  'Roblox Studio',
  'Blender 3D',
  'Social Growth',
  'Video Production',
  'Creative Direction',
  'Viral Marketing',
  'Live Operations',
  'UGC Strategy',
  'Audience Growth',
  'Game Analytics',
  'Player Retention',
  'Global Launches',
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="skills__wordmark" aria-hidden="true">ABILITIES</div>

      <div className="container">
        <div className="skills__header" data-reveal="up">
          <div>
            <p className="eyebrow">Abilities / 04</p>
            <h2 id="skills-title" className="section-title">Core<br /><span>skills.</span></h2>
          </div>
          <p>Game Production, Marketing Strategy &amp; Global Content Creation.</p>
        </div>

        <div className="skills__grid">
          {skillSet.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <article key={skill.name} className="skill-card" data-reveal="up">
                <div className="skill-card__top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
                <h3>{skill.name}</h3>
              </article>
            );
          })}
        </div>
      </div>

      <div className="skills__ticker" aria-hidden="true">
        <div className="skills__ticker-track">
          {[0, 1].map((group) => (
            <div key={group} className="skills__ticker-group">
              {tickerTerms.map((term) => (
                <React.Fragment key={`${group}-${term}`}>
                  <span>{term}</span>
                  <i />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
